import { Component, OnInit } from '@angular/core';
import { RxState } from '@rx-angular/state';
import { COLOR, Field } from '../models/game';

@Component({
  selector: 'app-main-field',
  templateUrl: './main-field.component.html',
  styleUrls: ['./main-field.component.scss'],
  providers: [RxState],
})
export class MainFieldComponent implements OnInit {
  field: Field = {
    cells: [
      [{ color: COLOR.WHITE }, { color: null }, { color: COLOR.BLACK }],
      [{ color: COLOR.BLACK }, { color: null }, { color: COLOR.WHITE }],
      [{ color: null }, { color: null }, { color: COLOR.BLACK }],
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
