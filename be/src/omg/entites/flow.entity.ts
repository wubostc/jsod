import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'panel_flow',
})
export class Flow {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  @Column()
  name: string;

  @Column()
  value: string;
}
