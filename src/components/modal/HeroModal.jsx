"use client";
import { X } from "lucide-react";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function HeroModal({ isOpen, onClose, onAdd, editedItem }) {
  const formMethods = useForm({
    defaultValues: {
      title: editedItem?.title || "",
      subtitle: editedItem?.subtitle || "",
      stats: editedItem?.stats || [{ name: "", value: "" }],
    },
  });

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = formMethods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "stats",
  });
  console.log(fields);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    const values = Object.values(data).filter(Boolean);
    if (values.length > 0) {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/hero/${editedItem.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update hero data");
      }

      const result = await response.json();
      console.log(result);
      toast.success('Hero data updated successfully' , {position: "top-right"});
      reset();
      setIsLoading(false);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 w-full">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">
            Update hero content
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-6">
          {/* Title Field */}
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Title
            </label>
            <input
              {...register("title", { required: "Title is required" })}
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

          {/* Subtitle Field */}
          <div className="mb-4">
            <label
              htmlFor="subtitle"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Subtitle
            </label>
            <input
              {...register("subtitle")}
              type="text"
              id="subtitle"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Stats Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Stats
            </label>
            <div className="space-y-2">
              {fields.map((field, index) => (
                <div key={field.id} className="flex items-center space-x-4">
                  <input
                    {...register(`stats.${index}.name`, { required: true })}
                    placeholder="Name"
                    value={field.label}
                    className="border rounded px-2 py-1"
                  />
                  <input
                    {...register(`stats.${index}.value`, { required: true })}
                    placeholder="Value"
                    value={field.count}
                    className="border rounded px-2 py-1"
                  />
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    -
                  </button>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => append({ name: "", value: "" })}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
            >
              +
            </button>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              {isLoading ? "Loading..." : "Update"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
