'use client'
import React, { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

const Pokemon = () => {

    const searchParams = useSearchParams();
    const name = searchParams.get('name');

    useEffect(() => {
        async function fetchPokemon() {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
            const result = await response.json();
            console.log(result)
        }
        fetchPokemon() 
    })

    return (
        <div>{name}</div>
    )
}

export default Pokemon