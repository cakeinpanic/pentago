import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { RxState } from '@rx-angular/state';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cell, COLOR, Field } from '../models/game';
import { GLOBAL_RX_STATE, GlobalState } from '../state/state';

@Component({
  selector: 'app-small-field',
  templateUrl: './small-field.component.html',
  styleUrls: ['./small-field.component.scss'],
  providers: [RxState],
})
export class SmallFieldComponent implements OnInit {
  readonly field$: Observable<Field> = this.state.select('field');
  readonly cells$: Observable<Cell[][]> = this.field$.pipe(map(({ cells }) => cells));

  @Input() set field(field: Field) {
    this.state.set({ field });
  }

  @Output() onItemAdd = new EventEmitter<Cell[][]>();

  constructor(private state: RxState<{ field: Field }>, @Inject(GLOBAL_RX_STATE) private globalState: RxState<GlobalState>) { }

  addItem(cell: Cell, x: number, y: number): void {
    if (!!cell.color) {
      return;
    }
    const cells: Cell[][] = JSON.parse(JSON.stringify(this.cells));
    cells[x][y].color = this.globalState.get('currentTurn');

    this.onItemAdd.emit(cells);
  }

  get cells(): Cell[][] {
    return this.state.get('field').cells;
  }

  isBlack(cell: Cell): boolean {
    return cell.color === COLOR.BLACK;
  }

  isWhite(cell: Cell): boolean {
    return cell.color === COLOR.WHITE;
  }

  ngOnInit(): void {
  }

}
