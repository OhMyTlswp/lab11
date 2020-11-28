export default function openModal(type = 'create', id = null) {
  return {
    type: 'MODAL_IS_OPEN',
    payload: { status: true, type, id },
  };
}
