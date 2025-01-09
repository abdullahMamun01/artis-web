"use client";
import { useEffect, useState } from "react";
import { Edit } from "lucide-react";
import { useModalStore } from "@/stores/modal.store";
import HeroModal from "../modal/HeroModal";
import { set } from "zod";
import TableSkeleton from "../skeleton/TableSkeleton";

export default function HeroTable() {
  const [data, setData] = useState([]);
  const [editedItem, setEditedItem] = useState(null);
  const { isOpen, open, close } = useModalStore();
  const handleEdit = (item) => {
    // setIsOpen(true)
    console.log(item);
    setEditedItem(item);
    open();
  };
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchHeroData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/hero`
        );
        const data = await response.json();
        setData(data.data); // Assuming setEditedItem is used to store the fetched data
      } catch (error) {
        console.error("Error fetching hero data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHeroData();
  }, []);

  console.log(data, " from hero table");
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">
        Hero Section Content
      </h1>
      <div className="overflow-x-auto">
        {isLoading ? (
          <TableSkeleton />
        ) : (
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase">
                  Title
                </th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase">
                  Subtitle
                </th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase">
                  Stats
                </th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="even:bg-gray-50 hover:bg-gray-100 transition duration-150">
                <td className="px-6 py-4 text-sm text-gray-800 font-medium">
                 {data.title}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800">
                  {data.subtitle}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800">
                  <ul className="list-disc list-inside">
                    {data?.stats?.map((stat) => (
                      <li key={stat.label}>
                        {stat.label}: {stat.count}
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="px-6 py-4 text-sm font-medium">
                  <button
                    onClick={() =>
                      handleEdit({ ...data, id: data.id })
                    }
                    className="text-indigo-600 hover:text-indigo-900 flex items-center"
                  >
                    <Edit className="w-5 h-5 mr-1" />
                    Edit
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
      {isOpen && (
        <HeroModal editedItem={editedItem} isOpen={isOpen} onClose={close} />
      )}
    </div>
  );
}
