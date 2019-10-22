import { createSelector } from "@ngrx/store";
import * as fromFeature from "../reducers";
import * as fromStudents from "../reducers/students.reducers";

export const getStudentState = createSelector(
  fromFeature.getReadStudentsState,
  (state: fromFeature.ReadStudentState) => state.students
);

export const getAllStudentData = createSelector(
  getStudentState,
  fromStudents.getAllStudentData
);

export const getOnlyStudentData = createSelector(
  getAllStudentData,
  data => {
    if (data) {
      return data.students;
    }
  }
);

export const getClassesData = createSelector(
  getAllStudentData,
  data => {
    if (data) {
      return data.classes;
    }
  }
);

// this selector will retrieve the gpa for a chosen student
export const getAverageGPA = createSelector(
  getOnlyStudentData,
  (data, props) => {
    if (!props.id) {
      return [];
    } else if (props) {
      const classes = props.id;
      const studenDataArray = data.filter(
        students => students.email == classes
      );

      if (studenDataArray[0].studentClasses) {
        const studentClasses = studenDataArray[0].studentClasses;

        // used to get the length
        const classesLength = studentClasses.length;
        const gradesArr = [];
        studentClasses.map(data => {
          gradesArr.push(data.grade);
        });
        const gradesValue = gradesArr.reduce((a, b) => a + b);
        const getAvgGPA = (gradesValue / classesLength).toFixed(2);
        return getAvgGPA;
      }
    }
  }
);

export const getStudentClasses = createSelector(
  getClassesData,
  (studentClasses, props) => {
    if (!props.id) {
      return [];
    } else if (props) {
      const studentData = props.id;

      const studentClassesArr = studentData.map((item, i) => {
        const className = studentClasses[item.id];

        return Object.assign({}, item, { className });
      });
      return studentClassesArr;
    }
  }
);
