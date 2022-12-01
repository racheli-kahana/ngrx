export interface Task{
    id:number,
    description:String,
    subTasks?:Task[];
}
