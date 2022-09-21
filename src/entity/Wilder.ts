import { PrimaryGeneratedColumn, Entity, Column, OneToMany } from "typeorm";
import Grade from "./Grade";


@Entity ()
class Wilder {
  @PrimaryGeneratedColumn()
  id: number 

  @Column()
   name?: string;

   @Column({nullable: true, length: 100})
   city?: string ;

   @Column({length: 500, nullable: true})
   bio: string ;

   @OneToMany(()=> Grade,(g)=> g.wilder)
   grades: Grade[];
}

export default Wilder
