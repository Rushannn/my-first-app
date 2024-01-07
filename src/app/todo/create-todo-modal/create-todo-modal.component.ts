import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CardEditModalComponent } from '../card-edit-modal/card-edit-modal.component';
import { ITodo } from 'src/app/core/models/ITodo.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface CreateTodoForm {
  name: string;
  date: string;
}

@Component({
  selector: 'app-create-todo-modal',
  templateUrl: './create-todo-modal.component.html',
  styleUrls: ['./create-todo-modal.component.css']
})
export class CreateTodoModalComponent {

  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CardEditModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      date: ['', [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]]
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }

}
