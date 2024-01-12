import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ITodo } from 'src/app/core/models/ITodo.model';
import { TodoState } from 'src/app/core/services/todo.state';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  public todo$: Observable<ITodo | undefined>;
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private todoState: TodoState
  ) {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.todo$ = this.todoState.getTodoByIdAsObservable(this.id);
  }

  ngOnInit(): void {
  }

  onToggleIsDone() { }

  openDialog() {
  }

}
