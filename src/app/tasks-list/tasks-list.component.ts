import { Component } from '@angular/core';
import { Task } from '../Models/Task';
import{Store}from'@ngrx/store'
import {Observable} from 'rxjs';
import{TasksState}from'../store/states/tasks.state'
import { taskSelector } from '../store/selectors/task.selector';
import { Add } from '../store';
import{Router}from '@angular/router'

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent {
 //todos$:Observable<Task[]>
 todos$=this.st.select(taskSelector);

 constructor(private st: Store<TasksState>,private rout:Router){
   this.todos$.subscribe(data=>console.log(data))

 }
 ngOnInit(){
  console.log("jkhjhg")
 this.st.dispatch(Add({id:1,task:{id:9,description:""}}))

 }
 open(task:Task){
  this.rout.navigate(['/subtask',{'task':JSON.stringify(task)}])
 }

}
