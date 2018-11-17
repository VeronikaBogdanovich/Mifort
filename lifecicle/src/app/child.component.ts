import {
  Component,
  Input,
  OnInit,
  DoCheck,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy, EventEmitter, Output
} from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    {{name}}
  <button (click)="vote(true)">Up</button>
    <button (click)="vote(false)">Down</button>`
})
export class ChildComponent implements OnInit,
  DoCheck,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit, OnDestroy  {
  @Input() name: string;
  count = 1;
  @Input()  skill: number;
  @Output() voted = new EventEmitter<boolean>();
  vote(agreed: boolean) {
    this.voted.emit(agreed);
  }

  ngOnInit() {
    this.log(`ngOnInit`);
  }
  ngOnChanges() {
    this.log(`OnChanges`);
  }
  ngDoCheck() {
    this.log(`ngDoCheck`);
  }
  ngAfterViewInit() {
    this.log(`ngAfterViewInit`);
  }
  ngAfterViewChecked() {
    this.log(`ngAfterViewChecked`);
  }
  ngAfterContentInit() {
    this.log(`ngAfterContentInit`);
  }
  ngAfterContentChecked() {
    this.log(`ngAfterContentChecked`);
  }
  ngOnDestroy() {
    this.log(`onDestroy`);
  }

  private log(msg: string) {
    console.log(this.count + '. ' + msg);
    this.count++;
  }
}
