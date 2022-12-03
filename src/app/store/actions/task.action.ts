import { createAction,props} from '@ngrx/store';
import { Task } from "src/app/Models/Task";


export const Add=createAction( '[TASK]Add SubTask',props<{id:number,task:Task}>())
export const Delete=createAction('[TASK]Delete SubTask',props<{taskid:number}>())



/*
export class AddSubTask implements Action{
  public readonly type= '[TASK]Add SubTask';
  constructor(public payload:{id:number,task:Task}){}
}

export class DeleteSubTask implements Action{
  public readonly type= '[TASK]Delete SubTask';
  constructor(public payload:number){}
}

export type taskActions=AddSubTask|DeleteSubTask;*/
