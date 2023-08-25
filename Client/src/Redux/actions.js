import axios from "axios";
import {
  PRUEBA,
  GET_ALL_USERS,
  GET_CLIENT_BY_NAME,
  GET_WALKER_BY_NAME,
  RESTORE_CLIENTS,
  RESTORE_WALKERS,
  FILTER_WALKERS,
  ORDER_DEFAULT,
  CREATE_USER,
  EDIT_USER,
  CURRENT_USER
} from "./action-types";

const URL = "http://localhost:3001/";

/*
/////////////////////ejemplo funcion asincrona para las store/////////////////////// 
export const asyncFunction = (params) => {
    return function(dispatch){
        fetch(`url`)
      .then((response) => response.json())
      .then((data) => dispatch({type: typeFunction, payload: data}))
    }
} 
*/

export function createUser(user) {
  return async function createUserThunk(dispatch) {
    // dispatch({ type: 'loading' })

    const res = await axios.post(`${URL}user`, user);
    console.log(res.data)

    dispatch({ type: CREATE_USER, payload: res.data })
  }
}


export function editUser(user) {
  return async function editUserThunk(dispatch) {
    // dispatch({ type: 'loading' })

    const res = await axios.put(`${URL}user`, user);
    console.log(res.data)

    dispatch({ type: EDIT_USER, payload: res.data })
  }
}

export function getAll() {
  return async function getUsersThunk(dispatch) {
    // dispatch({ type: 'loading' })

    const res = await axios.get(`${URL}user`);
    console.log(res.data);

    dispatch({ type: GET_ALL_USERS, payload: res.data });
  };
}

export const setCurrentUser = (user) => {
  return {
    type: CURRENT_USER,
    payload: user,
  };
};


export const probarEstado = () => {
  console.log("hola desde actions");
  return { type: PRUEBA };
};

//Trae todos los usuarios, ya sea clients o walkers
export const getAllUsers = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios(URL + "user");
      console.log("Action - Data:", data);
      return dispatch({ type: GET_ALL_USERS, payload: data });
    } catch (error) {
      error.response && error.response.data
        ? alert(error.response.data.error)
        : alert(error.message);
    }
  };
};

//Trae todos los clients por nombre (se autocompleta y no es sensible a mayusculas)
export const getClientByName = (name) => {
  return async (dispatch) => {
    try {
      const nameURL = URL + `user/name/${name}`;
      const { data } = await axios(nameURL);
      console.log("Action - Data:", data);
      return dispatch({ type: GET_CLIENT_BY_NAME, payload: data });
    } catch (error) {
      error.response && error.response.data
        ? alert(error.response.data.error)
        : alert(error.message);
    }
  };
};

//Trae todos los walkers por nombre (se autocompleta y no es sensible a mayusculas)
export const getWalkerByName = (name) => {
  return async (dispatch) => {
    try {
      const nameURL = URL + `user/name/${name}`;
      const { data } = await axios(nameURL);
      console.log("Action - Data:", data);
      return dispatch({ type: GET_WALKER_BY_NAME, payload: data });
    } catch (error) {
      error.response && error.response.data
        ? alert(error.response.data.error)
        : alert(error.message);
    }
  };
};

//Restablece los clients a su backup
export const restoreClients = () => {
  return {
    type: RESTORE_CLIENTS,
  };
};

//Restablece los walkers a su backup
export const restoreWalkers = () => {
  return {
    type: RESTORE_WALKERS,
  };
};

//Ordena por default segun disponibilidad, entre otros
export const orderDefault = () => {
  return {
    type: ORDER_DEFAULT,
  };
};

//Filtra los walkers segun el filter
export const filterWalkers = (filter) => {
  return {
    type: FILTER_WALKERS,
    payload: filter,
  };
};
