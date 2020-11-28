import React from 'react';
import PropTypes from 'prop-types';
import './TableRow.scss';
import { useDispatch } from 'react-redux';
import openModal from '../../actions/openModal';
import { changeValues } from '../../actions/changeModalValues';

function TableRow({ cells, id, headers }) {
  const dispatch = useDispatch();
  return (
    <div
      onDoubleClick={() => {
        dispatch(openModal('edit', id));
        dispatch(changeValues(cells));
      }}
      className="table-row"
    >
      {Object.keys(headers).map((key) => (
        <div className="table-row_cell">{cells[key] ? cells[key] : headers[key].defaultValue}</div>
      ))}
    </div>
  );
}

export default TableRow;

TableRow.propTypes = {
  headers: PropTypes.objectOf(PropTypes.object).isRequired,
  id: PropTypes.number.isRequired,
  cells: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    defaultValue: PropTypes.string,
    dropdownItems: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
