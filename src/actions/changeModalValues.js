export function changeName(value) {
  return { type: "SET_MODAL_NAME", payload: value };
}
export function changeEmail(value) {
  return { type: "SET_MODAL_EMAIL", payload: value };
}
export function changeRights(value) {
  return { type: "SET_MODAL_RIGHTS", payload: value };
}
export function changeStatus(value) {
  return { type: "SET_MODAL_STATUS", payload: value };
}
export function clearModal(value) {
  return { type: "CLEAR_MODAL" };
}
