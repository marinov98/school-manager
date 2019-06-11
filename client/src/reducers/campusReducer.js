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

            // var apps = [{id:34,name:'My App',another:'thing'},{id:37,name:'My New App',another:'things'}];

            // // get index of object with id:37
            // var removeIndex = apps.map(function(item) { return item.id; }).indexOf(37);

            // // remove object
            // apps.splice(removeIndex, 1);


            let targetCampus = action.payload;
            let indexOfTargetCampus = 1;
            // state.campuses.map(function (campus) { return campus.Name; }).indexOf(targetCampus);

            // for (let i = 0; i < state.campuses.length; i++) {
            //     if (state.campuses[i].Name === targetCampus) {
            //         indexOfTargetCampus = i;
            //     }
            // }
            let newArray = state.campuses.splice(indexOfTargetCampus, 1);
            console.log(newArray);
            return {
                ...state,
                campuses: newArray
            };
        default:
            return state;
    }
};
