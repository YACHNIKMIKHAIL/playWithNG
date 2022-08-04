import {Component} from '@angular/core';

export interface ITodo {
  id: number
  title: string
  completed: boolean
  date?: any
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appTitle = 'it is my game with NG';

  public todos: ITodo[] = [
    {id: 1, title: 'Some title 1', completed: false, date: new Date()},
    {id: 2, title: 'Some title 2', completed: true, date: new Date()},
    {id: 3, title: 'Some title 3', completed: false, date: new Date()},
  ]
}
