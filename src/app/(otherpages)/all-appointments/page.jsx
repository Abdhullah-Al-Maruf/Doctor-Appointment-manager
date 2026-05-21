
import SearchAndFilter from "@/components/SearchAndFilter";
import { getDoctorsData } from "@/utils/GetData";

export const metadata = {
  title: "Find a Doctor — Browse All Specialists",
  description:
    "Search and filter through our network of qualified doctors and specialists. Find the perfect healthcare provider and book your appointment today.",
  openGraph: {
    title: "Find a Doctor — Browse All Specialists | DocAppoint",
    description:
      "Search and filter through our network of qualified doctors. Book your appointment today.",
  },
  twitter: {
    title: "Find a Doctor — Browse All Specialists | DocAppoint",
    description:
      "Search and filter through our network of qualified doctors. Book your appointment today.",
  },
};

const page = async () => {
  // Fetch data on the server
  const doctorsData = await getDoctorsData();

  return (
    <div className="min-h-screen bg-white/20">
      <h1 className="text-3xl font-bold text-center pt-8 mb-4">Find a Doctor</h1>
      
      {/* Pass the fetched data as props to the client component */}
      <SearchAndFilter initialDoctors={doctorsData} />
    </div>
  );
};

export default page;