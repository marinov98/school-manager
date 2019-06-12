import { GET_CAMPUSES, ADD_CAMPUS, SEARCH_CAMPUS } from "../actions/types";

const initialState = {
    campuses: [{ "Name": "Hunter College", "Location": "Manhattan" }, { "Name": "Baruch College", "Location": "Manhattan" }, { "Name": "Queens College", "Location": "Queens" }],
    filteredCampuses: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_CAMPUSES:
            return {
                ...state,
                campuses: action.payload
            };
        case ADD_CAMPUS:
            return {
                ...state,
                campuses: [...state.campuses, action.payload]
            };
        case SEARCH_CAMPUS:
            let targetWord = action.payload;
            let nameArray = state.campuses.filter(campus => targetWord.includes(campus.Name));
            let locationArray = state.campuses.filter(campus => targetWord.includes(campus.Location));
            let filteredArray = nameArray.concat(locationArray);
            return {
                ...state,
                filteredCampuses: filteredArray
            };
        default:
            return state;
    }
};
