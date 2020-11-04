import "./EditTableModal.scss";
import { useSelector, useDispatch } from "react-redux";
import closeModal from "../../actions/closeModal";
import {
  changeName,
  changeEmail,
  changeRights,
  changeStatus,
  clearModal,
} from "../../actions/changeModalValues";
import addTableItem from "../../actions/addTableItem";
import editTableItem from "../../actions/editTableItem";
import delelteTableItem from "../../actions/delelteTableItem";
function EditTableModal({ title }) {
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  return (
    <>
      {modal.isOpen && (
        <div
          onClick={() => {
            dispatch(closeModal());
            dispatch(clearModal());
          }}
          className="modal-wr"
        >
          <div
            onClick={(event) => {
              event.stopPropagation();
            }}
            className="modal"
          >
            <div className="modal_title">{title}</div>
            <div className="modal_subtitle">Имя</div>
            <input
              onChange={(event) => {
                dispatch(changeName(event.target.value));
              }}
              value={modal.name}
              className="modal_input"
            />
            <div className="modal_subtitle">Email</div>
            <input
              onChange={(event) => {
                dispatch(changeEmail(event.target.value));
              }}
              value={modal.email}
              className="modal_input"
            />
            <div className="modal_subtitle">Права</div>
            <input
              onChange={(event) => {
                dispatch(changeRights(event.target.value));
              }}
              value={modal.rights}
              className="modal_input"
            />
            <div className="modal_subtitle">Статус</div>
            <input
              onChange={(event) => {
                dispatch(changeStatus(event.target.value));
              }}
              value={modal.status}
              className="modal_input"
            />
            <div
              onClick={() => {
                dispatch(
                  modal.type === "edit"
                    ? editTableItem(
                        modal.id,
                        modal.name,
                        modal.email,
                        modal.rights,
                        modal.status
                      )
                    : addTableItem(
                        modal.name,
                        modal.email,
                        modal.rights,
                        modal.status
                      )
                );
                dispatch(closeModal());
                dispatch(clearModal());
              }}
              className="modal_button"
            >
              сохранить
            </div>
            {modal.type === "edit" && (
              <div
                onClick={() => {
                  dispatch(delelteTableItem(modal.id));
                  dispatch(closeModal());
                  dispatch(clearModal());
                }}
                className="modal_button"
              >
                Удалить
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default EditTableModal;
