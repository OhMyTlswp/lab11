import { useDispatch } from "react-redux";
import openModal from "../../actions/openModal";
import TableRow from "../TableRow/TableRow";
import "./Table.scss";

function Table({ children }) {
  let dispatch = useDispatch();
  return (
    <div className="table">
      <div className="table_title">Пользователи</div>
      <div className="table_rows">
        <TableRow type="headers" cells={["Имя", "Email", "Права", "Cтатус"]} />
        {children}
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
