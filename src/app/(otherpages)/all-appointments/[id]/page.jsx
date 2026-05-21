import DoctorIntroCard from "@/components/cards/DoctorIntroCard";
import DetailsPageTop from "@/components/detailspage/DetailsPageTop";
import DetailsPageBottom from "@/components/detailspage/DetailsPageBottom";

import { getDoctorById } from "@/utils/GetData";
import BackButton from "@/components/BackButton";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const doctor = await getDoctorById(id);

  const doctorName = doctor?.name || "Doctor";
  const specialty = doctor?.specialty || doctor?.speciality || "Specialist";

  return {
    title: `Dr. ${doctorName} — ${specialty}`,
    description: `Book an appointment with Dr. ${doctorName}, a trusted ${specialty}. View availability, patient reviews, consultation fees, and more on DocAppoint.`,
    openGraph: {
      title: `Dr. ${doctorName} — ${specialty} | DocAppoint`,
      description: `Book an appointment with Dr. ${doctorName}, a trusted ${specialty}. View availability and reviews.`,
      images: doctor?.image ? [{ url: doctor.image, alt: `Dr. ${doctorName}` }] : [],
    },
    twitter: {
      title: `Dr. ${doctorName} — ${specialty} | DocAppoint`,
      description: `Book an appointment with Dr. ${doctorName}, a trusted ${specialty}.`,
    },
  };
}

const DetailsPage = async ({ params }) => {
  const { id } = await params;
  const doctorData = await getDoctorById(id);

  // now this will fetch only that id data from the server

  return (
    <div className="pt-0 pb-12 w-full flex flex-col">
      <DoctorIntroCard doctorData={doctorData} />

      <main className="pt-5 pb-16 px-4 md:px-12 max-w-[1280px] mx-auto relative z-10 w-full">
        <BackButton/>
        <DetailsPageTop doctorData={doctorData} />
        <DetailsPageBottom doctorData={doctorData} />
      </main>
    </div>
  );
};

export default DetailsPage;
