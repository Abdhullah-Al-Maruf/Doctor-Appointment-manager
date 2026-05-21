import BookingCard from '@/components/cards/BookingCard';
import { getBookingsData } from '@/utils/GetData';
import React from 'react';

export const metadata = {
  title: "My Bookings — Manage Your Appointments",
  description:
    "View and manage all your doctor appointments in one place. Track upcoming visits, review past consultations, and stay on top of your healthcare schedule.",
  robots: {
    index: false,
    follow: false,
  },
};

const MyBookingPage =async () => {
const bookings = await getBookingsData();

    return (
        <div className='grid  px-3 gap-3  grid-cols-1 lg:grid-cols-2'>
   {bookings.map(bookings=><BookingCard key={bookings._id} booking={bookings}/>)}
        </div>
    );
};

export default MyBookingPage;