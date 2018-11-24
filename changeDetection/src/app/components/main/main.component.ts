import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  valueToAdd: {num: number};
  constructor() { }

  ngOnInit() {
  }

  add(value: number) {
    this.valueToAdd = {num: value};
  }

}
