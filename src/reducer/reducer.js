export const initialState = {
  recipe: [],
};

export const reducer = (state, action) => {
  console.log(action.payload, "payload");
  switch (action.type) {
    case "FETCH_SUCCESFULL_DATA": {
      return { ...state, recipe: action.payload };
    }
    default:
      return state;
  }
};
