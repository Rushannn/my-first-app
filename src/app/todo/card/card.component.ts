import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ITodo } from "../../core/models/ITodo.model";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() todo: ITodo | undefined;

  @Output() deleteCard: EventEmitter<ITodo> = new EventEmitter<ITodo>();
  @Output() editCard: EventEmitter<void> = new EventEmitter<void>();
  @Output() toggleIsDone = new EventEmitter<ITodo>();

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
}

