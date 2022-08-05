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
  private newTitle: string = ''

  onToggle(id: number) {
    const idx = this.todos.findIndex(t => t.id === id)
    this.todos[idx].completed = !this.todos[idx].completed
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter(t => t.id !== id)
  }

  newTodoTitle(v: any) {
    console.log('newTodoTitle', v.target.value)
    this.newTitle = v.target.value
  }

  addTodo() {
    if (this.newTitle.trim().length === 0) return
    this.todos.push({
      id: this.todos.length + 1, title: this.newTitle, completed: false, date: new Date()
    })
  }
}
