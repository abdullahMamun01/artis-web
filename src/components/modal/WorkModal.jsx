"use client";
import { useState } from "react";
import { X } from "lucide-react";
import ImageUpload from "../form/ImageUpload";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import toast from "react-hot-toast";

const workFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  tag: z.string().min(1, "Tag is required"),
  image: z.instanceof(File).refine((file) => file !== null, {
    message: "Image is required",
  }),
});

export default function AddWorkModal({ isOpen, onClose, onAdd }) {
 const form  = useForm({
  resolver :  zodResolver(workFormSchema),
    defaultValues: {
      title: "",
      tag: "",
      image: null,
    },
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = form 
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      console.log(data);
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('tags', data.tag);
      formData.append('image', data.image);
      console.log('reach');
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/works`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to add work');
      }

      await response.json();
      toast.success('Work added successfully', { position: 'top-right' });
      reset(); // Reset form
      onAdd?.(); // Call the onAdd callback if provided
      onClose(); // Close the modal
      console.log(data);
    } catch (error) {
      console.error('Error adding work:', error);
      // You might want to add error handling UI here
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">Add New Work</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <FormProvider {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="p-6">
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Upload Image
            </label>
            <ImageUpload name="image" />
            {errors.image && (
              <p className="mt-1 text-sm text-red-600">{errors.image.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Title
            </label>
            <input
              {...register("title")}
              type="text"
              id="title"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.title && (
              <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="tag"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Tag
            </label>
            <input
              {...register("tag")}
              type="text"
              id="tag"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter tags separated by commas"
            />
            <p className="mt-1 text-xs text-gray-500">
              Enter multiple tags separated by commas (e.g., design, web, art)
            </p>
            {errors.tag && (
              <p className="mt-1 text-sm text-red-600">{errors.tag.message}</p>
            )}
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
            {isLoading ? 'Adding...' : 'Add Work'}
            </button>
          </div>
        </form>
        </FormProvider>
      </div>
    </div>
  );
}
