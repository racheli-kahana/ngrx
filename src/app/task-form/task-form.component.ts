import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subtask } from '../Models/Subtask';
import { Add } from '../store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
id:number=0;
description:string=""
newTask:Subtask

getId:number
constructor(private route:ActivatedRoute,private st:Store,private router:Router)
{}

ngOnInit(){
  console.log("hi form")
  this.route.params.subscribe(params=>{this.getId=params['id']})
}

submit(){
 this.newTask={id:this.id,description:this.description}
   this.st.dispatch(Add({id:this.getId,task:this.newTask}))
   this.router.navigate(['/subtask',this.getId])
}
}
