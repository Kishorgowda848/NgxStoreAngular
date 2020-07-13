import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/model/todos.model';
import { Store, select } from '@ngrx/store';
import { TodoDelete } from 'src/actions/todo.action';
 
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
todos:Todo[];

  constructor(private store:Store<{todos:Todo[]}>) { 
    this.store.pipe(select('todos')).subscribe((data:any)=>{
       this.todos=data;
    })/*** Getting data from store using pipe "todos" you mentioned is same as store name in StoreModule */
  }
  delete(value:number){
   this.store.dispatch(new TodoDelete(value));/** Dispatch event to action **/
  }
  ngOnInit(): void {
  }

}
