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
        <div className={`table-row_cell`}>{cells[key] ? cells[key] : headers[key].defaultValue}</div>
      ))}
    </div>
  );
}

export default TableRow;
