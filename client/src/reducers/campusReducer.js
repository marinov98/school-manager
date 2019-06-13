import {
    GET_CAMPUSES,
    ADD_CAMPUS,
    SEARCH_CAMPUS,
    DELETE_CAMPUS,
    EDIT_CAMPUS
} from "../actions/types";

const initialState = {
    campuses: [
        {
            Id: "1",
            Name: "Hunter College",
            Location: "Manhattan",
            CurrentStudents: [
                {ID: 1, Name: "Mary Fan"},
                {ID: 2, Name: "Angela Lim"},
                {ID: 3, Name: "Kris Wu"}
            ],
            Address: "695 Park Ave, New York, NY 10065",
            Description:
                "Hunter College is one of the constituent colleges of the City University of New York, an American public university.",
            ImageURL:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Hunter_College.jpg/215px-Hunter_College.jpg"
        },
        {
            ID: "2",
            Name: "Baruch College",
            Location: "Manhattan",
            CurrentStudents: [
                {ID: 4, Name: "Mary Fan"},
                {ID: 5, Name: "Angela Lim"},
                {ID: 6, Name: "Kris Wu"}
            ]
        },
        {
            ID: "3",
            Name: "Queens College",
            Location: "Queens",
            CurrentStudents: [
                {ID: 7, Name: "Mary Fan"},
                {ID: 8, Name: "Angela Lim"},
                {ID: 9, Name: "Kris Wu"}
            ]
        }
    ],
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
            let nameArray = state.campuses.filter(campus =>
                targetWord.includes(campus.Name)
            );
            console.log(nameArray);
            let locationArray = state.campuses.filter(campus =>
                targetWord.includes(campus.Location)
            );
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

            let indexOfTargetCampus = copyOfCampusArray.findIndex(
                campus => campus.Name === targetCampus
            );
            console.log(indexOfTargetCampus);
            copyOfCampusArray.splice(indexOfTargetCampus, 1);
            return {
                ...state,
                campuses: copyOfCampusArray
            };
        case EDIT_CAMPUS:
            let copyCampusArray = state.campuses;
            let targetId = action.payload.Id;
            console.log(action.payload.Id);

            let indexOfTargetId = copyCampusArray.findIndex(
                campus => campus.Id === targetId
            );

            console.log(indexOfTargetId);

            console.log(copyCampusArray[indexOfTargetId].Name);

            copyCampusArray[indexOfTargetId].Name = action.payload.Name;

            console.log(copyCampusArray[indexOfTargetId].Name);

            copyCampusArray[indexOfTargetId].Address = action.payload.Address;
            copyCampusArray[indexOfTargetId].Description =
                action.payload.Description;
            copyCampusArray[indexOfTargetId].ImageURL = action.payload.ImageURL;

            return {
                ...state,
                campuses: copyCampusArray
            };

        default:
            return state;
    }
};
