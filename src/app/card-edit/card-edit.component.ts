import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { ITodo } from '../core/models/ITodo.model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.css'],
})
export class CardEditComponent {
  name?: string;
  date?: string;

  @Input() todoToEdit: ITodo | undefined;

  @Output() editCard1 = new EventEmitter<any>();

  saveEdit() {
    if (this.name !== undefined && this.todoToEdit !== undefined) {
      this.todoToEdit.name = this.name;
    }
    if (this.date !== undefined && this.todoToEdit !== undefined) {
      this.todoToEdit.date = this.date;
    }

    if (this.todoToEdit !== undefined) {
      this.editCard1.emit(this.todoToEdit);
    }
    this.todoToEdit = undefined;
  }
}
