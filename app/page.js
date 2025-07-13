'use client'
import React from 'react'
import PokeTile from '../components/Poketile'
import Searchbar from '../components/Searchbar'
import { useState, useEffect } from 'react'
import { useRouter,useSearchParams } from 'next/navigation'
import { ToastContainer,toast } from 'react-toastify'

const page = () => {
  const router = useRouter();

  const handleSearch = (input) => {
    if(!input || input.trim() === '') {
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
    }
    else{
      router.push(`/pokemon?name=${input}`);
    }

  }


  const tiles = Array.from({ length: 8 }, (_, index) => index);


  return (
    <div className={`flex gap-5 flex-col w-full h-screen bg-gray-100 overflow-y-auto hidescroll overflow-x-auto`}>
      <ToastContainer/>
      <div className='flex sticky top-0 z-10 justify-center'>
        <Searchbar onSearch={handleSearch}/>     
      </div>

      <div className='flex flex-row h-svh justify-center px-2'>
        <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
          {
            tiles.map((_, index) => (
              <PokeTile key={tiles[index]} name={index}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default page