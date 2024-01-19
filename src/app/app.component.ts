import { Component, OnDestroy, OnInit } from '@angular/core';
import { ITodo } from './core/models/ITodo.model';
import { TodoService } from './core/services/todo.service';
import { Subject, takeUntil } from 'rxjs';
import { AuthState } from './core/services/auth.state';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'my-first-app';

  constructor(
    private authState: AuthState
  ) { }


  ngOnInit(): void {
    const token: string | undefined | null = localStorage.getItem('token')
    if (token) {
      this.authState.authTokenSubject.next(token);
      console.log('ngOnInit',token)
    }
  }



}
