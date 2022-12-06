import { Task } from '../../Models/Task'
export interface TasksState {
  tasks: Task[]
}

export const initialTaskState: TasksState = {
  tasks:[
    { id:1,description:"first",subTasks: [{ id: 11,description:"first1" },{id:12,description:"first2"}]},
    { id:2,description:"second",subTasks:[{ id: 21,description:"second1" }] }
    ]
}
