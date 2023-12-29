import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { AuthComponent } from './features/auth/auth.component';

const appRoutes: Routes = [
  {
    path: 'todo',
    component: TodoComponent
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  { path: '', redirectTo: '/todo', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule),
