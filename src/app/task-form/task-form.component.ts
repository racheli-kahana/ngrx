import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subtask } from '../Models/Subtask';
import { Add } from '../store';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
id:number=0;
description:string=""
newTask:Subtask={id:this.id,description:this.description}

getId:number
constructor(private route:ActivatedRoute,private st:Store)
{}

ngOnInit(){
  console.log("hi form")
  this.route.params.subscribe(params=>{this.getId=params['id']})
}

submit(){
   this.st.dispatch(Add({id:this.getId,task:this.newTask}))
}
}
