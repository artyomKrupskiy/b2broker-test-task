import { Component, Input } from '@angular/core';
import { IRow } from 'src/app/interfaces';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent {
  @Input() rowData: IRow[] = []
}
