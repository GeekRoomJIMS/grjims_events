import img from "../assets/Hack-Vortex-Logo.png";
import prizePool from "../assets/prizepool.jpg";
import goodies from "../assets/goodies.webp";
import cashPrize from "../assets/prize.avif";
import { Collapse } from "react-collapse";
import { useEffect, useRef, useState } from "react";
import AOS from 'aos'
import '../../node_modules/aos/dist/aos.css'
import meet from "../assets/meet.png";
import college from "../assets/college.png";
import polygon from "../assets/polygon.png";
import { SlLocationPin } from "react-icons/sl";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";
import Timeline from "./Timeline";
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min'
import TeamSection from "./TeamSection";
const Hackathon = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 2000 });

      const vantaEffect = NET({
        el: vantaRef.current,
        THREE: THREE,
        color: 0x11ccf5,  
        backgroundColor: 0x000306,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 6.00,
        maxDistance: 1.00,
        spacing:15.00,
        points:15.00
      });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);
  
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How many round will happen for hackathon",
      answer:
        "Two round i) Online round 22 september(Google Meet) ii) Offline round 25 september (At campus)",
    },
    {
      question: "What will be the theme for hackathon",
      answer:
        "There is no such theme participants can build projects for any topic/technology",
    },
    {
      question: "Who will attend the final round",
      answer:
        "Participants who got selected in online round are allowed to attend the offline round",
    },
    {
      question: "Any Query?",
      answer:
        "If you have any query then you can contact us through email geekroomjimsrohini@gmail.com",
    },
  ];
  return (
    <>
      <div className="bg-[#000306] min-h-screen">
         <header ref={vantaRef} className="flex justify-center items-center h-screen  flex-col md:gap-y-4">
          <h1 className="text-5xl lg:text-[8.5rem] font-bold text-[#11ccf5] mb-5">Hack Vortex</h1>
          <p className="text-xl text-[#ff3d5f] md:text-[4rem]">A Hybrid Hackathon</p>
          <p className="text-[#c2d4e6] text-xl md:text-3xl mt-8"> September 2024 Jims Rohini</p>
         </header>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10 py-10 font-sans ">
          {/* About Section */}
          <section className="px-4 md:px-0" data-aos="fade-up" >
            <h1 className="text-[#11ccf5] relative text-center font-bold text-3xl md:text-4xl mb-2 uppercase">
              About Hack Vortex
            </h1>
            <div className="h-1 w-32 rounded-lg absolute bg-[#ff3d5f] left-24  md:left-[45%] md:my-10"></div>
            <div className="text-[#c2d4e6]  md:text-xl">
              <div className="flex justify-center items-center md:flex-row flex-col">
              <div className="mt-5">
                <img src={img} alt="hack vortex" className="md:h-96  md:w-[120rem]" />
              </div>
              <div>
                    <p className="text-lg md:text-xl text-[#9abddf] font-bold ">
                      Hack Vortex is our state of the art Hybrid Hackathon, It
                      is an adrenaline-fueled journey where coding prowess meets
                      imaginative thinking. At hack Vortex, Innovation takes the
                      center stage as brilliant minds converge to create
                      solutions for an ever-evolving world.
                    </p>
              </div>
             
              </div>
              <p className="text-center md:text-xl my-3 py-3">
                This
                <span className="uppercase text-[#ff3d5f] font-bold mx-1">
                  hybrid hackathon
                </span>
                consists of two rounds:
              </p>
              <ul className="mt-7 flex flex-col md:flex-row justify-center md:gap-x-12  items-center gap-y-12 mb-5 md:mb-10">
                <li>
                  <div className="relative w-40 h-32 md:w-52 md:h-40 shadow-lg shadow-[#ff3d616e] bg-[#06212a] rounded-lg px-4 py-3  ">
                    <div className=" absolute  my-3 left-[35%] -top-8 md:-top-10 ">
                      <img
                        src={meet}
                        alt="google meet image"
                        className="h-12 w-12 md:h-16 md:w-16"
                      />
                    </div>
                    <h2 className="uppercase text-[#11ccf5] text-center font-bold mt-8 md:mt-12">
                      Online Round
                    </h2>
                    <p className="text-[#c2d4e6] font-bold text-center">
                      22<sup>nd</sup> September
                    </p>
                  </div>
                </li>
                <li>
                  <div className="relative w-40 h-32 md:w-52 md:h-40 shadow-lg shadow-[#1f92c797] bg-[#06212a] rounded-lg px-4 py-3  ">
                    <div className=" absolute  my-3 left-[30%] md:left-[35%] -top-11">
                      <img
                        src={college}
                        alt="google meet image"
                        className="h-16 w-16 md:h-16 md:w-16"
                      />
                    </div>
                    <h2 className="uppercase text-[#11ccf5] text-center font-bold mt-8 md:mt-12">
                      Offline Round
                    </h2>
                    <p className="text-[#c2d4e6] font-bold text-center">
                      25<sup>th</sup> September
                    </p>
                  </div>
                </li>
              </ul>
              <br />
              <span className="font-bold text-lg text-[#ff3d5f]">Note : </span>
              Online Round will be conducted through{" "}
              <span className="text-[#11ccf5] underline font-bold uppercase">
                google meet
              </span>{" "}
              where the students will have to present their project to the
              mentors and they will be evaluated based on that. Only the
              selected teams will be allowed to attend the{" "}
              <span className="text-[#11ccf5] underline font-bold uppercase">
                offline final
              </span>{" "}
              round.
            </div>
          </section>
          {/* Event timeline */}
          <section className="my-10 px-4 md:px-0">
            <Timeline/>
          </section>
          {/* Prizes and perks */}
          <section className="mt-10 px-4 md:px-0" data-aos="fade-up">
            <div>
              <h1 className="text-[#11ccf5] font-bold text-3xl md:text-4xl mb-2 uppercase">
                Prizes & Perks
              </h1>
              <p className="text-[#ff3d5f]  pb-2 text-center font-bold  md:text-xl ">
                Unlock your potential and seize the rewards!
              </p>
            </div>
            <main className="flex justify-center">
              <div >
                <div className="flex flex-col md:flex-row md:gap-x-12 md:justify-center">
                  <div className="w-60 h-60  rounded-md bg-[#06212a] overflow-hidden mt-5 mb-8 flex flex-col justify-between">
                    <div className="flex justify-center items-center h-3/5">
                      <img
                        src={prizePool}
                        alt="prize image"
                        className="object-cover"
                      />
                    </div>

                    <div className="text-center p-2 h-2/5 flex items-center justify-center">
                      <h3 className="text-[#c2d4e6] font-bold line-clamp-3">
                        Prize Pool worth 10,00,000+
                      </h3>
                    </div>
                  </div>
                  <div className="w-60 h-60  rounded-md bg-[#06212a] overflow-hidden mt-5 mb-8 flex flex-col justify-between">
                    <div className="flex justify-center items-center bg-white">
                      <img
                        src={goodies}
                        alt="prize image"
                        className="object-cover h-[9.8rem] "
                      />
                    </div>

                    <div className="text-center px-2 py-1 h-2/5 flex items-center justify-center">
                      <h3 className="text-[#c2d4e6] font-bold line-clamp-3">
                        Goodies and Swags For all
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-x-12">
                  <div className="w-60 h-60 md:w-52 md:h-52 rounded-md bg-[#06212a] overflow-hidden mt-5 mb-8 flex flex-col justify-between">
                    <div className="flex justify-center items-center h-3/5">
                      <img
                        src={cashPrize}
                        alt="prize image"
                        className="h-44 w-full lg:h-36"
                      />
                    </div>

                    <div className="text-center p-2 h-2/5 flex items-center justify-center">
                      <h3 className="text-[#c2d4e6] font-bold line-clamp-3">
                        1 <sup>st</sup> prize 5000
                      </h3>
                    </div>
                  </div>
                  <div className="w-60 h-60 md:w-52 md:h-52 rounded-md bg-[#06212a] overflow-hidden mt-5 mb-8 flex flex-col justify-between">
                    <div className="flex justify-center items-center h-3/5">
                      <img
                        src={prizePool}
                        alt="prize image"
                        className="object-cover"
                      />
                    </div>

                    <div className="text-center p-2 h-2/5 flex items-center justify-center">
                      <h3 className="text-[#c2d4e6] font-bold line-clamp-3">
                        2 <sup>nd</sup> prize 3000
                      </h3>
                    </div>
                  </div>
                  <div className="w-60 h-60 md:w-52 md:h-52 rounded-md bg-[#06212a] overflow-hidden mt-5 mb-8 flex flex-col justify-between">
                    <div className="flex justify-center items-center h-3/5">
                      <img
                        src={prizePool}
                        alt="prize image"
                        className="object-cover"
                      />
                    </div>

                    <div className="text-center p-2 h-2/5 flex items-center justify-center">
                      <h3 className="text-[#c2d4e6] font-bold line-clamp-3">
                        3 <sup>rd</sup> prize 2000
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </section>
          {/* Judges */}
          <section className="mt-10 px-4 md:px-0" data-aos="fade-up">
            <h1 className="uppercase text-[#11ccf5] text-3xl md:text-4xl font-bold text-center">
              Event Judges
            </h1>
            <div className="h-1 w-32 rounded-lg absolute bg-[#ff3d5f] left-24 mt-2  md:left-[45%] md:my-4"></div>

            <p className="mt-6   text-center text-[#ff3d5f] font-bold md:text-xl">
              Meet Our esteemed Judges
            </p>
            <div>
              <TeamSection/>
            </div>
          </section>
          {/* Tiers  */}
          <section className="mt-28 px-4 md:px-0" data-aos="fade-up">
            <h1 className="uppercase text-3xl md:text-4xl text-[#11ccf5] font-bold text-center">
              Sponsors
            </h1>
            <div className="flex justify-center items-center flex-col  md:gap-x-10  my-8 md:gap-y-10">
              <div>
                <div className=" text-white md:w-60 font-bold text-xl text-center bg-gradient-to-r from-yellow-400 to-yellow-500 py-2 px-4 rounded-md">
                  Gold Sponsors
                </div>
                <img
                  src="https://miro.medium.com/v2/resize:fit:512/1*HyHL1CUtt9UIpBsbLyAh5g.png"
                  alt="devfolio"
                  className="bg-white h-28 md:h-36 md:w-60 w-full rounded-md  px-2 md:px-4   mt-5"
                />
              </div>
              <div className="mt-5 md:mt-0">
                <div className=" text-white md:w-60  font-bold text-xl  text-center bg-gradient-to-br from-gray-300 to-gray-400 py-2 px-4 rounded-md">
                  Silver Sponsors
                </div>
                <div className="flex gap-x-4  flex-col">
                  <div>
                    <img
                      src={polygon}
                      alt="devfolio"
                      className="bg-white h-28 md:h-36 w-full md:w-60 rounded-md  mt-5"
                    />
                  </div>
                  <div>
                    <img
                      src="https://miro.medium.com/v2/resize:fit:1400/1*OVB20rzqt5NaiUVsZ6V58Q.jpeg"
                      alt="devfolio"
                      className="bg-white h-28 md:h-36 w-full md:w-60 rounded-md  mt-5"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* venue  */}
          <section className="mt-10 px-4 md:px-0" data-aos="fade-up">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 uppercase text-[#11ccf5]">
              Venue For Hackathon
            </h1>
            <p className="text-[#c2d4e6] font-bold text-[1.15rem] mb-5 flex items-start gap-x-2 md:text-xl line-clamp-5 ">
              <span className="mt-1">
                <SlLocationPin />
              </span>
              Venue for offline hackathon on 25 september : Jims Rohini
              Institutional Area, Sector-5, Near Rithala metro station Delhi-
              110085
            </p>
            <div className="relative w-full overflow-hidden rounded-lg shadow-lg ">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.0196560978256!2d77.1062477752924!3d28.718958575617624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01e3c202a307%3A0x996d6a030689923!2sJIMS%20COLLEGE!5e0!3m2!1sen!2sin!4v1724501983639!5m2!1sen!2sin"
                  width="850"
                  height="450"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </section>
          {/* faq */}
          <section className="my-10 px-4 md:px-0" data-aos="fade-up">
            <h2 className="text-2xl md:text-4xl font-bold text-[#11ccf5] mb-6">
              Frequently Asked Questions
            </h2>
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-300 py-4">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left"
                >
                  <h3 className="text-lg font-medium text-[#ff3d5f] flex justify-between items-center">
                    {faq.question}
                    <span>
                      {openIndex === index ? <MdOutlineClose /> : <FaPlus />}
                    </span>
                  </h3>
                </button>
                <Collapse isOpened={openIndex === index}>
                  <div className="overflow-hidden transition-all duration-700 ease-in-out transform hover:scale-105">
                    <p className="mt-2 text-[#c2d4e6] md:text-xl">
                      {faq.answer}
                    </p>
                  </div>
                </Collapse>
              </div>
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default Hackathon;
