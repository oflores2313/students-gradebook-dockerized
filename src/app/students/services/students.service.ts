import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }

  public studentsUrl = 'http://localhost:3001/students';

  getStudentData(): Observable<any>{
    return this.http.get(this.studentsUrl).pipe(
      map(data => {
        let students = data['students']
        let classes = data['classes']

        let rValue = { students, classes}
        return rValue
      })
    )
  }
}
