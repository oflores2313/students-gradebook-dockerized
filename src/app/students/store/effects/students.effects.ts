import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { StudentsService } from '../../services/students.service';
import * as actions from '../actions/students.actions';

import { switchMap, tap, catchError, concatMap } from 'rxjs/operators';
import { of } from "rxjs";

@Injectable()
export class StudentsEffects {
    constructor(
        private $actions: Actions,
        private _studentService: StudentsService,
    ){ }

    @Effect()
    getAllStudentData = this.$actions.pipe(
        ofType(actions.GET_ALL_STUDENT_DATA),
        switchMap(payload => this._studentService.getStudentData()),
        concatMap(response => {
            return [
                new actions.GetAllStudentDataSuccess(response)
            ]
        }),
        tap(data => console.log(data)),
        catchError(e => of(new actions.GetAllStudentDataError(e)))
    )
}