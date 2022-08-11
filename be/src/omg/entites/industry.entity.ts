import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'panel_industry',
})
export class Industry {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  @Column()
  industry_name: string;

  @Column()
  proj_num: number;

  @Column()
  business_num: number;
}
