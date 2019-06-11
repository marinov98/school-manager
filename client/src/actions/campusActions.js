import { GET_CAMPUSES, ADD_CAMPUS, SEARCH_CAMPUS } from "./types";

// const getCampuses = campuses => {
//     return {
//         type: GET_CAMPUSES,
//         payload: campuses
//     };
// };

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

export const addCampusThunk = newCampus => dispatch => {
    return dispatch(addCampus(newCampus));
};

export const searchCampusThunk = filterWord => dispatch => {
    return dispatch(searchCampus(filterWord));
};
