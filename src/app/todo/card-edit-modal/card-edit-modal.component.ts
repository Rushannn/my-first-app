import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ITodo } from 'src/app/core/models/ITodo.model';

@Component({
  selector: 'app-card-edit-modal',
  templateUrl: './card-edit-modal.component.html',
  styleUrls: ['./card-edit-modal.component.css']
})
export class CardEditModalComponent {

  constructor(
    public dialogRef: MatDialogRef<CardEditModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ITodo,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
