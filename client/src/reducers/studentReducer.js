import {
  GET_STUDENTS,
  ADD_STUDENT,
  EDIT_STUDENT,
  DELETE_STUDENT,
  GET_STUDENT
} from "../actions/types";

const initialState = {
  students: [],
  student: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_STUDENTS:
      return {
        ...state,
        students: action.payload
      };
    case GET_STUDENT:
      return {
        ...state,
        student: action.payload
      };
    case ADD_STUDENT:
      return {
        ...state,
        students: [action.payload, ...state.students]
      };
    case DELETE_STUDENT:
      return {
        ...state,
        students: [
          ...state.students.filter(student => student.id !== action.payload)
        ]
      };
    case EDIT_STUDENT:
      // CREATE COPIES
      let studentsCopy = state.students;
      let targetId = action.payload.id;
      console.log("Students Array");
      console.log(studentsCopy);
      console.log("Student Id:");
      console.log(targetId);

      // GET INDEX IN ARRAY
      let targetIndex = studentsCopy.findIndex(
        student => student.id === targetId
      );
      console.log("Index of target id:");
      console.log(targetIndex);

      console.log("Target Index in Array<FirstName>");
      console.log(studentsCopy[targetIndex].firstName);

      // UPDATE
      studentsCopy[targetIndex].firstName = action.payload.firstName;
      studentsCopy[targetIndex].lastName = action.payload.lastName;
      studentsCopy[targetIndex].email = action.payload.email;
      studentsCopy[targetIndex].imageURL = action.payload.imageURL;
      studentsCopy[targetIndex].gpa = action.payload.gpa;
      studentsCopy[targetIndex].campus = action.payload.campus;

      return {
        ...state,
        students: studentsCopy
      };
    default:
      return state;
  }
};
