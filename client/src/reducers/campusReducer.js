import { GET_CAMPUSES, ADD_CAMPUS, SEARCH_CAMPUS, DELETE_CAMPUS } from "../actions/types";

const initialState = {
    campuses: [{
        "Name": "Hunter College",
        "Location": "Manhattan",
        "CurrentStudents": [{ "ID": 1, "Name": "Mary Fan" }, { "ID": 2, "Name": "Angela Lim" }, { "ID": 3, "Name": "Kris Wu" }]
    },
    {
        "Name": "Baruch College",
        "Location": "Manhattan",
        "CurrentStudents": [{ "ID": 4, "Name": "Mary Fan" }, { "ID": 5, "Name": "Angela Lim" }, { "ID": 6, "Name": "Kris Wu" }]
    },
    {
        "Name": "Queens College",
        "Location": "Queens",
        "CurrentStudents": [{ "ID": 7, "Name": "Mary Fan" }, { "ID": 8, "Name": "Angela Lim" }, { "ID": 9, "Name": "Kris Wu" }]
    }],
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
            console.log(nameArray);
            let locationArray = state.campuses.filter(campus => targetWord.includes(campus.Location));
            console.log(locationArray);
            let filteredArray = nameArray.concat(locationArray);
            return {
                ...state,
                filteredCampuses: filteredArray
            };
        case DELETE_CAMPUS:
            let copyOfCampusArray = state.campuses;
            let targetCampus = action.payload;


            console.log(action.payload);

            let indexOfTargetCampus = copyOfCampusArray.findIndex(campus => campus.Name === targetCampus);
            console.log(indexOfTargetCampus)
            copyOfCampusArray.splice(indexOfTargetCampus, 1);
            return {
                ...state,
                campuses: copyOfCampusArray
            };
        default:
            return state;
    }
};
