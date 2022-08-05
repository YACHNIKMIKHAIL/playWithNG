import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";

export interface ITodo {
  id: number
  title: string
  completed: boolean
  date?: any
  userId?: number
}

@Injectable({providedIn: 'root'})
export class TodosService {

  constructor(private http: HttpClient) {
  }

  public todos: ITodo[] = []
  public newTitle: string = ''
  public startCount: number = 2
  public todosCount: number = this.startCount

  fetchTodos(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(`https://jsonplaceholder.typicode.com/todos?_limit=${this.todosCount}`)
      .pipe(
        tap(todos => {
          this.todos = todos
        })
      )
  }

  changeTodosCount() {
    this.todosCount = this.todosCount + this.startCount
    this.fetchTodos().subscribe(() => {
    })
  }

  onToggle(id: number) {
    const idx = this.todos.findIndex(t => t.id === id)
    this.todos[idx].completed = !this.todos[idx].completed
  }

  removeTodo(id: number) {
    if (this.todos.length === 1) this.todosCount = 0
    this.todos = this.todos.filter(t => t.id !== id)
  }

  newTodoTitle(v: Event) {
    this.newTitle = (v.target as HTMLInputElement).value
  }

  addTodo(todo: ITodo) {
    this.todos.push(todo)
  }
}
