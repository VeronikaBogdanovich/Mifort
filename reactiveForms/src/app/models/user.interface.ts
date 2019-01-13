import {SkillsEnum} from './skills.model';

export class User {
  name: string;
  email: Email;
  confirm: boolean;
  age: number;
  skill: SkillsEnum;

  constructor(name?: string, email?: Email, confirm?: boolean, age?: number, skill?: SkillsEnum) {
    this.name = name;
    this.email = email;
    this.confirm = confirm;
    this.age = age;
    this.skill = skill;
  }
}

export interface Email {
  local: string;    // before @
  domain: string;   // after @
}
