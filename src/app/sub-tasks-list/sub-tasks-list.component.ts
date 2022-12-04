import { Component } from '@angular/core';
import{Input}from'@angular/core'
import{ActivatedRoute }from'@angular/router'
import { Task } from '../Models/Task';
import{Store}from'@ngrx/store'
import { Add, Delete } from '../store';
import { Subtask } from '../Models/Subtask';
@Component({
  selector: 'app-sub-tasks-list',
  templateUrl: './sub-tasks-list.component.html',
  styleUrls: ['./sub-tasks-list.component.css']
})
export class SubTasksListComponent {

@Input()
 task:Task={id:0,description:"",subTasks:[]};

 constructor(private route:ActivatedRoute,private st:Store){}

 ngOnInit(){
  this.route.queryParams.subscribe(params => {
  console.log(params["task"]),
 this.task = params['task'];});
}

add(id:number,task:Subtask){
this.st.dispatch(Add({id:id,task:task}))
}

// delete(id:number){
//   this.st.dispatch(Delete({taskid:id}))
// }

}


