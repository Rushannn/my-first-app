import { Component, OnDestroy, OnInit } from '@angular/core';
import { ITodo } from './core/models/ITodo.model';
import { TodoService } from './core/services/todo.service';
import { Subject, takeUntil } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-first-app';

}
