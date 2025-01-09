"use client";
import { use, useEffect, useState } from "react";
import { X } from "lucide-react";
import ImageUpload from "../form/ImageUpload";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import toast from "react-hot-toast";
import { useWorkStore } from "@/stores/work.sotre";


const handleWork = async ({
  id,
  data,
  method = "POST",
  setIsLoading,
  reset,
  onClose,
}) => {
  setIsLoading(true);
  try {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("tags", data.tag);
    if (data.image) {
      formData.append("image", data.image);
    }

    const url = id
      ? `${process.env.NEXT_PUBLIC_API_BASE_URL}/works/${id}` // For updating
      : `${process.env.NEXT_PUBLIC_API_BASE_URL}/works`; // For adding

    const response = await fetch(url, {
      method,
      body: formData,
    });
    
    if (!response.ok) {
      throw new Error(`Failed to ${id ? "update" : "add"} work`);
    }

   const res =  await response.json();
   console.log(res)
    toast.success(
      `Work ${id ? "updated" : "added"} successfully`,
      { position: "top-right" }
    );

    if (reset) reset(); // Reset form only if provided
    if (onClose) onClose(); // Close the modal if provided
  } catch (error) {
    console.error(`Error ${id ? "updating" : "adding"} work:`, error);
    toast.error(
      `Error ${id ? "updating" : "adding"} work`,
      { position: "top-right" }
    );
  } finally {
    setIsLoading(false);
  }
};


const workFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  tag: z.string().min(1, "Tag is required"),
  image: z.instanceof(File).refine((file) => file !== null, {
    message: "Image is required",
  }),
});

export default function AddWorkModal({ isOpen, onClose, onAdd }) {
  const { editedItem, setEditedItem } = useWorkStore();
  const form = useForm({
    resolver: editedItem ? undefined : zodResolver(workFormSchema),
    defaultValues: {
      title: editedItem?.title || "",
      tag: "",
      image: null,
    },
  });
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = form;
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
   if(editedItem) {
    await handleWork({
      id: editedItem.id,
      data,
      method: "PATCH",
      setIsLoading,
      reset,
  
      onClose,
    });
   }else{
    await handleWork({
      data,
      setIsLoading,
      reset,
      onClose,
    });
  }}

  useEffect(() => {
    if (editedItem) {
      setValue("title", editedItem.title);
      setValue("tag", editedItem.tags.join(", "));
    } else {
      setValue("title", "");
      setValue("tag", "");
    }
  }, [editedItem]);

  if (!isOpen) return null;
  const handleClose = () => {
    onClose();
    setEditedItem(null);
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">Add New Work</h2>
          <button
            onClick={handleClose}
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
              <ImageUpload name="image" imageUrl={editedItem?.image || null} />
              {errors.image && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.image.message}
                </p>
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
                <p className="mt-1 text-sm text-red-600">
                  {errors.title.message}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="tag"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Tags
                <span className="text-xs text-blue-400 ml-2">
                  ( comma separated for multiple tags e.g. design, web, art)
                </span>
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
                <p className="mt-1 text-sm text-red-600">
                  {errors.tag.message}
                </p>
              )}
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                {isLoading
                  ? editedItem
                    ? "Updating..."
                    : "Adding..."
                  : editedItem
                  ? "Update Work"
                  : "Add Work"}
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
