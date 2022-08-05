import {Component, OnInit} from '@angular/core';
import {TodosService} from "../shared/todos.service";
import {delay} from "rxjs";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  public loading: boolean = true
  public search: string = ''

  constructor(public todosService: TodosService) {
  }

  ngOnInit(): void {
    this.todosService.fetchTodos()
      .pipe(delay(1000))
      .subscribe(() => this.loading = false)
  }

  onChange(id: number) {
    this.todosService.onToggle(id)
  }
}
