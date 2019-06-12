import axios from "axios";
import { GET_STUDENTS, ADD_STUDENT, REMOVE_STUDENT } from "./types";

// Action Creator:
// GET students
const getStudents = students => {
  return {
    type: GET_STUDENTS,
    payload: students
  };
};

// THUNK CREATORS;
export const getStudentsThunk = () => dispatch => {
  return axios
    .get(`/api/students`)
    .then(res => res.data)
    .then(students => dispatch(getStudents(students)))
    .catch(err => console.log(err));
};

export const addStudentThunk = newStudent => dispatch => {
  return axios.post(`/api/students`, newStudent).catch(err => console.log(err));
};
