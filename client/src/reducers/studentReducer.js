import { GET_STUDENTS, ADD_STUDENT, DELETE_STUDENT } from "../actions/types";

const initialState = {
  students: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_STUDENTS:
      return {
        ...state,
        students: action.payload
      };
    case ADD_STUDENT:
      return {
        ...state,
        students: [action.payload, ...state.students]
      };
    case DELETE_STUDENT:
      console.log(action);
      let targetIndex = state.students.findIndex(
        student => student.id === action.payload
      );
      console.log(targetIndex);
      return {
        ...state,
        students: [state.students[targetIndex]]
      };
    default:
      return state;
  }
};
