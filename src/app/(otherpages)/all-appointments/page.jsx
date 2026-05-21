
import SearchAndFilter from "@/components/SearchAndFilter";
import { getDoctorsData } from "@/utils/GetData";

const page = async () => {
  // Fetch data on the server
  const doctorsData = await getDoctorsData();

  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-center pt-8 mb-4">Find a Doctor</h1>
      
      {/* Pass the fetched data as props to the client component */}
      <SearchAndFilter initialDoctors={doctorsData} />
    </div>
  );
};

export default page;