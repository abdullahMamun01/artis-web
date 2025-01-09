import DashboardSidebar from '@/components/DashboardLayout'
import ProtectedRoute from '@/components/ProtectedRoute'
import React from 'react'

export default function DashboardLayout({ children }) {
  return (
    <ProtectedRoute>

      <div className='grid grid-cols-12'>
        <div className='col-span-2'>
          <DashboardSidebar />
        </div>
        <div className='col-span-10'>
          {children}
        </div>
      </div>
    </ProtectedRoute>
  )
}
