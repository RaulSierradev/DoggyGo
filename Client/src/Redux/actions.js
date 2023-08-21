import axios from "axios";
import { PRUEBA, GET_ALL_USERS, GET_CLIENT_BY_NAME, GET_WALKER_BY_NAME, RESTORE_CLIENTS, RESTORE_WALKERS } from "./action-types";

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

export const probarEstado = () => {
  console.log("hola desde actions");
  return { type: PRUEBA };
};

export const getAllUsers = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios(URL + "user");
      console.log("Action - Data:", data);
      return dispatch({ type: GET_ALL_USERS, payload: data });
    } catch (error) {
      error.response && error.response.data
        ? alert(error.response.data)
        : alert(error.message);
    }
  };
};

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

export const restoreClients = ()=>{
  return {
    type: RESTORE_CLIENTS,
  }
}

export const restoreWalkers = ()=>{
  return {
    type: RESTORE_WALKERS,
  }
}