import { createActions, handleActions } from "redux-actions";


const initialState = [
  {
    id:0,
    name:""
  }
];

export const GET_POKEMONS = "pokemons/GET_POKEMONS";

const actions = createActions({
  [GET_POKEMONS] : ()=>{}
});

console.log('pokemonsACtions : ' , actions);

const pokemonReducer = handleActions({
  [GET_POKEMONS] : (state, {payload}) =>{
    console.log("payload : " +payload)
    return payload;
  }
},initialState);

export default pokemonReducer;