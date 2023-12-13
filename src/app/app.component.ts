import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  name!: string;

  todoListMain = [
    {
      name: "Задача 1",
      date: "2023-12-01",
      type: "new"
    },
    {
      name: "Задача 2",
      date: "2023-12-02",
      type: "inProgress"
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
      type: "inProgress"
    },
    {
      name: "Задача 6",
      date: "2023-12-06",
      type: "done"
    }
  ];

}
