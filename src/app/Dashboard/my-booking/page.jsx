import BookingCard from '@/components/cards/BookingCard';
import { getBookingsData } from '@/utils/GetData';
import Link from 'next/link';
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
        <div className='px-3'>
            {bookings.length > 0 ? (
                <div className='grid gap-3 mt-2 grid-cols-1 lg:grid-cols-2'>
                    {bookings.map(bookings=><BookingCard key={bookings._id} booking={bookings}/>)}
                </div>
            ) : (
                <div className='flex items-center justify-center min-h-screen'>
                    <div className='bg-white/50  rounded-lg shadow-lg p-8 w-full h-screen text-center'>
                        <div className='mb-4 mt-40'>
                            <svg 
                                className='w-16 h-16 mx-auto text-gray-400' 
                                fill='none' 
                                stroke='currentColor' 
                                viewBox='0 0 24 24'
                            >
                                <path 
                                    strokeLinecap='round' 
                                    strokeLinejoin='round' 
                                    strokeWidth={2} 
                                    d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' 
                                />
                            </svg>
                        </div>
                        <h2 className='text-2xl font-bold text-gray-800 mb-2'>
                            No Appointments Added
                        </h2>
                        <p className='text-gray-600 mb-6'>
                            You haven't booked any appointments yet. Browse our available doctors and schedule your first consultation today!
                        </p>
                        <Link 
                            href='/all-appointments' 
                            className='inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-200'
                        >
                            Book an Appointment
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyBookingPage;