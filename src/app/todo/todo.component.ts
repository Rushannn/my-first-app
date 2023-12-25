import { Component, OnDestroy, OnInit } from '@angular/core';
import { ITodo } from '../core/models/ITodo.model';
import { Subject, takeUntil } from 'rxjs';
import { TodoService } from '../core/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit, OnDestroy {
  name!: string;
  // cardToEdit: ITodo | undefined;
  todoClickInfo?: ITodo;

  todoListMain: ITodo[] = [];
  $event1: any;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private readonly todoService: TodoService,
  ) {
  }

  ngOnInit(): void {
    this.getTodo();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public onDeleteCard(todo: ITodo) {
    this.deleteTodo(todo.id);
  }

  public onEditCard(editedTodo: ITodo) {
    this.editTodo(editedTodo)
  }

  public onToggleIsDone(todo: ITodo) {
    this.editTodo(todo);
  }

  saveEdit(todo: ITodo): void {
    this.todoListMain.map((thisTodo: ITodo) => {
      if (thisTodo.id === todo.id) {
        thisTodo = todo;
      }
    });
  }

  private getTodo() {
    this.todoService.getTodo()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (res) => {
          console.log('res', res);
          this.todoListMain = res;
        },
        error: (err) => {
          console.error('Error', err);
        },
      }
      );
  }

  private deleteTodo(id: number) {
    this.todoService.deleteTodo(id)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (res) => {
          this.getTodo();
        },
        (err) => {
          console.error('Error', err);
        }
      );
  }

  private editTodo(todo: ITodo) {
    this.todoService.editTodo(todo)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (res) => {
          this.todoListMain = this.todoListMain.map((item) => {
            if (item.id === res.id) {
              return res;
            } else {
              return item;
            }
          });
        },
        error: (err) => console.log('Error', err)
      })
  }

}
