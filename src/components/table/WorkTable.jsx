'use client'
import { useWorkStore } from '@/stores/work.sotre';
import { Edit, Trash2 } from 'lucide-react'
import DeleteButton from '../DeleteButton';


/**
 * @typedef {Object} WorkItem
 * @property {number} id
 * @property {string} title
 * @property {string} description
 * @property {string} image
 * @property {string[]} tags
 */

/**
 * @param {{workItems: WorkItem[], onDelete: (id: number) => void}} props
 */

export default function WorkTable({ workItems, onDelete , open}) {
  const {setEditedItem, editedItem} = useWorkStore();
  const handleEdit = (item) => {
    setEditedItem(item);
    open();
    console.log(editedItem)
  }
  
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tag</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {workItems.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <img src={item.image} alt={item.title} className="h-10 w-10 rounded-full" />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{item.title}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {item.tags.map((tag) => (
                  <span key={tag} className="px-2 inline-flex text-xs ml-2 leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    {tag}
                  </span>
                ))}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button onClick={() => handleEdit(item)} className="text-indigo-600 hover:text-indigo-900 mr-4">
                  <Edit className="w-5 h-5" />
                </button>
               <DeleteButton id={item.id} section="work"/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

