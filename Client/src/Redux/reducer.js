
import { GET_ALL_USERS, GET_CLIENT_BY_NAME, GET_WALKER_BY_NAME, PRUEBA, RESTORE_CLIENTS, RESTORE_WALKERS } from "./action-types";
import { CREATE_USER, EDIT_USER } from './action-types'


let initialstate = {
  allUsers: [],
  clients: [],
  clientsBackUp: [],
  walkers: [],
  walkersBackUp: [],
  users: [],

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
        clients: payload && payload.filter((user) => user.rol === "Client"),
        clientsBackUp: payload && payload.filter((user) => user.rol === "Client"),
        walkers: payload && payload.filter((user) => user.rol === "Walker"),
        walkersBackUp: payload && payload.filter((user) => user.rol === "Walker"),
        users: payload

      };
    case GET_CLIENT_BY_NAME:
      console.log("Reducer - Payload:", payload);
      return {
        ...state,
        clients: payload && payload.filter(user => user.rol === "Client")
      }
    case GET_WALKER_BY_NAME:
      console.log("Reducer - Payload:", payload);
      return {
        ...state,
        walkers: payload && payload.filter(user => user.rol === "Walker")
      }
    case RESTORE_CLIENTS:
      return {
        ...state,
        clients: state.clientsBackUp
      }
    case RESTORE_WALKERS:
      return {
        ...state,
        walkers: state.walkersBackUp
      }
    case CREATE_USER:
      return {
        ...state,
        users: [...state.users, payload]
      }
    case EDIT_USER:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.email === payload.email) {
            return payload
          } else {
            return user
          }
        })

      }


    default:
      return { ...state };
  }
};

export default reducer;