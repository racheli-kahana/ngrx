import { createAction,props} from '@ngrx/store';
import { Subtask } from 'src/app/Models/Subtask';



export const Add=createAction( '[TASK]Add SubTask',props<{id:number,task:Subtask}>())
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
