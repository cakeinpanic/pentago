import { Component, Input, OnInit } from '@angular/core';
import { RxState } from '@rx-angular/state';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cell, COLOR, Field } from '../models/game';

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

  isBlack(cell: Cell) {
    return cell.color === COLOR.BLACK;
  }

  isWhite(cell: Cell) {
    return cell.color === COLOR.WHITE;
  }

  constructor(private state: RxState<{ field: Field }>) { }

  ngOnInit(): void {
  }

}
