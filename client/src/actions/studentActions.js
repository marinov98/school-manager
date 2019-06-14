import axios from "axios";
import {
  GET_STUDENTS,
  ADD_STUDENT,
  DELETE_STUDENT,
  REMOVE_STUDENT,
  GET_STUDENT,
  EDIT_STUDENT
} from "./types";

// Action Creator:

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

const deleteStudent = studentId => {
  console.log("running deleteStudent action creator");
  return {
    type: DELETE_STUDENT,
    payload: studentId
  };
};

const editStudent = newStudent => {
  return {
    type: EDIT_STUDENT,
    payload: newStudent
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
    .then(res => res.data)
    .then(student => dispatch(addStudent(student)))
    .catch(err => console.log(err));
};

export const deleteStudentThunk = studentId => dispatch => {
  console.log("running deleteStudentThunk");
  return axios
    .delete(`/api/students/${studentId}`)
    .then(res => res.data.id)
    .then(studentId => dispatch(deleteStudent(studentId)))
    .catch(err => console.log(err));
};

export const editStudentThunk = newStudent => dispatch => {
  return dispatch(editStudent(newStudent));
};
