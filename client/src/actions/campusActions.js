import axios from "axios";
import {
    GET_CAMPUSES,
    ADD_CAMPUS,
    DELETE_CAMPUS,
    EDIT_CAMPUS
} from "./types";

const getCampuses = campuses => {
    return {
        type: GET_CAMPUSES,
        payload: campuses
    };
};

const addCampus = newCampus => {
    return {
        type: ADD_CAMPUS,
        payload: newCampus
    };
};

const deleteCampus = campusId => {
    return {
        type: DELETE_CAMPUS,
        payload: campusId
    };
};

const editCampus = editedCampus => {
    return {
        type: EDIT_CAMPUS,
        payload: editedCampus
    }
};

export const getCampusesThunk = () => dispatch => {
    return axios
        .get(`/api/campuses`)
        .then(res => res.data)
        .then(campuses => dispatch(getCampuses(campuses)))
        .catch(err => console.log(err));
};

export const addCampusThunk = newCampus => dispatch => {
    return axios
        .post(`/api/campuses`, newCampus)
        .then(res => res.data)
        .then(newCampus => dispatch(addCampus(newCampus)))
        .catch(err => console.log(err));
};

export const deleteCampusThunk = campusId => dispatch => {
    return axios
        .delete(`/api/campuses/${campusId}`).catch(err => console.log(err))
        .then(res => res.data)
        .then(campusId => dispatch(deleteCampus(campusId)));
};

export const editCampusThunk = editedCampus => dispatch => {
    return dispatch(editCampus(editedCampus));
};