import { Component, OnDestroy, OnInit } from '@angular/core';
import { ITodo } from '../core/models/ITodo.model';
import { Subject, takeUntil } from 'rxjs';
import { TodoService } from '../core/services/todo.service';
import { TodoState } from '../core/services/todo.state';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todos$ = this.todoState.todos$

  constructor(
    private readonly todoState: TodoState
  ) { }

  public onDeleteCard(todo: ITodo) {
    this.todoState.delete(todo.id);
  }

  public onEditCard(editedTodo: ITodo) {
    this.todoState.update(editedTodo);
  }

  public onToggleIsDone(todo: ITodo) {
    this.todoState.update(todo);
  }

  public onAddTodo(){

  }
}
