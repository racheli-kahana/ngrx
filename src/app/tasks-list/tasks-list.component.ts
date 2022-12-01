import { Component } from '@angular/core';
import { Task } from '../Models/Task';
import{Store}from'@ngrx/store'
import {Observable} from 'rxjs';
import{TasksState}from'../store/states/tasks.state'
import { taskSelector } from '../store/selectors/task.selector';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent {
 todos$:Observable<Task[]>
 
 constructor(private st: Store<TasksState>){
   this.todos$=this.st.select(taskSelector);
   this.todos$.subscribe(data=>console.log(data))
 }
 
}
