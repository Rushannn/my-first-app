import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CardEditModalComponent } from '../card-edit-modal/card-edit-modal.component';
import { ITodo } from 'src/app/core/models/ITodo.model';

@Component({
  selector: 'app-create-todo-modal',
  templateUrl: './create-todo-modal.component.html',
  styleUrls: ['./create-todo-modal.component.css']
})
export class CreateTodoModalComponent {
  constructor(
    public dialogRef: MatDialogRef<CardEditModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ITodo,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
