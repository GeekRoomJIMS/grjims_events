import React, { useState, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
// import 'swiper/swiper-bundle.min.css';
import Timer from './Timer';
import bulbicon from '../assets/bulbicon.png';
import podium from '../assets/podium.png';
import techquizittelogo from '../assets/techquizittelogo.png';
import bgvenue from '../assets/bgvenue.jpg';


const Quizitte = () => {

  useEffect(() => {
    Aos.init({
      duration: 1200, // Adjust this for the duration of animations
      once: true, // Whether animation should happen only once - while scrolling down
      offset: 200, // Offset (in px) from the original trigger point
    });
  }, []);

  const timelineData = [
    { color: 'blue', title: '26 August, 2024', subtitle:'The registration for event starts.'},
    { color: 'blue', title: '24 September, 2024', subtitle: 'The registration ends.' },
    { color: 'blue', title: '26 September, 2024', subtitle: 'The EVENT DAY !!'}
  ];

  const cardData = [
    {
      
      heading: "WINNER TEAM",
      description: "TROPHY + Cash prize upto 2,000 INR.",
     
    },
    {
      
      heading: "RUNNER UP TEAM",
      description: "TROPHY.",
     
    },
    {
      
      heading: "2nd RUNNER UP TEAM",
      description: "TROPHY.",
     
    },
  ];

  return (
    <>
    {/* main div */}
      <div className="w-full h-full min-h-screen flex flex-col items-center text-center text-white bg-[#000306]"
       style={{
        backgroundImage: `
          linear-gradient(
            -90deg,
            transparent calc(5em - 1px),
            rgba(255, 255, 255, 0.2) calc(5em - 1px + 1px),
            rgba(255, 255, 255, 0.2) 5em
          ),
          linear-gradient(
            0deg,
            transparent calc(5em - 1px),
            rgba(255, 255, 255, 0.2) calc(5em - 1px + 1px),
            rgba(255, 255, 255, 0.2) 5em
          )
        `,
        backgroundSize: '5em 5em',
      }} >
        
        {/* title timer button */}
        
        <section className="flex flex-col justify-center items-center mt-20" data-aos="fade-up"
         data-aos-anchor-placement="center-center"
        >
        <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 mb-36 tracking-widest shadow-xl hover:text-yellow-500 transition-colors duration-300">
  TECH QUIZITTE
</h1>


          <div className="mb-20">
            <Timer />
          </div>
          <div className='mb-20 justify-center'>
<button 
  className ="cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700"
>
  REGISTER NOW !
</button>
</div>
        </section>
        

        {/* About Event Section and logo */}

        <section className="w-full py-16 text-white">
          <div className="container mx-auto px-8 md:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              
              {/* Left Side - About the Event */}
              <div className='text-left'>
                <h2 className="text-4xl font-bold mb-8 text-center">About The Event</h2>
                <p className="text-lg leading-relaxed mb-8">
                  <span className='font-semibold'>Tech Quizitte</span> is a quiz based competition to test the participant’s knowledge about tech and
                  current affairs in the field. This event is for both coders and non coders.
                </p>

                <div className="space-y-8">
                  <div className="flex items-center">
                    <img src={bulbicon} alt="icon" className="w-10 h-10 mr-3" />
                    <p className="text-lg">
                    <span className='font-bold'>First Round :</span> All the teams will be provided a set of MCQ Questions on paper where they would have to mark the correct answers under a time limit (No Negative Marking). 40% of the teams will be eliminated.
                    </p>
                  </div>

                  <div className="flex items-center">
                    <img src={bulbicon} alt="icon" className="w-10 h-10 mr-3" />
                    <p className="text-lg">
                    <span className='font-bold'>Second Round :</span> Teams will be again with a set of MCQ Questions on paper where they would have to mark the correct answers under a time limit (No Negative Marking). Top 5 Teams will move ahead
                    </p>
                  </div>

                  <div className="flex items-center">
                    <img src={bulbicon} alt="icon" className="w-10 h-10 mr-3" />
                    <p className="text-lg">
                    <span className='font-bold'>Final Round :</span> There will be two subsequent Rounds : <br/> 
                    
                    <span className='font-semibold'>Round One :</span> Each Team will be shown 5 Questions Each on the screen, each correct answer will be +1 point and each wrong answer will be -1. <br />
                    
                    <span className='font-semibold'>Round Two :</span> 15 Questions will be displayed on the screen in a Rapid Fire Round, the team to answer first will be given +1 and no negative marking for the rest. <br /> <br />

                   The Combined Score of both the rounds will be used to declare the winners.<hr/>
                    
                    </p>
                  </div>
                  
                </div>
                <div className="text-center mt-20">
                   <h3 className="text-3xl font-bold">Only 1-2 team members allowed</h3>
                  </div>
              </div>
              
              <div className='flex flex-col  justify-center'>
                <img src={techquizittelogo} alt="logo" className='justify-center '/>  
              </div>
            </div>
          </div>
        </section>


        {/* timeline */}

       <section>

       <div className="w-full mx-auto relative mt-20 mb-40">
  <div className="flex justify-between mt-10 space-x-60"> {/* Controls horizontal spacing between events */}
    {timelineData.map((item, index) => (
      <div key={index} className="relative flex flex-col items-center text-center w-1/3">
        {/* Dot Following the Horizontal Line */}
        <div className={`w-8 h-8 bg-${item.color}-600 rounded-full z-10`}></div>

        {/* Line that connects the dots */}
        {index !== timelineData.length - 1 && (
          <div className="absolute top-1/2 transform -translate-y-1/2 h-1 w-full z-0"></div>
        )}

        {/* Content that shows in the box */}
        <div className="mt-4">
          <h1 className="text-2xl">{item.title}</h1>
          <h1 className="text-xl font-bold">{item.subtitle}</h1>
        </div>
      </div>
    ))}
  </div>
</div>

      
      
       </section>


         {/* prize section */}

       <section className='mb-20'>
        <h1 className='text-6xl font-bold mb-20'>OUR PRIZE POOL </h1>

<div className="flex justify-center space-x-40">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="relative group duration-500 cursor-pointer overflow-hidden h-72 w-56 rounded-2xl hover:duration-700"
        >
          <div className="w-56 h-72 bg-center" style={{ backgroundImage: `url(${podium})`}}>
            <div className="flex flex-row justify-between">
              <svg
                className="fill-current stroke-current w-8 h-8 p-2 hover:bg-bg-center rounded-full m-1"  style={{ backgroundImage: `url(${podium})`}}
                height="100"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 100 100"
                width="100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.8,32.9V15.8m0,0H32.9m-17.1,0L37.2,37.2m47-4.3V15.8m0,0H67.1m17.1,0L62.8,37.2m-47,29.9V84.2m0,0H32.9m-17.1,0L37.2,62.8m47,21.4L62.8,62.8M84.2,84.2V67.1m0,17.1H67.1"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="8"
                />
              </svg>
              <svg
                className="fill-current stroke-current w-8 h-8 p-2 m-1 hover:bg-opacity-50 rounded-full"
                height="100"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 100 100"
                width="100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50,17.4h0M50,50h0m0,32.6h0M50,22a4.7,4.7,0,1,1,4.7-4.6A4.7,4.7,0,0,1,50,22Zm0,32.7A4.7,4.7,0,1,1,54.7,50,4.7,4.7,0,0,1,50,54.7Zm0,32.6a4.7,4.7,0,1,1,4.7-4.7A4.7,4.7,0,0,1,50,87.3Z"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="8"
                />
              </svg>
            </div>
          </div>
          <div className="absolute bg-gray-50 -bottom-24 w-56 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
            <h2 className="text-black font-bold text-3xl">{card.heading}</h2>
            <p className="text-2xl text-neutral-800">{card.description}</p>
          </div>
        </div>
      ))}
    </div>

    </section>


      {/* event venue section  */}
         <section>
        <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold text-center text-white mb-4">
          EVENT VENUE
        </h2>
        <p className="text-center text-2xl text-white mb-12">
          Discover the unique charm of JIMS, Sector-5 and explore the event venue
        </p>

        <div className="flex flex-col md:flex-row md:space-x-6">
          {/* Map Section */}
          <div className="flex-1 mb-6 md:mb-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1746.7792532837425!2d77.11025571189586!3d28.719941064145257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0309d71bcf2f%3A0x81167d12e7c0ae36!2sJagan%20Institute%20of%20Management%20Studies%20(JIMS)!5e0!3m2!1sen!2sin!4v1690892265794!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Info Section */}
          <div className="relative flex-1 p-6 shadow-lg text-white">
            {/* Background Image with Dark Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${bgvenue})` }}
            >
              <div className="absolute inset-0 bg-black opacity-70"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 mt-48">
              <h3 className="text-3xl font-extrabold mb-4">JIMS, Sector-5</h3>
              <p className="text-lg leading-relaxed mb-4">
                Experience the vibrant atmosphere of JIMS, Sector-5, Rohini.
                Nestled in a dynamic learning environment, JIMS provides the
                perfect backdrop for the event. Immerse yourself in innovation
                and technology amidst the state-of-the-art facilities and
                collaborative spirit of this prestigious institution.
              </p>
              <address className="text-base text-gray-300">
                3 Near Rithala Metro Station Rohini, Sector 5, Institutional Area,
                New Delhi, Delhi 110085
              </address>
            </div>
          </div>
        </div>
      </div>
    </div>
        </section>

      </div>
    </>
  );
};

export default Quizitte;
  
