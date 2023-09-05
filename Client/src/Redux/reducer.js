import {
  CREATE_USER,
  EDIT_USER,
  FILTER_WALKERS,
  GET_ALL_USERS,
  GET_CLIENT_BY_NAME,
  GET_WALKER_BY_NAME,
  ORDER_WALKERS,
  PRUEBA,
  RESTORE_CLIENTS,
  RESTORE_WALKERS,
  CURRENT_USER,
  CREATE_DOG,
  SET_WALK,
  GET_BY_ID,
  GET_ALL_WALKS,
  GET_COUNTRIES,
  GET_STATES,
  GET_CITIES,
  CREATE_WALK,
} from "./action-types";

let initialstate = {
  allUsers: [],
  clients: [],
  clientsBackUp: [],
  walkers: [
    {
      name: 'Pele',
      email: 'ejemplo1@gmail.com',
      password: '.',
      description: 'Esta es la descripcion',
      schedule: "6am-11am",
      cpr: true,
      birthdate: '1901-05-25',
      image: 'url',
      country: 'Argentina',
      state: 'Buenos Aires',
      city: 'Buenos Aires',
      address: 'Av Alcorta y Udaondo',
      phone: '1',
      status: false,
      suscription: true,
      rol: 'Walker',
      ratingAvg: 1.21,
    },
    {
      name: 'Messi',
      email: 'ejemplo2@gmail.com',
      password: '.',
      description: 'Esta es la descripcion',
      schedule: "6am-11am",
      cpr: true,
      birthdate: '1901-05-25',
      image: 'url',
      country: 'Colombia',
      state: 'Bogota D.C.',
      city: 'Bogota',
      address: 'Av Alcorta y Udaondo',
      phone: '2',
      status: true,
      suscription: true,
      rol: 'Walker',
      ratingAvg: 1.45,
    },
    {
      name: 'Maradona',
      email: 'ejemplo3@gmail.com',
      password: '.',
      description: 'Esta es la descripcion',
      schedule: "11am-3pm",
      cpr: true,
      birthdate: '1901-05-25',
      image: 'url',
      country: 'Mexico',
      state: 'CDMX',
      city: 'Ciudad De Mexico',
      address: 'Av Alcorta y Udaondo',
      phone: '3',
      status: true,
      suscription: true,
      rol: 'Walker',
      ratingAvg: 1.42,
    },
    {
      name: 'Ronaldo',
      email: 'ejemplo4@gmail.com',
      password: '.',
      description: 'Esta es la descripcion',
      schedule: "3pm-10pm",
      cpr: true,
      birthdate: '1901-05-25',
      image: 'url',
      country: 'Argentina',
      state: 'Buenos Aires',
      city: 'Buenos Aires',
      address: 'Av Alcorta y Udaondo',
      phone: '4',
      status: false,
      suscription: true,
      rol: 'Walker',
      ratingAvg: 1.76,
    },
    {
      name: 'Di Stéfano',
      email: 'ejemplo5@gmail.com',
      password: '.',
      description: 'Esta es la descripcion',
      schedule: "11am-3pm",
      cpr: false,
      birthdate: '1901-05-25',
      image: 'url',
      country: 'Argentina',
      state: 'Buenos Aires',
      city: 'Buenos Aires',
      address: 'Av Alcorta y Udaondo',
      phone: '5',
      status: true,
      suscription: true,
      rol: 'Walker',
      ratingAvg: 1.99,
    },
    {
      name: 'Cruyff',
      email: 'ejemplo6@gmail.com',
      password: '.',
      description: 'Esta es la descripcion',
      schedule: "3pm-10pm",
      cpr: false,
      birthdate: '1901-05-25',
      image: 'url',
      country: 'Argentina',
      state: 'Buenos Aires',
      city: 'Buenos Aires',
      address: 'Av Alcorta y Udaondo',
      phone: '6',
      status: true,
      suscription: true,
      rol: 'Walker',
      ratingAvg: 1.34,
    },
  ],
  walkersBackUp: [
    {
      name: 'Pele',
      email: 'ejemplo1@gmail.com',
      password: '.',
      description: 'Esta es la descripcion',
      schedule: "6am-11am",
      cpr: true,
      birthdate: '1901-05-25',
      image: 'url',
      country: 'Argentina',
      state: 'Buenos Aires',
      city: 'Buenos Aires',
      address: 'Av Alcorta y Udaondo',
      phone: '1',
      status: false,
      suscription: true,
      rol: 'Walker',
      ratingAvg: 1.21,
    },
    {
      name: 'Messi',
      email: 'ejemplo2@gmail.com',
      password: '.',
      description: 'Esta es la descripcion',
      schedule: "6am-11am",
      cpr: true,
      birthdate: '1901-05-25',
      image: 'url',
      country: 'Colombia',
      state: 'Bogota D.C.',
      city: 'Bogota',
      address: 'Av Alcorta y Udaondo',
      phone: '2',
      status: true,
      suscription: true,
      rol: 'Walker',
      ratingAvg: 1.45,
    },
    {
      name: 'Maradona',
      email: 'ejemplo3@gmail.com',
      password: '.',
      description: 'Esta es la descripcion',
      schedule: "11am-3pm",
      cpr: true,
      birthdate: '1901-05-25',
      image: 'url',
      country: 'Mexico',
      state: 'CDMX',
      city: 'Ciudad De Mexico',
      address: 'Av Alcorta y Udaondo',
      phone: '3',
      status: true,
      suscription: true,
      rol: 'Walker',
      ratingAvg: 1.42,
    },
    {
      name: 'Ronaldo',
      email: 'ejemplo4@gmail.com',
      password: '.',
      description: 'Esta es la descripcion',
      schedule: "3pm-10pm",
      cpr: true,
      birthdate: '1901-05-25',
      image: 'url',
      country: 'Argentina',
      state: 'Buenos Aires',
      city: 'Buenos Aires',
      address: 'Av Alcorta y Udaondo',
      phone: '4',
      status: false,
      suscription: true,
      rol: 'Walker',
      ratingAvg: 1.76,
    },
    {
      name: 'Di Stéfano',
      email: 'ejemplo5@gmail.com',
      password: '.',
      description: 'Esta es la descripcion',
      schedule: "11am-3pm",
      cpr: false,
      birthdate: '1901-05-25',
      image: 'url',
      country: 'Argentina',
      state: 'Buenos Aires',
      city: 'Buenos Aires',
      address: 'Av Alcorta y Udaondo',
      phone: '5',
      status: true,
      suscription: true,
      rol: 'Walker',
      ratingAvg: 1.99,
    },
    {
      name: 'Cruyff',
      email: 'ejemplo6@gmail.com',
      password: '.',
      description: 'Esta es la descripcion',
      schedule: "3pm-10pm",
      cpr: false,
      birthdate: '1901-05-25',
      image: 'url',
      country: 'Argentina',
      state: 'Buenos Aires',
      city: 'Buenos Aires',
      address: 'Av Alcorta y Udaondo',
      phone: '6',
      status: true,
      suscription: true,
      rol: 'Walker',
      ratingAvg: 1.34,
    },
  ],
  users: [],
  currentUser: {},
  dogs: [],
  walk: {},
  user: [],
  walks: [],
  countries: [],
  states: [],
  cities: [],
};

const compareStringsSecondary = (a, b, i = 0) => {
  //* Para ORDER_CARDS
  if (a === b) {
    return 0;
  }

  if (i >= a.length) {
    return -1; // a es más corto que b
  }

  if (i >= b.length) {
    return 1; // b es más corto que a
  }

  const comparison = a[i].localeCompare(b[i]);
  if (comparison !== 0) {
    return comparison;
  }

  return compareStringsSecondary(a, b, i + 1);
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
        clientsBackUp:
          payload && payload.filter((user) => user.rol === "Client"),
        walkers: payload && payload.filter((user) => user.rol === "Walker"),
        walkersBackUp:
          payload && payload.filter((user) => user.rol === "Walker"),
        users: payload,
      };
    case GET_CLIENT_BY_NAME:
      console.log("Reducer - Payload:", payload);
      return {
        ...state,
        clients: payload && payload.filter((user) => user.rol === "Client"),
      };
    case GET_WALKER_BY_NAME:
      console.log("Reducer - Payload:", payload);
      return {
        ...state,
        walkers: payload && payload.filter((user) => user.rol === "Walker"),
      };
    case RESTORE_CLIENTS:
      return {
        ...state,
        clients: state.clientsBackUp,
      };
    case RESTORE_WALKERS:
      return {
        ...state,
        walkers: state.walkersBackUp,
      };
    case ORDER_WALKERS:
      //*Ordenamiento alfabetico (por defecto)
      if (payload === "Alphabetic"){
        return {
        ...state,
        walkersBackUp: state.walkersBackUp.sort((a, b) =>
          compareStringsSecondary(a.name, b.name)
        ),
        walkers: [...state.walkers].sort((a, b) =>
          compareStringsSecondary(a.name, b.name)
        ),
        }
      }
      //*Ordenamiento por calificación
      return {
        ...state,
        walkersBackUp: state.walkersBackUp.sort((a , b) => b.ratingAvg - a.ratingAvg),
        walkers: [...state.walkers].sort((a , b) => b.ratingAvg - a.ratingAvg)
      }
    case FILTER_WALKERS:
      //*Filtros combinados
      if (payload.country && payload.time && payload.cpr) {
        return {
          ...state,
          walkers: state.walkersBackUp.filter(walker => walker.country === payload.country && walker.schedule === payload.time && walker.cpr === payload.cpr && walker.status === true)
        }
      }
      if (payload.country && payload.time) {
        return {
          ...state,
          walkers: state.walkersBackUp.filter(
            (walker) =>
              walker.country === payload.country &&
              walker.schedule === payload.time &&
              walker.status === true
          ),
        };
      }
      if (payload.country && payload.cpr){
        return {
          ...state,
          walkers: state.walkersBackUp.filter(
            (walker) =>
              walker.country === payload.country &&
              walker.cpr === payload.cpr &&
              walker.status === true
          ),
        };
      }
      if (payload.time && payload.cpr){
        return {
          ...state,
          walkers: state.walkersBackUp.filter(
            (walker) =>
              walker.schedule === payload.time &&
              walker.cpr === payload.cpr &&
              walker.status === true
          ),
        };
      }
      //*Filtro para countries
      if (payload.country) {
        return {
          ...state,
          walkers: state.walkersBackUp.filter(
            (walker) =>
              walker.country === payload.country && walker.status === true
          ),
        };
      }
      //*Filtro por horario
      if (payload.time) {
        return {
          ...state,
          walkers: state.walkersBackUp.filter(
            (walker) =>
              walker.schedule === payload.time && walker.status === true
          ),
        };
      }
      //*Filtro por RCP
      if (payload.cpr) {
        return {
          ...state,
          walkers: state.walkersBackUp.filter(
            (walker) => walker.cpr === payload.cpr && walker.status === true
          ),
        };
      }
      //*Filtro por disponibilidad
      return {
        ...state,
        walkers: state.walkersBackUp.filter(
          (walker) => walker.status === payload.status
        ),
      };
    case CREATE_USER:
      return {
        ...state,
        users: [...state.users, payload],
      };
    case EDIT_USER:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.email === payload.email) {
            return payload;
          } else {
            return user;
          }
        }),
      };
    case CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    case CREATE_DOG:
      return {
        ...state,
        dogs: [...state.dogs, payload],
      };
    case SET_WALK:
      return {
        ...state,
        // walk should be an object with all the walk info that get added on different steps

        walk: payload,
      };
    case GET_BY_ID:
      return {
        ...state,
        user: payload,
      };

    case CREATE_WALK:
      return {
        ...state,
        walks: [...state.walks, payload],
      };

    case GET_ALL_WALKS:
      return {
        ...state,
        walks: payload,
      };
    case GET_COUNTRIES:
      return {
        ...state,
        countries: payload,
      };
    case GET_STATES:
      return {
        ...state,
        states: payload,
      };
    case GET_CITIES:
      return {
        ...state,
        cities: payload,
      };

    default:
      return { ...state };
  }
};

export default reducer;
