"use client"

import DoctorIntroCard from '@/components/cards/DoctorIntroCard';
import DetailsPageTop from '@/components/detailspage/DetailsPageTop';
import DetailsPageBottom from '@/components/detailspage/DetailsPageBottom';

import { useParams } from 'next/navigation';


const DetailsPage = ({ params }) => {
  const { id } = useParams(params)
  // todo: get the data from api
  // now this will fetch only that id data from the server


  return (
    <div className="pt-0 pb-12 w-full flex flex-col">
      <DoctorIntroCard />

      <main className="pt-5 pb-16 px-4 md:px-12 max-w-[1280px] mx-auto relative z-10 w-full">
        <DetailsPageTop />
        <DetailsPageBottom />
      </main>
    </div>
  );
};

export default DetailsPage;