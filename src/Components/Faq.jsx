import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What is React?',
      answer: 'React is a JavaScript library for building user interfaces.',
    },
    {
      question: 'What is Tailwind CSS?',
      answer: 'Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.',
    },
    {
      question: 'How do I use Tailwind CSS with React?',
      answer: 'You can use Tailwind CSS with React by installing it via npm and configuring it with your project.',
    },
    {
      question: '........',
      answer: '.....',

    },
    {
        question: '.........',
        answer: '....'
    }
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="relative min-h-screen bg-beige flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="absolute w-full top-0 left-0 flex items-center justify-center overflow-hidden z-0 place-content-center h-screen ">
      <div className="relative bg-customColor flex items-center px-2 py-1 sm:px-4 sm:py-2 border-t-2 border-b-2 border-black">
      <div className="text-black text-6xl md:text-7xl lg:text-9xl font-main animate-marquee">
        HORIZON'24
      </div>
      <div className="text-black text-6xl md:text-7xl lg:text-9xl font-main animate-marquee ml-10 delay-1000">
        HORIZON'24
      </div>
    </div>
    </div>
      <div className="relative z-10 w-[350px] md:w-[650px] lg:w-[800px] bg-beige rounded-[30px] shadow-lg border-2 border-black">
        <h2 className="bg-customGreen w-full text-xl md:text-3xl font-poppins font-bold rounded-t-[30px] py-6 px-8 border-b border-black">FAQs </h2>
        {faqs.map((faq, index) => (
          <div key={index} className={`p-4 font-poppins ${index !== faqs.length - 1 ? 'border-b border-black' : ''}`}>
            <button
              onClick={() => handleToggle(index)}
              className=" w-full text-left flex justify-between items-center focus:outline-none"
            >
              <span className="text-sm md:text-base lg:text-lg">{faq.question}</span>
              <svg
                className={`w-6 h-6 transform transition-transform duration-300 ease-in-out  ${
                  activeIndex === index ? 'rotate-90' : 'rotate-0'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-screen' : 'max-h-0'}`}>
        
              <div className="text-slate-700 mt-2 text-sm md:text-base lg:text-lg">
                <p>{faq.answer}</p>
              </div>
            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;