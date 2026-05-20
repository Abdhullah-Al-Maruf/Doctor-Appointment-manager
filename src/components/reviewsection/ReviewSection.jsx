"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ReviewCard from './ReviewCard';

// Mock Data for Doctor Appointment Reviews
const reviews = [
  {
    id: 1,
    name: "Emily Johnson",
    role: "Patient",
    rating: 5,
    content: "Dr. Chen was incredibly thorough. The online booking system made it so easy to schedule my annual checkup without waiting on hold.",
    avatar: "https://i.pravatar.cc/150?u=10"
  },
  {
    id: 2,
    name: "Michael Ross",
    role: "Patient",
    rating: 5,
    content: "The clinic is spotless and the staff is very professional. I appreciated the follow-up care instructions sent directly to my portal.",
    avatar: "https://i.pravatar.cc/150?u=11"
  },
  {
    id: 3,
    name: "Sarah Lee",
    role: "Parent",
    rating: 4,
    content: "Great experience for my pediatric appointment. The doctors were gentle with my child and explained everything clearly.",
    avatar: "https://i.pravatar.cc/150?u=12"
  },
  {
    id: 4,
    name: "David Kim",
    role: "Patient",
    rating: 5,
    content: "Finally, a healthcare provider that respects your time. Minimal wait time and a very modern, comfortable facility.",
    avatar: "https://i.pravatar.cc/150?u=13"
  }
];


const ReviewSection = () => {
  return (
    <section className="relative w-full py-24 bg-white/30 overflow-hidden">
      {/* Subtle Background Accent - Clean Medical Blue/Teal */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-100/50 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100/50 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-teal-600 font-semibold tracking-wider text-sm uppercase mb-2 block">
            Patient Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Read real experiences from our community. We are dedicated to providing compassionate, top-tier healthcare.
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-12"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <ReviewCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};



export default ReviewSection;