import React from 'react';

const features = [
  {
    id: 1,
    title: "Expert Doctors",
    description: "Our team consists of board-certified specialists with years of experience in their respective fields.",
    icon: (
      <svg className="w-8 h-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    id: 2,
    title: "24/7 Emergency Care",
    description: "We are always here for you. Our emergency department is open 24 hours a day, 7 days a week.",
    icon: (
      <svg className="w-8 h-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Online Booking",
    description: "Skip the waiting room. Book your appointment online in seconds and manage your visits easily.",
    icon: (
      <svg className="w-8 h-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: 4,
    title: "Modern Technology",
    description: "We use the latest medical technology and equipment to ensure accurate diagnosis and effective treatment.",
    icon: (
      <svg className="w-8 h-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    )
  }
];

const WhyChooseUs = () => {
  return (
    <section className="relative   w-full py-24 bg-slate-50 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-100/40 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-100/40 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-600 font-semibold tracking-wider text-sm uppercase mb-2 block">
            Our Benefits
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Why Choose Our Clinic?
          </h2>
          <p className="text-slate-500 leading-relaxed">
            We are dedicated to providing the highest quality healthcare services with a personal touch. 
            Your health and comfort are our top priorities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="
                group relative p-8 rounded-2xl
                /* Glassmorphism Card */
                bg-white/60 backdrop-blur-md border border-white/60
                /* Shadow & Hover Effects */
                shadow-lg shadow-slate-200/50
                hover:bg-white hover:shadow-xl hover:shadow-teal-100/50 hover:-translate-y-1
                transition-all duration-300 ease-out
              "
            >
              {/* Icon Container */}
              <div className="
                w-14 h-14 rounded-xl flex items-center justify-center mb-6
                bg-teal-50 group-hover:bg-teal-100 transition-colors duration-300
              ">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-teal-700 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-slate-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;