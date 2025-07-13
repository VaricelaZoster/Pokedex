import React from 'react'
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'
import { useState } from 'react'

const Searchbar = ({onSearch}) => {

    const [input, setInput] = useState('');

  return (
    <div className='flex w-[80%] justify-between items-center px-2'>
        <input value = {input} onChange={(e) => setInput(e.target.value)} className='flex w-full h-10.5 border-1 ml-0 outline-none border-gray-400 bg-gray-200 m-2 rounded-lg p-2 ' type="text" placeholder="Search" />
        <button onClick={() => onSearch(input)} className='flex w-10.5 rounded-lg border-1 text-gray-600 border-gray-400 bg-gray-200 p-2 cursor-pointer transition ease-in hover:bg-gray-300'><MagnifyingGlassIcon/></button>
    </div>
  )
}

export default Searchbar


