import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";

export interface ITodo {
  id: number
  title: string
  completed: boolean
  date?: any
}

@Injectable({providedIn: 'root'})
export class TodosService {

  constructor(private http: HttpClient) {
  }

  public todos: ITodo[] = []
  public newTitle: string = ''

  fetchTodos(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos')
      .pipe(
        tap(todos => console.log(todos))
      )
  }

  onToggle(id: number) {
    const idx = this.todos.findIndex(t => t.id === id)
    this.todos[idx].completed = !this.todos[idx].completed
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter(t => t.id !== id)
  }

  newTodoTitle(v: Event) {
    this.newTitle = (v.target as HTMLInputElement).value
  }

  addTodo() {
    if (this.newTitle.trim().length === 0) return
    this.todos.push({
      id: this.todos.length + 1, title: this.newTitle, completed: false, date: new Date()
    })
    this.newTitle = ''
  }
}
