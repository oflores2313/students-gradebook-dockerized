import * as actions from '../actions/students.actions';

export interface ReadStudentState {
    data: any;
    loaded: boolean;
}

const initalState: ReadStudentState = {
    data: null,
    loaded: false
}

export function reducer(state = initalState, action: actions.StudentActions){
    switch(action.type){
        case actions.GET_ALL_STUDENT_DATA: {
            return {
                ...state,
                loaded: false
            }
        }

        case actions.GET_ALL_STUDENT_DATA_SUCCESS: {
            return {
                ...state,
                data: action.payload ,
                loaded: true
            }
        }

        default: {
            return state
        }

    }
}

export const getAllStudentData = (state: ReadStudentState) => state.data;
export const getAllStudentDataLoaded = (state: ReadStudentState) => state.loaded;