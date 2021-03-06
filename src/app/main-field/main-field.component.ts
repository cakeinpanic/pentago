import { Component, Inject, OnInit } from '@angular/core';
import { RxState } from '@rx-angular/state';
import { Observable } from 'rxjs';
import { Cell } from '../models/game';
import { GLOBAL_RX_STATE, GlobalState } from '../state/state';

@Component({
  selector: 'app-main-field',
  templateUrl: './main-field.component.html',
  styleUrls: ['./main-field.component.scss'],
  providers: [RxState],
})
export class MainFieldComponent implements OnInit {
  readonly game$: Observable<GlobalState> = this.state.select();

  constructor(@Inject(GLOBAL_RX_STATE) private state: RxState<GlobalState>) {
    this.game$.subscribe(t => {
      console.log(t);
    });
  }

  ngOnInit(): void {

  }

  onItemAdd(name: 'topLeftField' | 'topRightField' | 'bottomLeftField' | 'bottomRightField', cells: Cell[][]): void {
    this.state.set(name, () => {
      return { cells };
    });
  }

}
