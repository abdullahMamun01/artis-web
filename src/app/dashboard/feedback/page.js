'use client'

import { useState } from 'react'

import { Plus } from 'lucide-react'
import FeedbackTable from '@/components/table/FeedbackTable'
import FeedbackModal from '@/components/modal/FeedbackModal'
import { useEffect } from 'react';
import { useFeedbackStore } from '@/stores/feedback.stores'
import { useModalStore } from '@/stores/modal.store'



export default function FeedbackPage() {
    const {editedItem} = useFeedbackStore()
    const [isLoading, setIsLoading] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(editedItem ? true : false)
    const [feedbackItems, setFeedbackItems] = useState([
    ])
    
    const {isOpen , open, close } = useModalStore()
      

    useEffect(() => {
        const fetchFeedback = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/feedbacks`);
                if (!response.ok) {
                    throw new Error('Failed to fetch feedback');
                }
                const data = await response.json();
          
                setFeedbackItems(data?.data || []);
            } catch (error) {
                console.error('Error fetching feedback:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchFeedback();
    }, []);

    useEffect(() => {
        if (editedItem) {
            setIsModalOpen(true)
        }
    }, [editedItem])

    const addFeedbackItem = (newItem) => {
        setFeedbackItems([...feedbackItems, { ...newItem, id: feedbackItems.length + 1 }])
        setIsModalOpen(false)
    }

    const deleteFeedbackItem = (id) => {
        setFeedbackItems(feedbackItems.filter(item => item.id !== id))
    }



    return (
        <div className="container mx-auto px-4 py-20">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold text-gray-900">Feedback   {editedItem?.logoName}</h1>
               
                <button
                    onClick={() => open()}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center"
                >
                    <Plus className="w-5 h-5 mr-2" />
                    Add Feedback
                </button>
            </div>
            {isLoading ? (
                <div className="animate-pulse">
                    <div className="h-6 bg-gray-200 rounded-md"></div>
                    <div className="mt-4 grid grid-cols-1 gap-4">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="h-16 bg-gray-200 rounded-md"></div>
                        ))}
                    </div>
                </div>
            )
                :
                <FeedbackTable feedbackItems={feedbackItems} onDelete={deleteFeedbackItem} />
            }
            <FeedbackModal isOpen={isOpen}  onClose={close} onAdd={addFeedbackItem} />

        </div>
    )
}

