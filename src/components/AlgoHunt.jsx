import { useEffect } from 'react';
import Timer from './Timer'
import headerImage from '../assets/algohunt_title.jpg';
import mapImage from '../assets/algohunt_map.png';
import chestbox from '../assets/algohunt_chestbox.png';

const AlgoHunt = () => {
  return (
    <div className="w-full h-full  flex flex-col items-center text-center">
    <section
      className="flex flex-col justify-center items-center bg-cover bg-center"
    >
      <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 tracking-widest shadow-xl hover:text-yellow-500 transition-colors duration-300">
        ALGO HUNT
      </h1>

      <div className="mt-24">
            <Timer />
          </div>

    </section>
    <div className="flex flex-col md:flex-row items-center justify-center px-5 py-10  bg-opacity-90 rounded-lg shadow-xl mx-5">
        {/* Event Details */}
        <div className="text-center md:text-left mb-10 md:mb-0 md:mr-10 p-8 bg-gray-800 text-white rounded-lg shadow-lg border border-gray-700">
          <h2 className="text-4xl font-bold mb-6 text-teal-400">
            Algo Hunt: Treasure Hunt Re-Imagined
          </h2>
          <p className="text-lg mb-4 leading-relaxed">Algo Hunt is a combination of Problem Solving and Treasure Hunt. Each team will consist of 2 students.</p>
          <p className="text-lg mb-4">Registration Starts: <span className="font-bold text-teal-300">26th Aug 2024</span></p>
          <p className="text-lg mb-4">Registration Ends: <span className="font-bold text-teal-300">24th Sept 2024</span></p>
        </div>

        {/* Map Image */}
        <div className="flex-shrink-0">
          <img 
            src={mapImage} 
            alt="Map" 
            className="w-full max-w-xs md:max-w-md border-4 border-teal-500 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300" 
          />
        </div>
      </div>

      {/* Rules and How to Play Section */}
      <div className="px-5 py-10 bg-gray-900 bg-opacity-80 rounded-lg shadow-lg mt-10 mx-5">
        <h3 className="text-3xl font-bold mb-6 text-teal-400">
          ABOUT ALGO HUNT
        </h3>
        <p className="text-lg mb-4 leading-relaxed text-gray-200">
          Algo Hunt is an event combining the knowledge of Problem Solving and Treasure Hunt. Each team will consist of 2 students.
        </p>
        <p className="text-lg mb-4 leading-relaxed text-gray-200">
          At the starting point (LAB), each team will be given a printed HINT, solving which would result in the name of a location. Each location will consist of a QR Code which would be scanned and then reveal a coding problem. The person sitting in the lab would solve the problem.
        </p>
        <p className="text-lg mb-4 leading-relaxed text-gray-200">
          As soon as each team solves the problem, they will be handed out the next clue. In total, there will be 4-6 locations, each with its own problem. The team to finish 1st, 2nd, and 3rd will be given the prizes.
        </p>
        <div className="bg-gray-800 p-6 rounded-lg mt-4 shadow-md border border-gray-700">
          <h4 className="text-xl font-semibold mb-2 text-teal-400">Prizes</h4>
          <p className="text-lg flex items-center mb-2">
            🏆 Winner: <span className="font-bold text-teal-300">2000 INR</span>
          </p>
          <p className="text-lg flex items-center">
            🥇🥈🥉 Trophies and Certificates for the Runner-Ups.
          </p>
        </div>
        </div>

    </div>
  );
};

export default AlgoHunt;
