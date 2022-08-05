import {Injectable} from "@angular/core";

export interface ITodo {
  id: number
  title: string
  completed: boolean
  date?: any
}

@Injectable({providedIn: 'root'})
export class TodosService {

  public todos: ITodo[] = [
    {id: 1, title: 'Some title 1', completed: false, date: new Date()},
    {id: 2, title: 'Some title 2', completed: true, date: new Date()},
    {id: 3, title: 'Some title 3', completed: false, date: new Date()},
  ]

  onToggle(id: number) {
    const idx = this.todos.findIndex(t => t.id === id)
    this.todos[idx].completed = !this.todos[idx].completed
  }
}
