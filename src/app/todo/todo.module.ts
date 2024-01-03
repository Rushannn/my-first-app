import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { CardsListComponent } from './cards-list/cards-list.component';
import { CardComponent } from './card/card.component';
import { CardEditComponent } from './card-edit/card-edit.component';
import { MaterialModule } from '../shared/material/material.module';
import { FormsModule } from '@angular/forms';
import { CardEditModalComponent } from './card-edit-modal/card-edit-modal.component';
import { CreateTodoModalComponent } from './create-todo-modal/create-todo-modal.component';



@NgModule({
  declarations: [
    TodoComponent,
    CardsListComponent,
    CardComponent,
    CardEditComponent,
    CardEditModalComponent,
    CreateTodoModalComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
  ],
  exports: [
    TodoComponent,
  ]
})
export class TodoModule { }
