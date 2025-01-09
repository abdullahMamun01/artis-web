import React from "react";

export default function TableSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-6 bg-gray-200 rounded-md"></div>
      <div className="mt-4 grid grid-cols-1 gap-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="h-16 bg-gray-200 rounded-md"></div>
        ))}
      </div>
    </div>
  );
}
