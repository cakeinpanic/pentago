import { Component, Inject, OnInit } from '@angular/core';
import { RxState } from '@rx-angular/state';
import { GLOBAL_RX_STATE, GlobalState } from '../state/state';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  providers: [RxState],
})
export class GameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
