import {Component} from '@angular/core';
import {User} from './models/user.interface';
import {SkillsEnum} from './models/skills.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  user: any;
  uType: User = new User();

  constructor() {
    this.user = {
      name: 'aaa',
      email: {local: 'aaa', domain: 'mail.ru'},
      confirm: false,
      age: 12,
      skill: SkillsEnum.ANGULAR
    };
  }

  onFormChange(user: any) {
    console.log('user is changed ->', user);
  }
}
