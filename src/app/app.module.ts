import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { SubTasksListComponent } from './sub-tasks-list/sub-tasks-list.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { reducers ,metaReducers} from './store';
import { reducer } from './store/reducers/task.reducer';
import { TaskFormComponent } from './task-form/task-form.component';
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    SubTasksListComponent,
    TaskFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   StoreModule.forRoot(reducers,{metaReducers}),
   AppRoutingModule,
   StoreDevtoolsModule.instrument({
    name: 'DevTools & Debugging in NgRx',
    maxAge: 25,
    logOnly: environment.production
  }),
  FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
