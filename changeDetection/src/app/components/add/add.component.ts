import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  valueToAdd = 1000;
  @Output('add') addedValue: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  add() {
    this.addedValue.emit(this.valueToAdd);
  }
}
