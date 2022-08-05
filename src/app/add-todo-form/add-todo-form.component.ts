import {Component, OnInit} from '@angular/core';
import {ITodo, TodosService} from "../shared/todos.service";

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.scss']
})
export class AddTodoFormComponent implements OnInit {
  title: string = ''

  constructor(public todosService: TodosService) {
  }

  ngOnInit(): void {
  }

  addTodo() {
    if (this.title.trim().length === 0) {
      alert('Enter title !')
      return
    }
    const newTodo: ITodo = {
      id: Date.now(), title: this.title, completed: false, date: new Date()
    }
    this.todosService.addTodo(newTodo)
    this.title = ''
  }
}
