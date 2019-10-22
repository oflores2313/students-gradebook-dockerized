import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StudentsComponent } from "./students.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { reducers } from "./store/reducers";
import { EffectsModule } from "@ngrx/effects";
import { effects } from "./store/effects";
import { StudentsService } from "./services/students.service";
import { StudentsDataTableComponent } from "./students-data-table/students-data-table.component";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { CoreModule } from "../core/core.module";

@NgModule({
  declarations: [StudentsComponent, StudentsDataTableComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature("students", reducers),
    EffectsModule.forFeature(effects),
    HttpClientModule,
    NgxDatatableModule,
    CoreModule
  ],
  providers: [HttpClient, StudentsService],
  exports: [StudentsComponent, StudentsDataTableComponent]
})
export class StudentsModule {}
