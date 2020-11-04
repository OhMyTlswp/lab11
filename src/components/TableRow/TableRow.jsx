import "./TableRow.scss";
import { useDispatch } from "react-redux";
import openModal from "../../actions/openModal";
// import deleteTableItem from "../../actions/delelteTableItem";
import {
  changeName,
  changeEmail,
  changeRights,
  changeStatus,
} from "../../actions/changeModalValues";
function TableRow({ cells, type = "cells", id }) {
  const dispatch = useDispatch();
  return (
    <div
      onDoubleClick={() => {
        dispatch(changeName(cells[0]));
        dispatch(changeEmail(cells[1]));
        dispatch(changeRights(cells[2]));
        dispatch(changeStatus(cells[3]));
        dispatch(openModal("edit", id));
      }}
      className="table-row"
    >
      {cells.map((cell) => (
        <div className={`table-row_cell table-row_cell__${type}`}>{cell}</div>
      ))}
    </div>
  );
}

export default TableRow;
