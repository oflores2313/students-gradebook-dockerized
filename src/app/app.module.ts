import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsModule } from './students/students.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from './core/core.module';
import { StoreModule, ActionReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './students/store';
import { storeLogger } from 'ngrx-store-logger';
import { environment } from 'src/environments/environment';

export function logger(reducer: ActionReducer<object>): any {
  return storeLogger()(reducer)
}
export const metaReducers = environment.production ? [] : [logger]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentsModule,
    FontAwesomeModule,
    NgbModule,
    CoreModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([])
  ],
  exports: [FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
