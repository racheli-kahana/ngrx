import{Subtask}from'../Models/Subtask'
export interface Task{
    id:number,
    description:String,
    subTasks:Subtask[];
}
