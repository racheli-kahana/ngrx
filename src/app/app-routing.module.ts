import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubTasksListComponent } from './sub-tasks-list/sub-tasks-list.component'
import { TaskFormComponent } from './task-form/task-form.component';

const routes: Routes = [
  {
    path:'subtask/:id',
    component:SubTasksListComponent
  },
  {
    path:'form/:id',
    component:TaskFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
