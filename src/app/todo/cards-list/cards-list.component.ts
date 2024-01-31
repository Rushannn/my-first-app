import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITodo } from '../../core/models/ITodo.model';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {

  }

  onDelete(todo: ITodo) {
    this.deleteCard.emit(todo);
  }

  onEdit(editedTodo: ITodo) {
    this.editCard.emit(editedTodo);
  }

  onToggleIsDone(todo: ITodo) {
    this.toggleIsDone.emit(todo);
  }

  redirectToDetail(id: number) {
    this.router.navigate(['/todo', id]);
  }
}
