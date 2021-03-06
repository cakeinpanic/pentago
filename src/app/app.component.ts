import { Component, Inject } from '@angular/core';
import { RxState } from '@rx-angular/state';
import { GLOBAL_RX_STATE, GlobalState, initialState } from './state/state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pentago';

  constructor(@Inject(GLOBAL_RX_STATE) private state: RxState<GlobalState>) {
    this.state.set(initialState);
  }

}
