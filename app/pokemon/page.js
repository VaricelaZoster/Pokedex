'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation'

const page = () => {

    const searchParams = useSearchParams();
    const name = searchParams.get('name');

  return (
    <div>{name}</div>
  )
}

export default page