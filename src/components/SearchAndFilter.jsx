'use client'; // This directive is crucial for using useState

import { useState } from 'react';
import DoctorCard from "@/components/cards/DoctorCard";

const SearchAndFilter = ({ initialDoctors }) => {
  const [search, setSearch] = useState("");

  // Filter logic based on the local state
  const filteredDoctors = initialDoctors.filter((doctor) => {
    const searchTerm = search.toLowerCase();
    return (
      doctor.name.toLowerCase().includes(searchTerm) ||
      doctor.specialty.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <div className='mx-auto max-w-7xl p-6'>
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search doctor by name or specialty..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-96 px-4 py-3 border rounded-xl mb-6 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Results Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <DoctorCard key={doctor._id} data={doctor} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No doctors found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchAndFilter;