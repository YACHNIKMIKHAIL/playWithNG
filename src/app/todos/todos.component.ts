import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ITodo} from "../app.component";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  @Input() todos: ITodo[] = []
  @Output() onToggle = new EventEmitter<number>()

  constructor() {
  }

  ngOnInit(): void {
  }

  onChange(id: number) {
    this.onToggle.emit(id)
  }
}
