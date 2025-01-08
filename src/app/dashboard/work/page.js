'use client'

import { useState } from 'react'

import { Plus } from 'lucide-react'
import WorkTable from '@/components/table/WorkTable'
import AddWorkModal from '@/components/modal/WorkModal'



export default function WorkPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [workItems, setWorkItems] = useState([
    { id: 1, image: '/placeholder.svg?height=50&width=50', title: 'Project A', tag: 'Web Design' },
    { id: 2, image: '/placeholder.svg?height=50&width=50', title: 'Project B', tag: 'Mobile App' },
    { id: 3, image: '/placeholder.svg?height=50&width=50', title: 'Project C', tag: 'Branding' },
  ])

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
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Work
        </button>
      </div>
      <WorkTable workItems={workItems} onDelete={deleteWorkItem} />
      <AddWorkModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onAdd={addWorkItem} />
    </div>
  )
}

