import axios from "axios";
import { PRUEBA, GET_WALKERS, GET_ALL_USERS, GET_USERS } from "./action-types";

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

export const getUsers = ()=>{
    return {
        type: GET_USERS,
    }
}

export const getWalkers = ()=>{
    return {
        type: GET_WALKERS,
    }
}
