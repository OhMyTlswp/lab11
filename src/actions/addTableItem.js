export default function addTableItem(name = "Anonimus", email, rights, status) {
  if (name.length < 1) {
    name = "anonimus";
  }
  return {
    type: "ADD_ITEM",
    payload: { name: name, email: email, rights: rights, status: status },
  };
}
