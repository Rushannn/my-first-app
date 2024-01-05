import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, subscribeOn } from "rxjs";
import { ITodo } from "../models/ITodo.model";
import { TodoService } from "./todo.service";

@Injectable({
  providedIn: 'root'
})
export class TodoState {

  private todosStateSubject = new BehaviorSubject<ITodo[]>([]);
  public todos$: Observable<ITodo[]> = this.todosStateSubject.asObservable();

  constructor(
    private todoService: TodoService
  ) {
    this.read();
  }

  get todos() {
    return this.todosStateSubject.getValue();
  }

  read() {
    this.todoService.getTodo()
      .subscribe(
        {
          next: (res) => {
            this.todosStateSubject.next(res);
          },
          error: (error) => {
            console.error('Error', error)
          }
        }
      );
  }

  create(payload: {
    name: string,
    isDone: boolean,
    date: string
  }) {
    this.todoService.createTodo(payload)
      .subscribe({
        next: ((res) => {

        }),
        error: ((error) => {
          console.error('Todo create error', error)
        })

      })
  }

  update(todo: ITodo) {
    this.todoService.editTodo(todo)
      .subscribe({
        next: ((responce) => {
          const upadatedTodos: ITodo[] = this.todos.map(item => {
            if (item.id === todo.id) {
              return todo;
            } else {
              return item;
            }
          });
          this.todosStateSubject.next(upadatedTodos);
        }),
        error: ((error) => {
          console.error('Todo update error', error)
        })
      })
  }

  delete(id: number) {
    console.log(' deleteTodo in state')
    this.todoService.deleteTodo(id)
      .subscribe(
        {
          next: (res) => {
            const newTodos: ITodo[] = this.todos.filter(item => item.id !== id);
            this.todosStateSubject.next(newTodos);
          },
          error: (err) => console.error('Todo delete error', err)
        }
      )
  }

}



