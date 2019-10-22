import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { StudentsService } from "./services/students.service";
import { Observable, Subscription } from "rxjs";
import * as fromRoot from "./store/reducers";
import { Store } from "@ngrx/store";
import { GetAllStudentData } from "./store/actions";
import * as fromStore from "./store";
import { getAllStudentData } from "./store/reducers/students.reducers";
import { columnsByPin } from "@swimlane/ngx-datatable";

@Component({
  selector: "core-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.css"]
})
export class StudentsComponent implements OnInit {
  public students$: Observable<any>;
  public students: any;
  public onlyStudents$: Observable<any>;
  public onlyClasses$: Observable<any>;
  public studentSubscription: Subscription;
  public temp: any[];

  constructor(private _store: Store<fromRoot.ReadStudentState>) {}

  ngOnInit() {
    this._store.dispatch(new fromStore.GetAllStudentData());
    this.students$ = this._store.select(fromStore.getAllStudentData);
    this.studentSubscription = this.students$.subscribe(data => {
      if (data) {
        this.students = data;
      }
    });

    this.onlyStudents$ = this._store.select(fromStore.getOnlyStudentData);
    this.onlyClasses$ = this._store.select(fromStore.getClassesData);
  }
}
