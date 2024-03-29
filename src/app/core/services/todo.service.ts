import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment.development';
import { ITodo } from '../models/ITodo.model';
import { Observable } from 'rxjs';
import { ITodoForCreate } from '../models/ITodoForCreate';




@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private http: HttpClient,
  ) { }

  getTodo() {
    const url = `${environment.api_url}/todo`;
    return this.http.get<any>(url);
  }

  deleteTodo(id: number) {
    const url = `${environment.api_url}/todo/${id}`;
    return this.http.delete<any>(url);
  }

  editTodo(todo: ITodo) {
    const payload = {
      name: todo.name,
      isDone: todo.isDone,
      date: todo.date
    }
    const url = `${environment.api_url}/todo/${todo.id}`;
    return this.http.patch<any>(url, payload);
  }

  createTodo(payload:ITodoForCreate) {
    const url = `${environment.api_url}/todo`;
    return this.http.post<any>(url, payload);
  }
}
