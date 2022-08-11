import { Injectable, NotFoundException } from '@nestjs/common';
import { unused } from 'src/utils';
import { Coffee } from './entites/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Shipwreck Roast',
      brand: 'Buddy brew',
      flavors: ['chocolate', 'vanilla'],
    },
  ];

  findAll(query: { limit: string; offset: string }) {
    unused(query);
    return this.coffees;
  }

  findOne(id: string) {
    const coffee = this.coffees.find((item) => item.id === +id);
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }

    return coffee;
  }

  create(createCoffeeDto: any) {
    this.coffees.push(createCoffeeDto);
    return createCoffeeDto;
  }

  update(id: string, updateCoffeeDto: any) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
      Object.assign(existingCoffee, updateCoffeeDto);
      existingCoffee.id = +id;
    }
  }

  remove(id: string) {
    this.coffees = this.coffees.filter((coffee) => coffee.id !== +id);
  }
}
