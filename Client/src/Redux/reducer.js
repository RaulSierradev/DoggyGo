import { GET_ALL_USERS, PRUEBA } from "./action-types";

let initialstate = {
  allUsers: [],
  users: [],
  walkers: [],
  walkersBackUp: [],
};

let reducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case PRUEBA:
      console.log("hola desde el state global");
      return {
        ...state,
      };
    case GET_ALL_USERS:
      console.log("Reducer - Payload:", payload);
      return {
        ...state,
        allUsers: payload,
        users: payload && payload.filter((user) => user.rol === "Client"),
        walkers: payload && payload.filter((user) => user.rol === "Walker")
      };

    default:
      return { ...state };
  }
};

export default reducer;
