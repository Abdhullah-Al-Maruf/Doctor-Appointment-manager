import Image from "next/image";
import React from "react";
//  this data will remove when get data from server
const data = {
  id: "d10",
  name: "Dr. Anika Sultana",
  specialty: "Oncologist",
  image: "https://images.pexels.com/photos/5215020/pexels-photo-5215020.jpeg",
  experience: "11 years",
  availability: [
    { day: "Sunday", slots: ["10:00 AM - 05:00 PM", "05:00 PM - 07:00 PM"] },
    { day: "Wednesday", slots: ["10:00 AM - 05:00 PM", "05:00 PM - 07:00 PM"] },
  ],
  rating: 4.9,
  reviews: 180,
  hospital: "National Cancer Institute",
  location: "Mohakhali, Dhaka",
  fee: 1500,
};

const DoctorIntroCard = () => {
  const { image, specialty, availability,name } = data;

  return <div>
        <div className="p-3 rounded-full bg-white">
            <Image
            src={image}
            alt={name}
            height={500}
            width={500}
            className="rounded-e-3xl"

            />
            <p>{name}</p>
        </div>

  </div>;
};

export default DoctorIntroCard;
