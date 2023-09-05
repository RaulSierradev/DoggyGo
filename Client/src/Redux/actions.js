import axios from "axios";
import {
  PRUEBA,
  GET_ALL_USERS,
  GET_CLIENT_BY_NAME,
  GET_WALKER_BY_NAME,
  RESTORE_CLIENTS,
  RESTORE_WALKERS,
  FILTER_WALKERS,
  ORDER_WALKERS,
  CREATE_USER,
  EDIT_USER,
  CURRENT_USER,
  CREATE_DOG,
  SET_WALK,
  GET_BY_ID,
  GET_ALL_WALKS,
  GET_COUNTRIES,
  GET_STATES,
  GET_CITIES,
  CREATE_WALK
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
    console.log(res.data);

    dispatch({ type: CREATE_USER, payload: res.data });
  };
}

export function createDog(dog) {
  return async function createDogThunk(dispatch) {
    // dispatch({ type: 'loading' })

    const res = await axios.post(`${URL}dog/add`, dog);
    console.log(res.data);

    dispatch({ type: CREATE_DOG, payload: res.data });
  };
}

export function createWalk() {
  return async function createWalkThunk(dispatch, getState) {
    // dispatch({ type: 'loading' })
    const { walk } = getState();  // Get the updated walk from the state

    const res = await axios.post(`${URL}walk`, walk);
    console.log(res.data);

    dispatch({ type: CREATE_WALK, payload: res.data });

  };
}

export function setWalk(walk) {
  window.localStorage.setItem("user", JSON.stringify(walk));
  return {
    type: SET_WALK,
    payload: walk,
  };
}

export function editUser(user) {
  return async function editUserThunk(dispatch) {
    // dispatch({ type: 'loading' })

    const res = await axios.put(`${URL}user`, user);
    console.log(res.data);

    dispatch({ type: EDIT_USER, payload: res.data });
  };
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

//Ordena los walkers segun el order
export const orderWalkers = (order) => {
  return {
    type: ORDER_WALKERS,
    payload: order,
  };
};

//Filtra los walkers segun el filter
export const filterWalkers = (filter) => {
  return {
    type: FILTER_WALKERS,
    payload: filter,
  };
};

export const getById = (id) => {
  const endpoint = `http://localhost:3001/user/id/${id}`;
  return async (dispatch) => {
    try {
      const { data } = await axios(endpoint);
      return dispatch({
        type: GET_BY_ID,
        payload: data,
      });
    } catch (error) {
      return { error: `No hay un usuario con el siguiente ID: "${id}"` };
    }
  };
};

export const getAllWalks = () => {
  const endpoint = "http://localhost:3001/walk";
  return async (dispatch) => {
    try {
      const { data } = await axios(endpoint);
      return dispatch({
        type: GET_ALL_WALKS,
        payload: data,
      });
    } catch (error) {
      return { error: error.message };
    }
  };
};

export const getCountries = ()=>{
  const endpoint = 'http://localhost:3001/location/countries/'
  return async (dispatch) => {
    try {
      const { data } = await axios(endpoint);
      return dispatch({
        type: GET_COUNTRIES,
        payload: data,
      });
    } catch (error) {
      return { error: error.message };
    }
  };
}

export const getStates = (sta) => {
  const endpoint = `http://localhost:3001/location/state/${sta}`;
  return async (dispatch) => {
    try {
      const { data } = await axios(endpoint);
      return dispatch({
        type: GET_STATES,
        payload: data,
      });
    } catch (error) {
      return { error: error.message };
    }
  };
};
export const getCities = (sta, co) => {
  const endpoint = `http://localhost:3001/location/countries/${co}/states/${sta}/cities`;
  return async (dispatch) => {
    try {
      const { data } = await axios(endpoint);
      return dispatch({
        type: GET_CITIES,
        payload: data,
      });
    } catch (error) {
      return { error: error.message };
    }
  };
};
