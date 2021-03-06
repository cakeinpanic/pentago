import { Component, Inject, OnInit } from '@angular/core';
import { RxState } from '@rx-angular/state';
import { Observable } from 'rxjs';
import { Game } from '../models/game';
import { GLOBAL_RX_STATE, GlobalState } from '../state/state';

@Component({
  selector: 'app-main-field',
  templateUrl: './main-field.component.html',
  styleUrls: ['./main-field.component.scss'],
  providers: [RxState],
})
export class MainFieldComponent implements OnInit {
  readonly game$: Observable<Game> = this.state.select('game');

  constructor(@Inject(GLOBAL_RX_STATE) private state: RxState<GlobalState>) { }

  ngOnInit(): void {
  }

}
