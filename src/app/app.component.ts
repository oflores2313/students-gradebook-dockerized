import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ReadStudentState } from './students/store/reducers/students.reducers';
import { GetAllStudentData } from './students/store';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'students';
  constructor(
    
  ){
    
  }
}
