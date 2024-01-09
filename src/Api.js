

import axios from 'axios'
let baseurl = "https://pokeapi.co/api/v2/";
let getpokemondata = baseurl + "pokemon";
let getpokemondataimage = baseurl + "pokemon";
export const pokemonimageurl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";

 

export const getPokemonData = async (Offset,limit) => {
  try { 
      const response = await axios.get(getpokemondata + "?offset="+Offset+"&limit=" + limit);
      return response.data.results;
     
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error to handle it in the component
  }
};

 

 
