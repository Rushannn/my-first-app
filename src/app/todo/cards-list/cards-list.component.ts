import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITodo } from '../../core/models/ITodo.model';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css']
})
export class CardsListComponent {
  @Input() todoList: any;
  @Output() deleteCard: EventEmitter<ITodo> = new EventEmitter<ITodo>();
  @Output() editCard: EventEmitter<ITodo> = new EventEmitter<ITodo>();
  @Output() toggleIsDone = new EventEmitter<ITodo>();

  onDelete(todo: ITodo) {
    this.deleteCard.emit(todo);
    console.log('todo in todoListComponent', todo)
  }

  onEdit(editedTodo: ITodo) {
    this.editCard.emit(editedTodo);
  }

  onToggleIsDone(todo: ITodo) {
    this.toggleIsDone.emit(todo);
  }
}
