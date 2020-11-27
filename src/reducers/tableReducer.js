import initialState from '../initialState';

export default function tableReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      const headersArr = Object.entries(state.headers);
      const headersKeys = Object.keys(state.headers);
      // const items = [];
      headersArr.forEach((headerItem) => {
        headerItem[1] = '';
        return;
      });
      for (const key in action.payload) {
        const index = headersKeys.indexOf(key);
        if (index >= 0) {
          headersArr[index][1] = action.payload[key];
        }
      }
      let newState = {
        ...state,
        items: [...state.items, Object.fromEntries(headersArr)],
      };
      return newState;
    case 'ADD_ITEMS_ARRAY':
      newState = {
        ...state,
        items: action.payload,
      };
      return newState;
    case 'DELETE_ITEM':
      newState = {
        ...state,
        items: [...state.items.splice(0, action.payload), ...state.items.splice(1)],
      };
      return newState;
    case 'EDIT_ITEM':
      newState = {
        ...state,
        items: state.items.map((item, index) => {
          if (index === action.payload.id) {
            // let payload = [];
            // for (let key in state.headers) {
            //   payload[key]=
            // }
            return action.payload.values;
          } else {
            return item;
          }
        }),
      };
      return newState;
    case 'SET_HEADERS':
      newState = { ...state, headers: action.payload };
      return newState;
    default:
      return state;
  }
}
