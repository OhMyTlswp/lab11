import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import openModal from '../../actions/openModal';
import TableRow from '../TableRow/TableRow';
import './Table.scss';
import EditTableModal from '../EditTableModal/EditTableModal';

function Table({ headers, data, name, onChangeData }) {
  const table = useSelector((state) => state.table);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'ADD_ITEMS_ARRAY', payload: data });
    dispatch({ type: 'SET_HEADERS', payload: headers });
    dispatch({ type: 'SET_MODAL', payload: headers });
  }, []);
  return (
    <div className="table">
      <EditTableModal onChangeData={onChangeData} headers={headers} title="Добавление пользователя" />
      <h1 className="table_title">{name}</h1>
      <div className="table_rows">
        <div className="table-row">
          {Object.values(headers).map((cell, index) => (
            <div key={index} className="table-row_cell table-row_cell__headers">
              {cell.name}
            </div>
          ))}
        </div>
        {table.items.map((row, index) => (
          <TableRow key={index} id={index} cells={row} headers={headers} />
        ))}
      </div>
      <button
        type="button"
        onClick={() => {
          dispatch(openModal());
        }}
        className="table_button"
      >
        Добавить
      </button>
    </div>
  );
}

export default Table;
Table.defaultProps = {
  name: 'Не задано',
  onChangeData: null,
};
Table.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
  headers: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChangeData: PropTypes.func,
};
