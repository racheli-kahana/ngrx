import { Task } from 'src/app/Models/Task'
import{TasksState}from'../states/tasks.state'



//export const tasks=createSelector(taskState,(tasksarr:TasksSate)=>tasksarr.tasks)
export const taskSelector=(taskstate:TasksState):Task[]=>taskstate.tasks
