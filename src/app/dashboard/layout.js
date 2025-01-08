import DashboardSidebar from '@/components/DashboardLayout'
import React from 'react'

export default function DashboardLayout({ children }) {
  return (
    <div className='grid grid-cols-12'>
        <div className='col-span-2'>
            <DashboardSidebar/>
        </div>
        <div className='col-span-10'>
            {children}
        </div>
    </div>
  )
}
