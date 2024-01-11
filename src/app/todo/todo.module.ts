import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { CardsListComponent } from './cards-list/cards-list.component';
import { CardComponent } from './card/card.component';
import { CardEditComponent } from './card-edit/card-edit.component';
import { MaterialModule } from '../shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardEditModalComponent } from './card-edit-modal/card-edit-modal.component';
import { CreateTodoModalComponent } from './create-todo-modal/create-todo-modal.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoRoutingModule } from './todo.routing';



@NgModule({
  declarations: [
    TodoComponent,
    CardsListComponent,
    CardComponent,
    CardEditComponent,
    CardEditModalComponent,
    CreateTodoModalComponent,
    TodoDetailComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TodoRoutingModule
  ],
  exports: [
    TodoComponent,
  ]
})
export class TodoModule { }
