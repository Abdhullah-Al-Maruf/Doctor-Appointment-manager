import { getDoctorsData } from "@/utils/GetData";
import DoctorCard from "../cards/DoctorCard";


const SortedDoctors = async() => {
    const doctorsData = await getDoctorsData();
     const sortedDoctors = doctorsData.sort((a, b) => b.rating - a.rating);
     const topRatedDoctors = sortedDoctors.slice(0, 3);
    return (
        <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {
            topRatedDoctors.map((doctor) => (
              <DoctorCard key={doctor._id} data={doctor} />
            ))
           } 
        </div>
    );
};

export default SortedDoctors;