'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import { Trash2, X } from "lucide-react";
import toast from "react-hot-toast";

export default function DeleteButton({ id, section }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalConfirm = async () => {
    setIsLoading(true);
    try {
      const url = section === "work"
        ? `${process.env.NEXT_PUBLIC_API_BASE_URL}/works/${id}`
        : `${process.env.NEXT_PUBLIC_API_BASE_URL}/feedbacks/${id}`;
      
      const response = await fetch(url, {
        method: "DELETE",
      });
      

      if (!response.ok) {
        throw new Error("Failed to delete");
      }

       await response.json();
      toast.success('Item deleted successfully' , {position: "top-right"});

    } catch (error) {
      console.error("Error deleting:", error);
    } finally {
      setIsLoading(false);
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <button
        onClick={handleDelete}
        className="text-red-500 hover:text-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
      >
        <Trash2 className="w-5 h-5" />
      </button>
      {(isModalOpen || isLoading) && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg p-8 w-full max-w-md"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">
                Are you sure you want to delete this {section}?
              </h2>
              <X onClick={handleModalClose} className="w-5 h-5" />
            </div>
            <p className="text-gray-500 mb-8">
              This action is irreversible. Please make sure you want to delete
              this {section} before confirming.
            </p>
            <div className="flex items-center justify-end gap-4">
              <button
                onClick={handleModalClose}
                className="text-gray-500 hover:text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
              >
                Cancel
              </button>
              <button
                onClick={handleModalConfirm}
                disabled={isLoading}
                className={`${
                  isLoading ? "bg-red-300" : "bg-red-500 hover:bg-red-700"
                } text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50`}
              >
                {isLoading ? "Deleting..." : "Delete"}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

