import { Component, OnDestroy, OnInit } from '@angular/core';
import { ITodo } from './core/models/ITodo.model';
import { TodoService } from './core/services/todo.service';
import { Subject, takeUntil } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'my-first-app';
  name!: string;
  cardToEdit: ITodo | undefined;
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

  onDeleteCard(todo: ITodo) {
    this.deleteTodo(todo.id);
  }

  onEditCard(todo: ITodo) {
    this.cardToEdit = todo;
  }

  saveEdit(todo: ITodo): void {
    this.todoListMain.map((thisTodo: ITodo) => {
      if (thisTodo.id === todo.id) {
        thisTodo = todo;
      }
    });
  }

  getTodo() {
    this.todoService.getTodo()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (res) => {
          console.log('res', res);
          this.todoListMain = res;
        },
        (err) => {
          console.error('Error', err);
        }
      );
  }

  deleteTodo(id: number) {
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
}
