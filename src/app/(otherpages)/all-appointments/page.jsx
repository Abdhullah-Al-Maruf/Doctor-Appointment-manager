import DoctorCard from "@/components/cards/DoctorCard";
import { getDoctorsData } from "@/utils/GetData";

const page = async () => {
  const doctorsData = await getDoctorsData();

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mx-auto max-w-7xl'>
      {doctorsData.map((doctor) => (
        <DoctorCard key={doctor._id} data={doctor} />
      ))}
    </div>
  );
};

export default page;
