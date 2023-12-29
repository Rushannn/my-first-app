import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
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

}



