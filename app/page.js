'use client'
import React from 'react'
import PokeTile from '../components/Poketile'
import Searchbar from '../components/Searchbar'

const page = () => {

  const tiles = Array.from({ length: 8 }, (_, index) => index);
  console.log(tiles);
  return (
    <div className='flex gap-5 flex-col w-full h-screen bg-gray-100 overflow-y-auto hidescroll overflow-x-auto'>
      <div className='flex sticky top-0 z-10 justify-center'>
        <Searchbar />
      </div>
      <div className='flex flex-row h-svh justify-center px-2'>
        <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
          {
            tiles.map((_, index) => (
              <PokeTile key={tiles[index]} name={index} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default page