import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ITodo } from "../../core/models/ITodo.model";
import { MatDialog } from "@angular/material/dialog";
import { CardEditModalComponent } from "../card-edit-modal/card-edit-modal.component";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() todo!: ITodo;

  @Output() deleteCard = new EventEmitter<ITodo>();
  @Output() editCard = new EventEmitter<ITodo>();
  @Output() toggleIsDone = new EventEmitter<ITodo>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onEdit() {
    this.editCard.emit();
  }

  onDelete() {
    this.deleteCard.emit(this.todo);
  }

  onToggleIsDone() {
    this.toggleIsDone.emit(this.todo);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CardEditModalComponent, {
      data: { name: this.todo?.name, date: this.todo?.date },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('result', result);
      const editedCard: ITodo = {
        name: result.name,
        date: result.date,
        id: this.todo?.id,
        isDone: this.todo?.isDone
      }
      this.editCard.emit(editedCard);
    });
  }
}

