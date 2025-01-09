'use client'
import { useFeedbackStore } from '@/stores/feedback.stores'
import { useModalStore } from '@/stores/modal.store';
import { Edit, Trash2 } from 'lucide-react'
import DeleteButton from '../DeleteButton';
/**
 * A table component for displaying feedback items.
 * @param {FeedbackItem[]} feedbackItems - An array of feedback items
 * @param {(id: number) => void} onDelete - A function that will be called when the delete button is clicked
 * @returns {React.ReactElement}
 */



export default function FeedbackTable({ feedbackItems, onDelete }) {
  const { setEditedItem, editedItem } = useFeedbackStore();
  const {open} = useModalStore()
  const handleEdit = (item) => {
    setEditedItem(item)
    open()
  }
  
  
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Logo</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Logo Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {feedbackItems.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <img src={item.logo} alt={item.logoName} className="h-10 w-10 rounded-full" />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{item.logoName}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.companyName}</td>
              <td className="px-6 py-4 line-clamp-1">{item.feedback}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button onClick={() => handleEdit(item)} className="text-indigo-600 hover:text-indigo-900 mr-4">
                  <Edit className="w-5 h-5" />
                </button>
                <DeleteButton id={item.id} section="feedback" />  
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

