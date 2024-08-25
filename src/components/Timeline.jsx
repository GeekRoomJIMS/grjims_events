import React, { useEffect } from 'react';
import AOS from 'aos'
import "../../node_modules/aos/dist/aos.css"
const timelineData = [
  {
    date: 'August 25, 2024',
    title: 'Registration Starts',
  },
  {
    date: 'September 5-15, 2024',
    title: 'Acceptance Mails to Participants',
  },
  {
    date: 'September 5, 2024',
    title: 'Mentor Reveal',
  },
  {
    date: 'September 7, 2024',
    title: 'Judges Reveal',
  },
  {
    date: 'September 20, 2024',
    title: 'Registration close',
  },
  {
    date: 'September 22, 2024',
    title: 'Online Mentoring Round',
  },
  {
    date: 'September 25, 2024',
    title: 'Offline Final Judgement Round',
  },
];

function Timeline() {
    useEffect(() => {
        AOS.init({
          duration: 2000,
        });
      }, []);
  return (
    <div className="container mx-auto py-6 px-2">
      <h2 className="text-3xl font-bold text-center text-[#11ccf5] ">Event Timeline</h2>
      <div className="h-1 w-32 rounded-lg absolute bg-[#ff3d5f] left-28 mt-2  md:left-[46%] md:mb-8 "></div>
      <div className="relative border-l border-gray-300 mt-12">
        {timelineData.map((item, index) => (
          <div 
            key={index} 
            className="mb-8 ml-4" 
            data-aos="fade-up"
            data-aos-delay={`${index * 200}`}
          >
            <div className="absolute w-3 h-3 bg-[#11ccf5] rounded-full mt-1.5 md:mt-2.5 -left-[1.4rem] border border-white"></div>
            <div className="flex items-center justify-between mb-1">
              <h3 className=" text-md md:text-xl md:font-bold font-semibold text-[#ff3d5f]">{item.title}</h3>
              <span className="text-sm text-gray-400">{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
