import axios from 'axios';
import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from './action_types';

const URL_BASE = 'http://localhost:3001/rickandmorty'

export const addFav =  (character) => {
    return async function(dispatch){
        try {
            const { data } = await axios.post(`${URL_BASE}/fav`, character)
            return dispatch({
                type:ADD_FAV,
                payload: data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const removeFav = (id) => {
    return async function(dispatch){
       try {
        const { data } = await  axios.delete(`${URL_BASE}/fav/${id}`)
        return dispatch({
            type:REMOVE_FAV,
            payload:data
        })
       } catch (error) {
            console.log(error);
       }
       
    }
}

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload:gender
    }
}

export const orderCards = (payload) => ({
    type:ORDER,
    payload
})