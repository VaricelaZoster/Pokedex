'use client'
import React, { useState, useEffect } from 'react'
import PokeTile from '../components/Poketile'
import Searchbar from '../components/Searchbar'
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify'

const Page = () => {
  const router = useRouter();
  const [pokeNames, setPokeNames] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleSearch = (input) => {
    if (!input || input.trim() === '') {
      toast.error('Please enter a valid search term', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      return;
    } else {
      router.push(`/pokemon?name=${input.trim()}`);
    }
  };

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=8`);
        const result = await response.json();
        console.log(result.results);
        setPokeNames(result.results);
      } catch (error) {
        console.error("Failed to fetch Pokémon:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPokemon();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className={`flex gap-5 flex-col w-full h-screen bg-gray-100 overflow-y-auto hidescroll overflow-x-auto`}>
      <ToastContainer />
      <div className='flex sticky top-0 z-10 justify-center'>
        <Searchbar onSearch={handleSearch} />
      </div>

      <div className='flex flex-row justify-center px-2'>
        <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {
            pokeNames.map((pokemon) => (
              <PokeTile key={pokemon.name} name={pokemon.name} url = {pokemon.url}/>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Page;
