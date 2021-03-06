import { InjectionToken } from '@angular/core';
import { RxState } from '@rx-angular/state';
import { Cell, COLOR, Game, GAME_SIZE } from '../models/game';

export interface GlobalState {
  currentTurn: COLOR,
  game: Game
}

const emptyField = (): Cell[][] => {
  return new Array(GAME_SIZE).fill(0).map(() => new Array(GAME_SIZE).fill(0).map(() => ({ color: null })));
};

export const initialState: GlobalState = {
  currentTurn: COLOR.WHITE,
  game: {
    topLeftField: {
      cells: emptyField()
    },
    topRightField: {
      cells: emptyField()
    },
    bottomLeftField: {
      cells: emptyField()
    },
    bottomRightField: {
      cells: emptyField()
    }
  }
};

export const GLOBAL_RX_STATE = new InjectionToken<RxState<GlobalState>>('GLOBAL_RX_STATE');
