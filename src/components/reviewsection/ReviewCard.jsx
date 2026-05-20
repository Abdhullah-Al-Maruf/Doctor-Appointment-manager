"use client"
import Image from "next/image"; 
 const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-teal-500' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

 
 const ReviewCard = ({ review }) => {
  return (
    <div 
     className="group relative h-full p-8 rounded-2xl bg-white/60 backdrop-blur-md border border-white/60 shadow-lg shadow-slate-200/50 transition-all duration-300 ease-out"
    >
      {/* Quote Icon - Subtle Teal */}
      <div className="absolute top-6 right-6 text-teal-100">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
        </svg>
      </div>

      <div className="flex flex-col h-full justify-between">
        <div>
          <StarRating rating={review.rating} />
          <p className="text-slate-600 leading-relaxed mb-6 text-base italic">
            {review.content}
          </p>
        </div>

        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-100">
          <Image
            src={review.avatar} 
            alt={review.name} 
            height={200}
            width={200}
            className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
          />
          <div>
            <h4 className="text-slate-800 font-bold text-sm">{review.name}</h4>
            <p className="text-teal-600/80 text-xs font-medium">{review.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default  ReviewCard;