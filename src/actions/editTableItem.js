export default function addTableItem(id, values) {
  return {
    type: 'EDIT_ITEM',
    payload: {
      id: id,
      values: values,
    },
  };
}
