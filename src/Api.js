import axios from 'axios';

const baseurl = "https://pokeapi.co/api/v2/";
const pokemonendpoint = "pokemon";
export const pokemonimageurl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";

export const getPokemonData = async (offset, limit) => {
  try {
    const response = await axios.get(`${baseurl}${pokemonendpoint}?offset=${offset}&limit=${limit}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};





 
