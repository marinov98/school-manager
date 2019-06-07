export default (state = {}, action) => {
  switch (action.type) {
    case GET_STUDENTS:
      return action.payload;
    default:
      return state;
  }
};
