import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-push',
  templateUrl: './push.component.html',
  styleUrls: ['./push.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PushComponent implements OnInit, OnChanges {
  @Input() valueToAdd: {num: number};
  passed = 0;
  interval;

  startTimer() {
    this.interval = setInterval(() => {
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
