export const initialState = {
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHECK":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
