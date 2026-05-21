"use client"; // This directive is crucial

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const router = useRouter();

  return (
    <button 
      onClick={() => router.push("/all-appointments")}
      className="mb-8 flex items-center gap-2 text-teal-500 hover:text-teal-600 transition-colors group"
    >
      <div className="p-2 rounded-full bg-white/10 backdrop-blur-md shadow-sm group-hover:bg-teal-50 transition-all">
        <ArrowLeft size={20} />
      </div>
      <span className="font-medium">Back to List</span>
    </button>
  );
}