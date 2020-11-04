export default function addTableItem(id, name, email, rights, status) {
  return {
    type: "EDIT_ITEM",
    id: id,
    name: name,
    email: email,
    rights: rights,
    status: status,
  };
}
