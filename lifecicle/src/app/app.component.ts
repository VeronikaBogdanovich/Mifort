import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <input style="padding-right: 60px" type="text" [(ngModel)]="name"/><br/>
    <!--<app-child [name]="name"></app-child>-->
    <!--<input type="number" (keyup)="changeInputValue($event, 0)" /><br />-->

    <!--<app-child [name]="name"></app-child>-->
    <!--<input type="number" (keyup)="changeInputValue($event, 1)" /><br />-->

    <!--<app-child [name]="name"></app-child>-->
    <!--<input type="number" (keyup)="changeInputValue($event, 2)" /> <br />-->

    <!--<h3 *ngIf="hasSum">Total skill: {{ sum }}</h3>-->
    <span *ngFor="let s of skill; let i = index">
    <h4><app-child [name]="name" (voted)="onVoted($event, i)"></app-child> {{s}}</h4>
    </span>
    <!--<h4>{{skill}}<app-child [name]="name" (voted)="onVoted($event)"></app-child> {{s}}</h4>-->
    <!--<h4><app-child [name]="name" (voted)="onVoted($event)"></app-child> {{s}}</h4>-->
    <!--<h4><app-child [name]="name" (voted)="onVoted($event)"></app-child> {{s}}</h4>-->
    <h3 *ngIf="hasSum">Total skill: {{sum}}</h3>

    <button (click)="toggleHasSum()">Завершить</button>
  `
})
export class AppComponent {
  name = 'Veronika';
  skill = [1, 2, 3];
  sum = this.skill[0] + this.skill[1] + this.skill[2];
  hasSum = true;

  onVoted(sum: boolean, i) {
    sum ? this.sum++ : this.sum--;
    sum ? this.skill[i]++ : this.skill[i]--;
  }

  toggleHasSum() {
    this.hasSum = !this.hasSum;
  }

  // changeInputValue(event, number) {
  //   console.warn(event);
  //   switch (number) {
  //     case 0:
  //       this.skill1 = +event.target.value;
  //       break;
  //
  //     case 1:
  //       this.skill2 = +event.target.value;
  //       break;
  //
  //     case 2:
  //       this.skill3 = +event.target.value;
  //       break;
  //     default:
  //       console.log('NONONONO!');
  //   }
  //
  //   this.updateSum();
  // }

  // updateSum() {
  //   this.sum = 0;
  //
  //   if (this.skill1) {
  //     this.sum += this.skill1;
  //   }
  //
  //   if (this.skill2) {
  //     this.sum += this.skill2;
  //   }
  //
  //   if (this.skill3) {
  //     this.sum += this.skill3;
  //   }
  // }
}
