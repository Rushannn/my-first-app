import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { NgModule } from '@angular/core';

const todoRoutes: Routes = [
  {
    path: '',
    component: TodoComponent
  },
  {
    path: 'todo/:id',
    component: TodoDetailComponent
  },
];


@NgModule({
  imports: [RouterModule.forChild(todoRoutes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
