import { useEffect, useState } from "react";
import { PokemonCards } from "./PokemonCards";

export const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [searchType, setsearchType] = useState("");
  const API = "https://pokeapi.co/api/v2/pokemon?limit=200";
  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      const details = data.results.map(async (curPokemon) => {
        const res = await fetch(curPokemon.url);
        const data = res.json();
        return data;
      });

      const detailedResponse = await Promise.all(details);
      console.log(detailedResponse);
      setPokemon(detailedResponse);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const searchData = pokemon.filter((curPokemon) =>
    curPokemon.name.toUpperCase().includes(search.toUpperCase())
  );

  const searchData1 = pokemon.filter((curPokemon) =>
    curPokemon.types
      .map((curType) => curType.type.name)
      .join(", ")
      .toUpperCase()
      .includes(search.toUpperCase())
  );

  const ac = searchType == "type" ? searchData1 : searchData;

  if (loading) {
    return (
      <h1 className="font-bold text-[40px] font-mono text-center">Loading</h1>
    );
  }
  if (error) {
    return (
      <h1 className="font-bold text-[40px] font-mono text-center">
        {error.message}
      </h1>
    );
  }

  return (
    <section className="bg-blue-100">
      <div className="flex flex-col items-center fixed bg-blue-100 w-[100vw] shadow-lg">
        <h1 className="font-bold text-[40px] font-mono">Pokemon Cards</h1>
        <div className="flex flex-col justify-center">
          <label htmlFor="types">Search by:</label>

          <select className="outline-none"
            name="types"
            id="types"
            value={searchType}
            onChange={(e) => {
              setsearchType(e.target.value);
            }}
          >
            <option value="name" selected>
              NAME
            </option>
            <option value="type">TYPE</option>
          </select>

          <input
            type="search"
            name=""
            id=""
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-1 m-3 sm:w-[15rem] outline-none border-b-2 border-black"
          />
        </div>
      </div>
      <ul className="pt-56 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-content-center gap-6 m-2">
        {ac.map((curPokemon) => {
          return (
            <>
              <PokemonCards key={curPokemon.id} pokemonDetails={curPokemon} />
            </>
          );
        })}
      </ul>
    </section>
  );
};
