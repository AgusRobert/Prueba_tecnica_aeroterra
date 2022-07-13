import axios from "axios";
import { DELETE_POI, GET_POI } from "./actiontype";

export function addPoi(payload) {
  return async function (dispacth) {
    await axios.post(`http://localhost:3001/api/pois/addPoi/`, payload);
  };
}
export function deleteFavFilm(payload) {
  return async function (dispatch) {
    try {
      await axios.delete(`http://localhost:3001/api/pois/delPoi`, payload);
      return dispatch({
        type: DELETE_POI,
        payload:payload,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getPois() {
  return async function (dispatch) {
    let json = await axios.get(`http://localhost:3001/api/pois/`);
    try{
      console.log(json.data)
      return dispatch({
        type: GET_POI,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
    
  };
}
