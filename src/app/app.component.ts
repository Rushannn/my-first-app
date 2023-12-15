import { Component } from '@angular/core';
import { ITodo } from './core/models/ITodo.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  name!: string;
  cardToEdit: ITodo | undefined;

  todoListMain: ITodo[] = [
    {
      name: "Задача 1",
      date: "2023-12-01",
      type: "done"
    },
    {
      name: "Задача 2",
      date: "2023-12-02",
      type: "new"
    },
    {
      name: "Задача 3",
      date: "2023-12-03",
      type: "done"
    },
    {
      name: "Задача 4",
      date: "2023-12-04",
      type: "new"
    },
    {
      name: "Задача 5",
      date: "2023-12-05",
      type: 'new'
    },
    {
      name: "Задача 6",
      date: "2023-12-06",
      type: "done"
    }
  ];

  onDeleteCard(todo: ITodo) {
    this.todoListMain = this.todoListMain.filter(item => item.name !== todo.name)
  }

  onEditCard(todo: ITodo) {
    this.cardToEdit = todo;
  }

}
