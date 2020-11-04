import "./App.scss";
import Table from "./components/Table/Table";
import TableRow from "./components/TableRow/TableRow";
import { useSelector } from "react-redux";
import EditTableModal from "./components/EditTableModal/EditTableModal";

function App() {
  let table = useSelector((state) => state.table);
  return (
    <div className="app">
      <EditTableModal title="Добавление пользователя" />
      <Table>
        {table.map((row, index) => (
          <TableRow
            key={index}
            id={index}
            cells={[row.name, row.email, row.rights, row.status]}
          />
        ))}
      </Table>
    </div>
  );
}

export default App;
