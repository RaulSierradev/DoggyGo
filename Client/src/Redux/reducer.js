import { FILTER_WALKERS, GET_ALL_USERS, GET_CLIENT_BY_NAME, GET_WALKER_BY_NAME, ORDER_DEFAULT, PRUEBA, RESTORE_CLIENTS, RESTORE_WALKERS } from "./action-types";

let initialstate = {
  allUsers: [],
  clients: [],
  clientsBackUp: [],
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
        clients: payload && payload.filter((user) => user.rol === "Client"),
        clientsBackUp: payload && payload.filter((user) => user.rol === "Client"),
        walkers: payload && payload.filter((user) => user.rol === "Walker"),
        walkersBackUp: payload && payload.filter((user) => user.rol === "Walker")
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
    case ORDER_DEFAULT:
      console.log("Se aplico ordenDefault:", state.walkers);
      return {
        ...state,
        walkersBackUp: state.walkersBackUp.sort((a, b) => (b.status ? 1 : -1)), 
        walkers: state.walkers.sort((a, b) => (b.status ? 1 : -1)),
      }
    case FILTER_WALKERS:
      //*Filtro para countries
      if (payload.includes("Country")){
        return {
          ...state,
          walkers: state.walkersBackUp.filter(walker => walker.country === payload.slice(10))
        }
      }
      //*Filtro para states
      if (payload.includes("State")){
        return {
          ...state,
          walkers: state.walkersBackUp.filter(walker => walker.state === payload.slice(8))
        }
      }
      //*Filtro para cities
      return {
        ...state,
        walkers: state.walkersBackUp.filter(walker => walker.city === payload.slice(7))
      }

    default:
      return { ...state };
  }
};

export default reducer;
