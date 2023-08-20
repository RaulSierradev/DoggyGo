import { GET_ALL_USERS, GET_USERS, GET_WALKERS, PRUEBA } from "./action-types";

let initialstate = {
  allUsers: [],
  users: [],
  walkers: [],
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
        users: payload,
      };
    case GET_USERS:
      return {
        ...state,
        users:
          state.allUsers &&
          state.allUsers.filter((user) => user.rol === "Cliente"),
      };
    case GET_WALKERS:
      return {
        ...state,
        walkers:
          state.allUsers &&
          state.allUsers.filter((user) => user.rol === "Paseador"),
      };

    default:
      return { ...state };
  }
};

export default reducer;
