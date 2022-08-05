import {Component} from '@angular/core';
import {TodosService} from "./shared/todos.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appTitle = 'It is my game with NG';

  constructor(public todosService: TodosService) {
  }
}
