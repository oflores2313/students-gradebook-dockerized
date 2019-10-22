import {
  Component,
  OnInit,
  ViewChild,
  TemplateRef,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import { Store } from "@ngrx/store";
import * as fromRoot from "../store/reducers";
import * as fromStore from "../store";
import { Observable, Subscription } from "rxjs";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "core-students-data-table",
  templateUrl: "./students-data-table.component.html",
  styleUrls: ["./students-data-table.component.css"]
})
export class StudentsDataTableComponent implements OnInit, OnChanges {
  public students$: Observable<any>;
  public students: any;
  public studentsSubscription: Subscription;
  public columnSettings: any[];

  public firstName: string;
  public lastName: string;
  public email: string;
  public classes: any;
  public avgGPA: any;
  public classList: any;

  public rows: any[];
  public formattedData: any[];

  @Output() viewStudentDetails: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild("detailsT") detailsT: TemplateRef<any>;
  @ViewChild("tagsT") tagsT: TemplateRef<any>;
  @ViewChild(DatatableComponent) table: DatatableComponent;

  constructor(
    private _store: Store<fromRoot.ReadStudentState>,
    private modalService: NgbModal
  ) {
    this.students$ = this._store.select(fromStore.getOnlyStudentData);
    this.studentsSubscription = this.students$.subscribe(students => {
      if (students) {
        this.students = students;
      }
    });
    this.rows = this.students;
  }

  ngOnInit() {
    this.columnSettings = [
      {
        name: "First Name",
        prop: "first",
        cellTemplate: this.tagsT,
        flexGrow: 0.2
      },
      {
        name: "Last Name",
        prop: "last",
        cellTemplate: this.tagsT,
        flexGrow: 0.2
      },
      { name: "Email", prop: "email", cellTemplate: this.tagsT, flexGrow: 0.3 },
      { name: "Actions", cellTemplate: this.detailsT, flexGrow: 0.2 }
    ];
  }

  getStudentInfo(data, row) {
    this.viewStudentDetails.emit(data);
    if (row) {
      this.firstName = row.first;
      this.lastName = row.last;
      this.email = row.email;
      this.classes = row.studentClasses;

      this._store
        .select(fromStore.getAverageGPA, {
          id: this.email
        })
        .subscribe(data => (this.avgGPA = data));

      this._store
        .select(fromStore.getStudentClasses, { id: this.classes })
        .subscribe(data => (this.classList = data));
    }
    this.modalService.open(data);
  }

  onFilteredData(filteredRows) {
    this.table.offset = 0;
    this.students = filteredRows;
  }

  ngOnChanges() {
    this.formattedData = this.students.map(row => ({
      ...row
    }));
    this.students = this.formattedData;
  }
}
