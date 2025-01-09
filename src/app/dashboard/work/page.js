'use client'

import { useEffect, useState } from 'react'

import { Plus } from 'lucide-react'
import WorkTable from '@/components/table/WorkTable'
import AddWorkModal from '@/components/modal/WorkModal'
import TableSkeleton from '@/components/skeleton/TableSkeleton'
import { useModalStore } from '@/stores/modal.store'



export default function WorkPage() {
  const { open , isOpen , close} = useModalStore()
  const [isLoading, setIsLoading] = useState(true)
  const [workItems, setWorkItems] = useState([])

  const fetchWorks = async () => {
    setIsLoading(true)
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/works`)
    const data = await response.json()
    setWorkItems(data.data || [])
    setIsLoading(false)
    console.log(data)
  }

  useEffect(() => {
    fetchWorks()
  }, [])

  const [isModalOpen, setIsModalOpen] = useState(false)


  const addWorkItem = (newItem) => {
    setWorkItems([...workItems, { ...newItem, id: workItems.length + 1 }])
    setIsModalOpen(false)
  }

  const deleteWorkItem = (id) => {
    setWorkItems(workItems.filter(item => item.id !== id))
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Work</h1>
        <button
          onClick={() => open()}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Work
        </button>
      </div>
      {
        isLoading ?
          <TableSkeleton /> :
          <WorkTable workItems={workItems} open={open} onDelete={deleteWorkItem} />

      }
      <AddWorkModal isOpen={isOpen} onClose={close} onAdd={addWorkItem} />
    </div>
  )
}

