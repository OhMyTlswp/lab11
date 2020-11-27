import { useDispatch, useSelector } from 'react-redux';
import openModal from '../../actions/openModal';
import TableRow from '../TableRow/TableRow';
import './Table.scss';
import EditTableModal from '../EditTableModal/EditTableModal';
import { useEffect } from 'react';

function Table({ headers, data, name, onChangeData }) {
  let table = useSelector((state) => state.table);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'ADD_ITEMS_ARRAY', payload: data });
    dispatch({ type: 'SET_HEADERS', payload: headers });
    dispatch({ type: 'SET_MODAL', payload: headers });
  }, []);
  return (
    <div className="table">
      <EditTableModal onChangeData={onChangeData} headers={headers} title="Добавление пользователя" />
      <h1 className="table_title">{name ? name : 'Не задано'}</h1>
      <div className="table_rows">
        <div className="table-row">
          {Object.values(headers).map((cell) => (
            <div className={`table-row_cell table-row_cell__headers`}>{cell.name}</div>
          ))}
        </div>
        {table.items.map((row, index) => (
          <TableRow key={index} id={index} cells={row} headers={headers} />
        ))}
      </div>
      <div
        onClick={() => {
          dispatch(openModal());
        }}
        className="table_button"
      >
        Добавить
      </div>
    </div>
  );
}

export default Table;
