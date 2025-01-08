"use client";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import ImageUpload from "../form/ImageUpload";
import toast from "react-hot-toast";
import { useFeedbackStore } from "@/stores/feedback.stores";

/**
 * @typedef {Object} FeedbackModalProps
 * @property {boolean} isOpen - Whether the modal is open
 * @property {() => void} onClose - Function to call when the modal is closed
 * @property {function} onAdd - Function to call when a new feedback item is added
 */

/**
 * AddFeedbackModal component allows users to add feedback with a logo, company name, and description.
 *
 * @param {FeedbackModalProps} props - The properties for the AddFeedbackModal component.
 * @returns {JSX.Element|null} The rendered component or null if not open.
 */

const feedbackSchema = z.object({
  logoName: z.string().min(1, "Logo Name is required"),
  companyName: z.string().min(1, "Company Name is required"),
  feedback: z.string().min(1, "feedback is required"),
  image: z.instanceof(File).refine((file) => file !== null, {
    message: "Image is required",
  }),
});

export default function FeedbackModal({ isOpen, onClose, onAdd }) {
  const { editedItem, setEditedItem } = useFeedbackStore();

  const formMethods = useForm({
    // resolver: zodResolver(feedbackSchema),
    defaultValues: {
      logoName: editedItem ? editedItem.logoName || "" : "",
      companyName: editedItem ? editedItem.companyName || "" : "",
      feedback: editedItem ? editedItem.feedback || "" : "",
      image: editedItem ? editedItem.image || null : null,
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = formMethods;

  const [isLoading, setIsLoading] = useState(false);
  console.log(editedItem, "from modal");
  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("logoName", data.logoName);
      formData.append("companyName", data.companyName);
      formData.append("feedback", data.feedback);
      formData.append("image", data.image);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/feedbacks`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add feedback");
      }

      const result = await response.json();
      toast.success("Feedback added successfully", { position: "top-right" });

      onAdd(result);
      reset();
    } catch (error) {
      console.error("Error adding feedback:", error);
      // Add error handling UI if needed
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (editedItem) {
      reset({
        logoName: editedItem.logoName || "",
        companyName: editedItem.companyName || "",
        feedback: editedItem.feedback || "",
        image: editedItem.image || null,
      });
    } else {
      reset({
        logoName: "",
        companyName: "",
        feedback: "",
        image: null,
      });
    }
  }, [editedItem, reset]);

  const handleClose = () => {
    onClose();

    setEditedItem(null);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center mt-10 z-50 p-4 overflow-y-scroll">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-y-scroll">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">
            Add New Feedback {editedItem?.logoName}
          </h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-500"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <FormProvider {...formMethods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-6 overflow-y-auto"
          >
            <div className="mb-4">
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Upload Logo
              </label>
              <ImageUpload name="image" />
              {errors.image && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.image.message}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="logoName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Logo Name
              </label>
              <input
                type="text"
                id="logoName"
                {...register("logoName")}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.logoName && (
                <p className="text-red-500 text-sm">
                  {errors.logoName.message}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="companyName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                {...register("companyName")}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.companyName && (
                <p className="text-red-500 text-sm">
                  {errors.companyName.message}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="feedback"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Description
              </label>
              <textarea
                id="feedback"
                {...register("feedback")}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                rows={3}
              ></textarea>
              {errors.description && (
                <p className="text-red-500 text-sm">
                  {errors.feedback.message}
                </p>
              )}
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                {isLoading ? "Adding..." : "Add Feedback"}
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
