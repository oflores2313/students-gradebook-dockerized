import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";
import * as fromAllStudentData from './students.reducers';

export interface ReadStudentState {
    students: fromAllStudentData.ReadStudentState;
}

export const reducers: ActionReducerMap<ReadStudentState> = {
    students: fromAllStudentData.reducer
}

export const getReadStudentsState = createFeatureSelector<ReadStudentState>(
    "students"
)