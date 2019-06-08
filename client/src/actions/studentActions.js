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

const addStudent = student => {
  return {
    type: ADD_STUDENT,
    payload: student
  };
};

// THUNK CREATORS;
export const getStudentsThunk = () => dispatch => {
  return axios
    .get(`https://nba-players.herokuapp.com/players-stats/`)
    .then(res => res.data)
    .then(students => dispatch(getStudents(students)))
    .catch(err => console.log(err));
};

export const addStudentThunk = newStudent => dispatch => {
  return dispatch(addStudent(newStudent)); //add axios post
};
