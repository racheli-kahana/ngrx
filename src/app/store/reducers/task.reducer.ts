import { initialTaskState, TasksState } from "../states/tasks.state"
import { Add, Delete } from "../actions/task.action"
import { Action, createReducer, on } from "@ngrx/store";
import cloneDeep from "lodash.clonedeep";

const taskReducer = createReducer(
  initialTaskState,
  on(Add, (state, { id,task }) => {
    let newArr =cloneDeep(state.tasks);
    newArr.find(a => a.id == id)?.subTasks?.push(task)
    return{
      ...state,
      tasks:newArr
    }
  }),

  on(Delete, (state, { taskid }) => {
    let newArr = cloneDeep(state.tasks);
    let j;
    newArr.forEach((a,i) => {
      j = a.subTasks?.findIndex(b=>b.id==taskid);
      //if(j&&j>-1)
      newArr[i].subTasks?.splice(j,1);
      });
    return{
      ...state,
      tasks:newArr
    }
  }))


export function reducer(state: TasksState | undefined, action: Action) {
  return taskReducer(state, action);
}


