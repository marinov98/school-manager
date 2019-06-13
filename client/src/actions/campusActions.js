import axios from "axios";
import {
    GET_CAMPUSES,
    ADD_CAMPUS,
    SEARCH_CAMPUS,
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

const searchCampus = filterWord => {
    return {
        type: SEARCH_CAMPUS,
        payload: filterWord
    };
};

const deleteCampus = campusName => {
    return {
        type: DELETE_CAMPUS,
        payload: campusName
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
        .post(`/api/campuses`, newCampus).catch(err => console.log(err))
        .then(newCampus => dispatch(addCampus(newCampus)));
};

export const deleteCampusThunk = campusName => dispatch => {
    return dispatch(deleteCampus(campusName));
};

export const searchCampusThunk = filterWord => dispatch => {
    return dispatch(searchCampus(filterWord));
};

export const editCampusThunk = editedCampus => dispatch => {
    return dispatch(editCampus(editedCampus));
};