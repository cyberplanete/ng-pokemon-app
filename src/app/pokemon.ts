export class Pokemon {
  id: number;
  name: string;
  types: string[];
  hp: number;
  cp: number;
  picture: string;
  created: Date;
  constructor(id: number, name: string, types: string[], hp: number, cp: number, picture: string, created: Date) {
    this.id = id;
    this.name = name;
    this.types = types;
    this.hp = hp;
    this.cp = cp;
    this.picture = picture;
    this.created = created;
  }
}