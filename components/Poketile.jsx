import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const Poketile = (props) => {
  const [pokemon, setPokemon] = useState(null);


  const router = useRouter();

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const response = await fetch(props.url);
        const result = await response.json();
        setPokemon(result);
      } catch (error) {
        console.error('Error fetching Pokémon:', error);
      }
    }
    fetchPokemon();
  }, []);

  return (
    <div onClick={() => router.push(`/pokemon?name=${pokemon.name.trim()}`)} className={`${props.dark ? 'bg-gray-900' : 'bg-white'} w-80 h-100 xs:h-100 flex flex-col items-center justify-baseline rounded-2xl cursor-pointer shadow-md transition ease-in duration-100 hover:-translate-y-2 hover:shadow-xl`}>
      <div>
        {pokemon ? pokemon.name : 'Loading...'}
      </div>
      <div>
        {pokemon && pokemon.sprites && (
          <img width="150" src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
      </div>
    </div>
  );
};

export default Poketile;
