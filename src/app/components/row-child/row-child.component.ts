import { Component, Input } from '@angular/core';
import { IRowChild } from 'src/app/interfaces';

@Component({
  selector: 'app-row-child',
  templateUrl: './row-child.component.html',
  styleUrls: ['./row-child.component.scss']
})
export class RowChildComponent {
  @Input() rowChild: IRowChild = {
    id: '',
    color: ''
  }
}
