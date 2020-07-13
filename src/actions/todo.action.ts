import { Action } from '@ngrx/store';
import { Todotype } from 'src/shared/todo.enum';
 
export class AccationNeedToBeImplement implements Action{
    type: string;
    payload:any;
}
/*** With help of Action we are updating reducer*/
export class TodoAdd implements AccationNeedToBeImplement{
    type= Todotype.Add;
    constructor(public payload:any){}
}

export class TodoDelete implements AccationNeedToBeImplement{
    type= Todotype.Remove;
    constructor(public payload:any){}
}