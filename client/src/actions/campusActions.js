import {
    GET_CAMPUSES,
    ADD_CAMPUS,
    SEARCH_CAMPUS,
    DELETE_CAMPUS,
    EDIT_CAMPUS
} from "./types";

const addCampus = campus => {
    return {
        type: ADD_CAMPUS,
        payload: campus
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
}

export const deleteCampusThunk = campusName => dispatch => {
    return dispatch(deleteCampus(campusName));
};

export const addCampusThunk = newCampus => dispatch => {
    return dispatch(addCampus(newCampus));
};

export const searchCampusThunk = filterWord => dispatch => {
    return dispatch(searchCampus(filterWord));
};

export const editCampusThunk = editedCampus => dispatch => {
    return dispatch(editCampus(editedCampus));
};
