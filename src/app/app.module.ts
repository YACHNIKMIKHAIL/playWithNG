import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TodosComponent} from './todos/todos.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {AddTodoFormComponent} from "./add-todo-form/add-todo-form.component";

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    AddTodoFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
