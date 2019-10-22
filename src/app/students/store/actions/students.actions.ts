import { Action } from '@ngrx/store';

export const GET_ALL_STUDENT_DATA = '[STUDENT] ALL STUDENT DATA';
export const GET_ALL_STUDENT_DATA_SUCCESS = '[STUDENT] ALL STUDENT DATA SUCCESS';
export const GET_ALL_STUDENT_DATA_ERROR = '[STUDENT] ALL STUDENT DATA ERROR';

export const GET_STUDENT_DATA = '[STUDENT] STUDENT DATA';
export const GET_STUDENT_DATA_SUCCESS = '[STUDENT] STUDENT DATA SUCCESS';
export const GET_STUDENT_DATA_ERROR = '[STUDENT] STUDENT DATA ERROR';

export class GetAllStudentData implements Action {
    readonly type = GET_ALL_STUDENT_DATA;
    constructor() {}
}

export class GetAllStudentDataSuccess implements Action {
    readonly type = GET_ALL_STUDENT_DATA_SUCCESS;
    constructor(public payload: any) {}
}

export class GetAllStudentDataError implements Action {
    readonly type = GET_ALL_STUDENT_DATA_ERROR;
    constructor(public payload: any) {}
}

export class GetStudentData implements Action {
    readonly type = GET_STUDENT_DATA;
    constructor(public studentId: number){}
}

export class GetStudentDataSucess implements Action {
    readonly type = GET_STUDENT_DATA_SUCCESS;
    constructor(public payload: any){}
}

export class GetStudentDataError implements Action {
    readonly type = GET_STUDENT_DATA_ERROR;
    constructor(public payload: any){}
}

export type StudentActions 
    = GetAllStudentData
    | GetAllStudentDataSuccess
    | GetAllStudentDataError
    | GetStudentData
    | GetStudentDataSucess
    | GetStudentDataError