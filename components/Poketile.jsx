import React from 'react'

const Poketile = (props) => {
  return (
    <div className={`${props.dark ? 'bg-gray-900' : 'bg-white'} w-80 h-100 xs:h-100 flex justify-center rounded-2xl cursor-pointer shadow-md transition ease-in duration-100 hover:-translate-y-2 hover:shadow-xl`}>{props.name}</div>
  )
}

export default Poketile