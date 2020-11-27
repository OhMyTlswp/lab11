export default function deleteTableItem(index) {
  return {
    type: 'DELETE_ITEM',
    payload: index,
  };
}
