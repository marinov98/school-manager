import axios from "axios";
import {
  GET_STUDENTS,
  ADD_STUDENT,
  REMOVE_STUDENT,
  GET_STUDENT,
  EDIT_STUDENT
} from "./types";

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
    type: GET_STUDENTS,
    payload: student
  };
};

const getStudent = student => {
  return {
    type: GET_STUDENT,
    payload: student
  };
};

const editStudent = student => {
  return {
    type: EDIT_STUDENT,
    payload: student
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
  return axios
    .post(`/api/students`, newStudent)
    .then(student => dispatch(addStudent(student)))
    .catch(err => console.log(err));
};

export const getStudentThunk = student => dispatch => {
  return axios
    .get(`/api/students`, student)
    .then(res => res.data)
    .then(student => dispatch(getStudent(student)))
    .catch(err => console.log(err));
};

export const editStudentThunk = student => dispatch => {
  return axios
    .get(`/api/students`, student)
    .then(res => res.data)
    .then(student => dispatch(editStudent(student)))
    .catch(err => console.log(err));
};
