import {Pipe, PipeTransform} from "@angular/core";
import {ITodo} from "./todos.service";

@Pipe({
  name: 'todosFilter'
})
export class TodosFilterPipe implements PipeTransform {
  transform(todos: ITodo[], search: { string: string, isDone: boolean }): ITodo[] {
    if (!search.string.trim() && !search.isDone) return todos
    return !search.isDone
      ? todos.filter(todo => todo.title.toLowerCase().indexOf(search.string.toLowerCase()) !== -1)
      : todos.filter(todo => todo.title.toLowerCase().indexOf(search.string.toLowerCase()) !== -1)
        .filter(f => f.completed)

  }

}
