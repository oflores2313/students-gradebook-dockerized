import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ɵConsole
} from "@angular/core";

@Component({
  selector: "core-search-students",
  templateUrl: "./search-students.component.html",
  styleUrls: ["./search-students.component.css"]
})
export class SearchStudentsComponent implements OnInit {
  public temp: any[];

  @Input() public columns: any[];
  @Input() public allRows: any[];
  @Output() public filteredRows = new EventEmitter<any>();
  @Output() public searchFilter = new EventEmitter<any>();

  constructor() {
    this.temp = [];
  }

  ngOnInit() {}
  search(event) {
    const val = event.target.value.toLowerCase();
    const columns = this.columns;
    const temp = this.allRows.filter(function(d) {
      let valid = !val;
      let i;
      for (i = 0; i <= columns.length; i++) {
        if (d[columns[i]]) {
          valid =
            d[columns[i]]
              .toString()
              .toLowerCase()
              .indexOf(val) !== -1 || valid;
        }
      }
      return valid;
    });
    this.filteredRows.emit(temp);
  }
}
