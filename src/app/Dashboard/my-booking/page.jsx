import BookingCard from '@/components/cards/BookingCard';
import { getBookingsData } from '@/utils/GetData';
import React from 'react';

const MyBookingPage =async () => {
const bookings = await getBookingsData();

    return (
        <div className='grid  px-3 gap-3  grid-cols-1 lg:grid-cols-2'>
   {bookings.map(bookings=><BookingCard key={bookings._id} booking={bookings}/>)}
        </div>
    );
};

export default MyBookingPage;