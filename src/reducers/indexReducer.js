import { combineReducers } from 'redux';
import tableReducer from './tableReducer';
import editTableModalRducer from './editTableModalRducer';

export default combineReducers({
  table: tableReducer,
  modal: editTableModalRducer,
});
