import {Pipe, PipeTransform} from "@angular/core";
import {ITodo} from "./todos.service";

@Pipe({
  name: 'todosFilter'
})
export class TodosFilterPipe implements PipeTransform {
  transform(todos: ITodo[], search: string): ITodo[] {
    if (!search.trim()) return todos
    // console.log('TodosFilterPipe', isDone)
    return todos.filter(todo => todo.title.toLowerCase().indexOf(search.toLowerCase()) !== -1)

  }

}
