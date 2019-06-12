import { GET_STUDENTS, ADD_STUDENT } from "../actions/types";

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
    default:
      return state;
  }
};
