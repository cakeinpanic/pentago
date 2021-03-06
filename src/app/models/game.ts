export enum COLOR {
  BLACK = 'BLACK', WHITE = 'WHITE'
}

export const GAME_SIZE = 3;
export interface Cell {
  color: COLOR | null
}

export interface Field {
  cells: Cell[][],
}

export interface Game {
  topLeftField: Field,
  topRightField: Field,
  bottomRightField: Field,
  bottomLeftField: Field
}
