import initialState from '../initialState';
export default function editTableModalRducer(state = initialState.editTableModal, action) {
  switch (action.type) {
    case 'SET_MODAL_VALUE':
      state = {
        ...state,
        values: { ...state.values, [action.payload.key]: action.payload.value },
      };
      return state;
    case 'SET_MODAL_VALUES':
      state = {
        ...state,
        values: action.payload,
      };
      return state;
    case 'SET_MODAL_STATUS':
      state = {
        ...state,
        status: action.payload,
      };
      return state;
    case 'MODAL_IS_OPEN':
      state = {
        ...state,
        isOpen: action.payload.status,
        type: action.payload.type,
        id: action.payload.id,
      };
      return state;
    case 'CLEAR_MODAL':
      state = {
        ...state,
        values: [],
      };
    case 'SET_MODAL':
      if (action.payload) {
        let keys = Object.keys(action.payload),
          values = [];
        keys.forEach((key) => {
          values.push([key, '']);
        });
        values = Object.fromEntries(values);
        state = {
          ...state,
          values: values,
        };
      }
      return state;
    default:
      return state;
  }
}
