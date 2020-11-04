const initialState = {
  table: [
    {
      name: "Александр",
      email: "emailmail",
      rights: "админ",
      status: "Активный",
    },
    {
      name: "Александр",
      email: "emailmail",
      rights: "админ",
      status: "Активный",
    },
  ],
  editTableModal: {
    name: "",
    email: "",
    rights: "",
    status: "",
    isOpen: false,
    type: "create",
  },
};
export default initialState;
