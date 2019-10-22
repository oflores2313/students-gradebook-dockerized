import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoreComponent } from "./core.component";
import { NavComponent } from "./nav/nav.component";
import { SearchStudentsComponent } from "./search-students/search-students.component";

@NgModule({
  declarations: [CoreComponent, NavComponent, SearchStudentsComponent],
  imports: [CommonModule],
  exports: [NavComponent, SearchStudentsComponent]
})
export class CoreModule {}
