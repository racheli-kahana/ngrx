import { Component } from '@angular/core';
import{Store}from'@ngrx/store'
import { Add } from './store';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx';
  constructor(private store:Store){
    
  }
  ngOnInit(){

  }
}

