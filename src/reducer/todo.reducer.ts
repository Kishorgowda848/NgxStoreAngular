import { Todo } from "src/model/todos.model";
import { TodoAdd } from 'src/actions/todo.action';
import { Todotype } from 'src/shared/todo.enum';

const Initialstate:Todo[]=[
    {title:"kishore"},
    {title:"pavan"},
    {title:"pooja"},
    {title:"Sharath"}
]/** Initial state */
export function reducer(state=Initialstate,actions:TodoAdd){
     switch(actions.type){/** switch with type */
        case Todotype.Add:
           return [...state,actions.payload];/** Adding data */
        case Todotype.Remove:
             const temp=[...state];
             temp.splice(actions.payload,1);
            return  temp; /** Removing Data */
        default :return state;
    }
}