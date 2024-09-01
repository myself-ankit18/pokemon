export const PokemonCards = (props) => {
  return (
    <section className="flex justify-center items-center">
      <div className="flex w-[15rem] h-[20rem] justify-center items-center flex-col shadow-lg bg-gray-50">
        <img
          src={props.pokemonDetails.sprites.other.dream_world.front_default}
          alt=""
          className=" w-[60%] h-[8rem] p-2 "
        />
        <h1 className="font-extrabold">
          {props.pokemonDetails.name.toUpperCase()}
        </h1>
        <div className="px-4 py-1 bg-green-500 rounded-2xl text-white font-semibold m-3">
          {props.pokemonDetails.types.map((curType) => curType.type.name).join(", ").toUpperCase()}
        </div>
        <div className="text-[11px] flex flex-col items-center">
          <div className="flex m-2 gap-2">
            <span className="w-16 pl-2">
              <span className="font-bold">Height:</span>{" "}
              {props.pokemonDetails.height}
            </span>
            <span className="w-16">
              <span className="font-bold">Weight:</span>{" "}
              {props.pokemonDetails.weight}
            </span>
            <span className="w-16">
              <span className="font-bold">Speed:</span>{" "}
              {props.pokemonDetails.stats[5].base_stat}
            </span>
          </div>
          <div className="flex m-2 gap-2">
            <span className="w-16 pl-2">
              <span className="font-bold">Exp:</span>{" "}
              {props.pokemonDetails.base_experience}
            </span>
            <span className="w-16">
              <span className="font-bold">Attack:</span>{" "}
              {props.pokemonDetails.stats[1].base_stat}
            </span>
            <span className="w-16">
              <span className="font-bold">Defense:</span>{" "}
              {props.pokemonDetails.stats[2].base_stat}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
