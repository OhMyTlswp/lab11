import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './EditTableModal.scss';
import { useSelector, useDispatch } from 'react-redux';
import closeModal from '../../actions/closeModal';
import { changeValue, clearModal } from '../../actions/changeModalValues';
import addTableItem from '../../actions/addTableItem';
import editTableItem from '../../actions/editTableItem';
import delelteTableItem from '../../actions/delelteTableItem';

function EditTableModalInput({ type, header, keyType, value, dropdownItems }) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (type === 'dropdown') {
      dispatch(changeValue(value, keyType));
    }
  }, []);
  switch (type) {
    case ('text', 'email', 'number'):
      return (
        <>
          <div className="modal_subtitle">{header}</div>
          <input
            onChange={(event) => {
              dispatch(changeValue(event.target.value, keyType));
            }}
            type={type}
            value={value}
            className="modal_input"
          />
        </>
      );
    case 'dropdown':
      return (
        <>
          <div className="modal_subtitle">{header}</div>
          {dropdownItems ? (
            <select
              className="modal_dropdown"
              value={value}
              onChange={(event) => {
                dispatch(changeValue(event.target.value, keyType));
              }}
            >
              <option value="0">{header}</option>
              {dropdownItems.map((dropdownValue) => (
                <option value={dropdownValue}>{dropdownValue}</option>
              ))}
            </select>
          ) : (
            <input
              onChange={(event) => {
                dispatch(changeValue(event.target.value, keyType));
              }}
              type="text"
              value={value}
              className="modal_input"
            />
          )}
        </>
      );
    default:
      return (
        <>
          <div className="modal_subtitle">{header}</div>
          <input
            onChange={(event) => {
              dispatch(changeValue(event.target.value, keyType));
            }}
            type="text"
            value={value}
            className="modal_input"
          />
        </>
      );
  }
}
EditTableModalInput.defaultProps = {
  dropdownItems: null,
};
EditTableModalInput.propTypes = {
  type: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  keyType: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  dropdownItems: PropTypes.arrayOf(PropTypes.string),
};

function EditTableModal({ title, headers, onChangeData }) {
  const modal = useSelector((state) => state.modal);
  const table = useSelector((state) => state.table);
  const dispatch = useDispatch();
  useEffect(() => {}, []);
  return (
    <>
      {modal.isOpen && (
        <div
          onClick={() => {
            dispatch(closeModal());
            // dispatch(clearModal());
          }}
          role="button"
          tabIndex={0}
          aria-hidden="true"
          className="modal-wr"
        >
          <div
            role="button"
            tabIndex={0}
            aria-hidden="true"
            onClick={(event) => {
              event.stopPropagation();
            }}
            className="modal"
          >
            <div className="modal_title">{title}</div>
            {Object.entries(headers).map((headerItem) => (
              <EditTableModalInput
                type={headerItem[1].type}
                header={headerItem[1].name}
                keyType={headerItem[0]}
                value={modal.values[headerItem[0]]}
                dropdownItems={headerItem[1].dropdownItems}
              />
            ))}
            <div
              role="button"
              tabIndex={0}
              aria-hidden="true"
              onClick={() => {
                dispatch(modal.type === 'edit' ? editTableItem(modal.id, modal.values) : addTableItem(modal.values));
                dispatch(closeModal());
                dispatch(clearModal());
                onChangeData(table.items);
              }}
              className="modal_button"
            >
              сохранить
            </div>
            {modal.type === 'edit' && (
              <div
                role="button"
                tabIndex={0}
                aria-hidden="true"
                onClick={() => {
                  dispatch(delelteTableItem(modal.id));
                  dispatch(closeModal());
                  // dispatch(clearModal());
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
EditTableModal.defaultProps = {
  onChangeData: null,
};
EditTableModal.propTypes = {
  headers: PropTypes.objectOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
  onChangeData: PropTypes.func,
};
