import { CREATE_USER, EDIT_USER, FILTER_WALKERS, GET_ALL_USERS, GET_CLIENT_BY_NAME, GET_WALKER_BY_NAME, ORDER_DEFAULT, PRUEBA, RESTORE_CLIENTS, RESTORE_WALKERS, CURRENT_USER, CREATE_DOG, SET_WALK } from "./action-types";

let initialstate = {
  allUsers: [],
  clients: [],
  clientsBackUp: [],
  walkers: [{ "name": "Pele", "email": "ejemplo1@gmail.com", "password": ".", "description": "Esta es la descripcion", "birthdate": "1901-05-25", "image": "url", "country": "Argentina", "state": "Buenos Aires", "city": "Buenos Aires", "address": "Av Alcorta y Udaondo", "phone": "1", "status": false, "suscription": true, "rol": "Walker" }, { "name": "Messi", "email": "ejemplo2@gmail.com", "password": ".", "description": "Esta es la descripcion", "birthdate": "1901-05-25", "image": "url", "country": "Colombia", "state": "Bogota D.C.", "city": "Bogota", "address": "Av Alcorta y Udaondo", "phone": "2", "status": true, "suscription": true, "rol": "Walker" }, { "name": "Maradona", "email": "ejemplo3@gmail.com", "password": ".", "description": "Esta es la descripcion", "birthdate": "1901-05-25", "image": "url", "country": "Mexico", "state": "CDMX", "city": "Ciudad De Mexico", "address": "Av Alcorta y Udaondo", "phone": "3", "status": true, "suscription": true, "rol": "Walker" }, { "name": "Ronaldo", "email": "ejemplo4@gmail.com", "password": ".", "description": "Esta es la descripcion", "birthdate": "1901-05-25", "image": "url", "country": "Argentina", "state": "Buenos Aires", "city": "Buenos Aires", "address": "Av Alcorta y Udaondo", "phone": "4", "status": false, "suscription": true, "rol": "Walker" }, { "name": "Di Stéfano", "email": "ejemplo5@gmail.com", "password": ".", "description": "Esta es la descripcion", "birthdate": "1901-05-25", "image": "url", "country": "Argentina", "state": "Buenos Aires", "city": "Buenos Aires", "address": "Av Alcorta y Udaondo", "phone": "5", "status": true, "suscription": true, "rol": "Walker" }, { "name": "Cruyff", "email": "ejemplo6@gmail.com", "password": ".", "description": "Esta es la descripcion", "birthdate": "1901-05-25", "image": "url", "country": "Argentina", "state": "Buenos Aires", "city": "Buenos Aires", "address": "Av Alcorta y Udaondo", "phone": "6", "status": true, "suscription": true, "rol": "Walker" }],
  walkersBackUp: [{ "name": "Pele", "email": "ejemplo1@gmail.com", "password": ".", "description": "Esta es la descripcion", "birthdate": "1901-05-25", "image": "url", "country": "Argentina", "state": "Buenos Aires", "city": "Buenos Aires", "address": "Av Alcorta y Udaondo", "phone": "1", "status": false, "suscription": true, "rol": "Walker" }, { "name": "Messi", "email": "ejemplo2@gmail.com", "password": ".", "description": "Esta es la descripcion", "birthdate": "1901-05-25", "image": "url", "country": "Colombia", "state": "Bogota D.C.", "city": "Bogota", "address": "Av Alcorta y Udaondo", "phone": "2", "status": true, "suscription": true, "rol": "Walker" }, { "name": "Maradona", "email": "ejemplo3@gmail.com", "password": ".", "description": "Esta es la descripcion", "birthdate": "1901-05-25", "image": "url", "country": "Mexico", "state": "CDMX", "city": "Ciudad De Mexico", "address": "Av Alcorta y Udaondo", "phone": "3", "status": true, "suscription": true, "rol": "Walker" }, { "name": "Ronaldo", "email": "ejemplo4@gmail.com", "password": ".", "description": "Esta es la descripcion", "birthdate": "1901-05-25", "image": "url", "country": "Argentina", "state": "Buenos Aires", "city": "Buenos Aires", "address": "Av Alcorta y Udaondo", "phone": "4", "status": false, "suscription": true, "rol": "Walker" }, { "name": "Di Stéfano", "email": "ejemplo5@gmail.com", "password": ".", "description": "Esta es la descripcion", "birthdate": "1901-05-25", "image": "url", "country": "Argentina", "state": "Buenos Aires", "city": "Buenos Aires", "address": "Av Alcorta y Udaondo", "phone": "5", "status": true, "suscription": true, "rol": "Walker" }, { "name": "Cruyff", "email": "ejemplo6@gmail.com", "password": ".", "description": "Esta es la descripcion", "birthdate": "1901-05-25", "image": "url", "country": "Argentina", "state": "Buenos Aires", "city": "Buenos Aires", "address": "Av Alcorta y Udaondo", "phone": "6", "status": true, "suscription": true, "rol": "Walker" }],
  users: [],
  currentUser: {},
  dogs: [],
  walk: {}
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
    case ORDER_DEFAULT:
      return {
        ...state,
        walkersBackUp: state.walkersBackUp.sort((a, b) => (b.status ? 1 : -1)),
        walkers: state.walkers.sort((a, b) => (b.status ? 1 : -1)),
      }
    case FILTER_WALKERS:
      //*Filtro para countries
      if (payload.includes("Country")) {
        return {
          ...state,
          walkers: state.walkersBackUp.filter(walker => walker.country === payload.slice(10))
        }
      }
      //*Filtro para states
      if (payload.includes("State")) {
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
    case CURRENT_USER:
      return {
        ...state,
        currentUser: payload
      }
    case CREATE_DOG:
      return {
        ...state,
        dogs: [...state.dogs, payload]
      }
    case SET_WALK:
      return {
        ...state,
        // walk should be an object with all the walk info that get added on different steps
        walk: payload
      }

    default:
      return { ...state };
  }
};

export default reducer;