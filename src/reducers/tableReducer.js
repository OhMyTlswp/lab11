import initialState from "../initialState";
export default function tableReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM":
      state = [...state, action.payload];
      return state;
    case "DELETE_ITEM":
      state = [...state.splice(0, action.payload), ...state.splice(1)];
      return state;
    case "EDIT_ITEM":
      state = state.map((item, index) =>
        index === action.id
          ? {
              ...item,
              name: action.name,
              email: action.email,
              rights: action.rights,
              status: action.status,
            }
          : item
      );
      return state;
    default:
      return state;
  }
}
