import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <input style="padding-right: 60px" type="text" [(ngModel)]="name"/><br/>

    <span *ngFor="let s of skill; let i = index">
    <h4><app-child [name]="name" (voted)="onVoted($event, i)"></app-child> {{s}}</h4>
    </span>
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
}
