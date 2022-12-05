import { Component } from '@angular/core';
import{Input}from'@angular/core'
import{ActivatedRoute }from'@angular/router'
import { Task } from '../Models/Task';
import{Store}from'@ngrx/store'
import { taskSelector } from '../store';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sub-tasks-list',
  templateUrl: './sub-tasks-list.component.html',
  styleUrls: ['./sub-tasks-list.component.css']
})
export class SubTasksListComponent {

@Input()
 task:Task={id:0,description:"",subTasks:[]};
 id:number=0
 constructor(private route:ActivatedRoute,private st:Store,private rout:Router){}

 ngOnInit(){
  console.log("hi subTask")
  this.route.params.subscribe(params => {this.id = params['id'];});
   console.log(this.id);
   this.getTask();
}
getTask(){
  this.st.select(taskSelector).subscribe(data=>{this.task=data.find(a=>a.id==this.id)})
}

open(){
this.rout.navigate(['/form',this.id])
}
// delete(id:number){
//   this.st.dispatch(Delete({taskid:id}))
// }

}


