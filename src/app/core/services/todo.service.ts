import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment.development';




@Injectable({
  providedIn: 'root'
})
export class TodoService {


  constructor(
    private http: HttpClient,
  ) { }

  getTodo() {
    const url = `${environment.api_url}/todo`
    return this.http.get<any>(url);
  }

  deleteTodo(id: number) {
    const url = `${environment.api_url}/todo/${id}`
    return this.http.delete<any>(url);
  }
}
