import { Component, OnDestroy, OnInit } from '@angular/core';
import { ITodo } from '../core/models/ITodo.model';
import { Subject, takeUntil } from 'rxjs';
import { TodoService } from '../core/services/todo.service';
import { TodoState } from '../core/services/todo.state';
import { MatDialog } from '@angular/material/dialog';
import { CreateTodoModalComponent } from './create-todo-modal/create-todo-modal.component';
import { ITodoForCreate } from '../core/models/ITodoForCreate';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todos$ = this.todoState.todos$

  constructor(
    private readonly todoState: TodoState,
    private dialog: MatDialog
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

  public onAddTodo() {
    const dialogRef = this.dialog.open(CreateTodoModalComponent);

    dialogRef.afterClosed()
    .subscribe(result => {
      console.log('result', result);
      const createdTodo: ITodoForCreate = {
        name: result.name,
        date: result.date,
        isDone: false
      };

      this.todoState.create(createdTodo);
    });
  }
}
