import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubTasksListComponent } from './sub-tasks-list/sub-tasks-list.component'

const routes: Routes = [
  {path:'subtask',
  component:SubTasksListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
