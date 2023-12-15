import { Component, Input } from '@angular/core';
import { ITodo } from '../core/models/ITodo.model';

@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.css']
})
export class CardEditComponent {

  @Input() todoToEdit: ITodo | undefined;

}
