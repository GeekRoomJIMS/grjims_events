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
    
    </div>
  );
};

export default AlgoHunt;
