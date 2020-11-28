import initialState from '../initialState';

export default function editTableModalRducer(state = initialState.editTableModal, action) {
  let newState;
  switch (action.type) {
    case 'SET_MODAL_VALUE':
      newState = {
        ...state,
        values: { ...state.values, [action.payload.key]: action.payload.value },
      };
      return newState;
    case 'SET_MODAL_VALUES':
      newState = {
        ...state,
        values: action.payload,
      };
      return newState;
    case 'SET_MODAL_STATUS':
      newState = {
        ...state,
        status: action.payload,
      };
      return newState;
    case 'MODAL_IS_OPEN':
      newState = {
        ...state,
        isOpen: action.payload.status,
        type: action.payload.type,
        id: action.payload.id,
      };
      return newState;
    case 'CLEAR_MODAL':
      newState = {
        ...state,
        values: [],
      };
      return newState;
    case 'SET_MODAL':
      if (action.payload) {
        const keys = Object.keys(action.payload);
        let values = [];
        keys.forEach((key) => {
          values.push([key, '']);
        });
        values = Object.fromEntries(values);
        newState = {
          ...state,
          values,
        };
      }
      return newState;
    default:
      return state;
  }
}
