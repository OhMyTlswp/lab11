import initialState from "../initialState";
export default function editTableModalRducer(state = initialState, action) {
  switch (action.type) {
    case "SET_MODAL_NAME":
      state = {
        ...state,
        name: action.payload,
      };
      return state;
    case "SET_MODAL_EMAIL":
      state = {
        ...state,
        email: action.payload,
      };
      return state;
    case "SET_MODAL_RIGHTS":
      state = {
        ...state,
        rights: action.payload,
      };
      return state;
    case "SET_MODAL_STATUS":
      state = {
        ...state,
        status: action.payload,
      };
      return state;
    case "SET_MODAL_TITLE":
      state = {
        ...state,
        title: action.payload,
      };
      return state;
    case "MODAL_IS_OPEN":
      state = {
        ...state,
        isOpen: action.payload.status,
        type: action.payload.type,
        id: action.payload.id,
      };
      return state;
    case "CLEAR_MODAL":
      state = {
        ...state,
        name: "",
        email: "",
        rights: "",
        status: "",
      };
      return state;
    default:
      return state;
  }
}
