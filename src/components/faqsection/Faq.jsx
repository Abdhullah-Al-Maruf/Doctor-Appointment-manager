"use client"
import React, { useState } from 'react';

const faqData = [
  {
    id: 1,
    question: "How do I book an appointment online?",
    answer: "Booking is simple. Select your preferred doctor from our 'Find a Doctor' page, choose an available time slot that works for you, and fill in your basic details. You will receive a confirmation email and SMS immediately."
  },
  {
    id: 2,
    question: "Do you accept my insurance plan?",
    answer: "We accept most major insurance providers including Blue Cross, Aetna, and Cigna. Please check our full list of accepted insurance plans on our billing page or contact our support team for specific policy verification."
  },
  {
    id: 3,
    question: "What should I bring to my first visit?",
    answer: "Please bring a valid photo ID, your insurance card, and a list of any current medications. If you have previous medical records or test results related to your condition, please bring those as well."
  },
  {
    id: 4,
    question: "Can I reschedule or cancel my appointment?",
    answer: "Yes, you can reschedule or cancel up to 24 hours before your appointment via the patient portal or by calling our front desk. Late cancellations may be subject to a fee."
  },
  {
    id: 5,
    question: "Do you offer telehealth consultations?",
    answer: "Yes, we offer secure video consultations for follow-up visits and minor ailments. You can select 'Telehealth' as the appointment type when booking online."
  }
];

const FaqItem = ({ item, isOpen, onClick }) => {
  return (
    <div 
      className={`
        mb-4 rounded-xl border transition-all duration-300 overflow-hidden
        ${isOpen 
          ? 'bg-white/80 border-teal-200 shadow-md shadow-teal-100/50' 
          : 'bg-white/40 border-white/60 hover:bg-white/60 hover:border-teal-100'
        }
        backdrop-blur-md
      `}
    >
      <button
        className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
        onClick={onClick}
      >
        <span className={`font-semibold text-lg ${isOpen ? 'text-teal-700' : 'text-slate-700'}`}>
          {item.question}
        </span>
        <span className={`ml-4 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className={isOpen ? 'text-teal-600' : 'text-slate-400'}
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </span>
      </button>
      
      <div 
        className={`
          px-6 text-slate-600 leading-relaxed overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        {item.answer}
      </div>
    </div>
  );
};

const Faq = () => {
  const [openId, setOpenId] = useState(1); // Default open first item

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative w-full py-24 bg-slate-50 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-blue-100/40 blur-[80px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal-100/40 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left Side: Header & Contact Info */}
          <div className="lg:w-1/3">
            <span className="text-teal-600 font-semibold tracking-wider text-sm uppercase mb-2 block">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Common Questions
            </h2>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Can't find the answer you're looking for? Our patient care team is here to help you with any questions about your visit.
            </p>
            
            {/* Sticky Contact Card - Glassmorphism */}
            <div className="sticky top-24 p-6 rounded-2xl bg-white/60 backdrop-blur-md border border-white/60 shadow-lg shadow-slate-200/50">
              <h3 className="font-bold text-slate-800 mb-2">Still need help?</h3>
              <p className="text-sm text-slate-500 mb-4">
                Call us directly or start a live chat.
              </p>
              <button className="w-full py-3 px-4 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-medium transition-colors shadow-md shadow-teal-200">
                Contact Support
              </button>
              <div className="mt-4 text-center text-xs text-slate-400">
                Available Mon-Fri, 8am - 6pm
              </div>
            </div>
          </div>

          {/* Right Side: Accordion List */}
          <div className="lg:w-2/3">
            <div className="flex flex-col">
              {faqData.map((item) => (
                <FaqItem 
                  key={item.id} 
                  item={item} 
                  isOpen={openId === item.id} 
                  onClick={() => toggleFaq(item.id)} 
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Faq;