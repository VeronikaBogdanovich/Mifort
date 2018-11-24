import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit, OnChanges {
  @Input() valueToAdd: {num: number};
  passed = 0;
  time;

  startTimer() {
    this.time = setInterval(() => {
      if (this.passed >= 0) {
        this.passed++;
      } else {
        this.passed = 0;
      }
    }, 1000);
  }

  ngOnInit() {
    this.startTimer();
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (this.valueToAdd && this.valueToAdd.num) {
      this.passed += this.valueToAdd.num;
    }
  }


  constructor() { }

}
