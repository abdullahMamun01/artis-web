'use client'
import HeroTable from '@/components/table/HeroTable'
import React from 'react'

export default function page() {
  return (
    <div className='py-10 px-6'>
      <h1 className='text-3xl'>Dashboard</h1>

      <div>
        <HeroTable/>
      </div>
    </div>
  )
}
