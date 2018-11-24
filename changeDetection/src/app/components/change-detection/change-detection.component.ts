import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionComponent implements OnInit, OnChanges {

  @Input() valueToAdd: {num: number};
  passed = 0;
  time;

  startTimer() {
    this.time = setInterval(() => {
      if (this.passed >= 0) {
        this.passed++;
        this.cd.detectChanges();
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
      this.cd.detectChanges();
    }
  }

  constructor(private cd: ChangeDetectorRef) { }
}
