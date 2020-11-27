export default function closeModal() {
  return { type: 'MODAL_IS_OPEN', payload: { status: false } };
}
