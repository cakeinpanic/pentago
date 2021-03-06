export enum COLOR {
  BLACK = 'BLACK', WHITE = 'WHITE'
}

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
