import { PrimaryGeneratedColumn } from "typeorm";

const EntitySchema = require('typeorm').EntitySchema;

module.exports = new EntitySchema({
  name: 'Skill',
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    name: {
      type: 'text',
      unique: true,
    },
  },
});

@Entity ()
class Skill {
  @PrimaryGeneratedColumn()
  id: number 

  @column
}