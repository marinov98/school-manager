import {
    GET_CAMPUSES,
    ADD_CAMPUS,
    DELETE_CAMPUS,
    EDIT_CAMPUS
} from "../actions/types";

const initialState = {
    campuses: []
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
        case DELETE_CAMPUS:
            let copyOfCampusArray = state.campuses;
            let targetCampus = action.payload;
            let indexOfTargetCampus = copyOfCampusArray.findIndex(
                campus => campus.id === targetCampus
            );
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
