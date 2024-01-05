import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CardEditModalComponent } from '../card-edit-modal/card-edit-modal.component';
import { ITodo } from 'src/app/core/models/ITodo.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-todo-modal',
  templateUrl: './create-todo-modal.component.html',
  styleUrls: ['./create-todo-modal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateTodoModalComponent {

  todoForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CardEditModalComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: ITodo,
  ) {
    this.todoForm = this.fb.group({
      name: ['', Validators.required],
      date: ['', [Validators.required, Validators.pattern(/\d{4}-\d{2}-\d{2}/)]]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    console.log('onSubmit1');
    if (this.todoForm.valid) {
      const todoData = this.todoForm.value;
      console.log('onSubmit2',todoData);
      this.dialogRef.close();
    }
  }

}
