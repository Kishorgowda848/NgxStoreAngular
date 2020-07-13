import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from 'src/reducer/todo.reducer';
import { TodosComponent } from './todos/todos.component';
import { AddTodoComponent } from './add-todo/add-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({todos:reducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
