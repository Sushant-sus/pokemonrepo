import { useEffect, useState } from "react"
import { getPokemonData, pokemonimageurl } from "../Api";
import axios from "axios";
const PokemonList = () => {
    const [pokemonData, setPokemonData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [renderedPokemonList, setRenderedPokemonList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [pokemonname, setpokemonname] = useState("");

    const fetchData = async (page) => {
        try {
            const data = await getPokemonData(page, 60);
            if (pokemonname !== "") {
                const filteredData = data.filter(pokemon => pokemon.name.toLowerCase().includes(pokemonname.toLowerCase()));
                setPokemonData(filteredData);
                setTotalPages(Math.ceil(filteredData.count / 10));
            }
            else {
                setPokemonData(data);
                setTotalPages(Math.ceil(data.count / 10));

            }
            const list = await renderPokemonList();
            setRenderedPokemonList(list);
        } catch (error) {
            console.error('Error fetching Pokemon data:', error);
        } finally {
            setLoading(false);
        }
    };
    async function fetchPokemonType(url) {
        try {
            const response = await axios.get(url);
            return response;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error; // Re-throw the error if needed
        }
    }

    const renderPokemonList = async () => {
        try {
            const promises = pokemonData.map(async (pokemon, index) => {
                index = index + 1;
                const datafetch = await fetchPokemonType(pokemon.url);
                const abilitiesList = datafetch.data.types.map((type, index) => (
                    <h3 key={index} className="species-title">{type.type.name}</h3>
                ));

                return (
                    <div className="col-12 col-lg-12 col-md-12 col-sm-12">
                        <div className="p-card fire">
                            <div className="character-area">
                                <img className="character" src={pokemonimageurl + "/" + index + ".svg"} alt="" />
                            </div>
                            <div className="details">
                                <span className="pokemanname">{pokemon.name}</span>
                                <h3>Type</h3>
                                {abilitiesList}
                            </div>
                        </div>
                    </div>

                );

            });
            const renderedList = await Promise.all(promises);

            return renderedList;
        } catch (error) {
            console.error('Error rendering Pokémon list:', error);
            return [];
        }
    };
    async function setPokemonNameOnInput(e) {
        setpokemonname(e.target.value);
    }
    async function submitsearch() {
        fetchData();
    }
    useEffect(() => {
        fetchData(currentPage);
    }, fetchData[currentPage]);

    return (
        <>
            <div className="content-header">
                <div className="logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2000px-International_Pok%C3%A9mon_logo.svg.png" alt="" />
                </div>
                <div className="searchPokemon">
                    <input
                        type="text"
                        placeholder="Search Pokemon"
                        value={pokemonname}
                        onChange={setPokemonNameOnInput}
                    />
                    <button className="button-search">
                        <div className="button-content" onClick={submitsearch}>
                            Search
                        </div>
                    </button>
                </div>
            </div>
            <div className="content-main">
                <div className="pokemons">
                    {pokemonData.length > 0 && <>{renderedPokemonList}</>}
                </div>
            </div>
        </>
    );
};

export default PokemonList;

