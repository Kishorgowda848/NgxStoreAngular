import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from 'src/model/todos.model';
import { TodoAdd } from 'src/actions/todo.action';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  constructor(private store:Store<Todo[]>) { 
  }

  ngOnInit(): void {
  }
  add(value){
      const todo=new Todo();
      todo.title=value;
      this.store.dispatch(new TodoAdd(todo));
   }

}
