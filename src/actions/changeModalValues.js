export function changeValue(value, key) {
  return { type: 'SET_MODAL_VALUE', payload: { value, key } };
}
export function changeValues(values) {
  return { type: 'SET_MODAL_VALUES', payload: values };
}
export function changeEmail(value) {
  return { type: 'SET_MODAL_EMAIL', payload: value };
}
export function changeRights(value) {
  return { type: 'SET_MODAL_RIGHTS', payload: value };
}
export function changeStatus(value) {
  return { type: 'SET_MODAL_STATUS', payload: value };
}
export function clearModal() {
  return { type: 'CLEAR_MODAL' };
}
