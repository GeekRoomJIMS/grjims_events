import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const ProfileCard = () => {
  return (
    <div className="flex justify-center items-center flex-wrap gap-6">
     
      <div className="relative w-56 h-56 bg-white p-6 rounded-full shadow-lg transition-all duration-300 hover:rounded-lg hover:h-64 mx-4 overflow-hidden">
        <div className="relative w-full h-full transition-transform duration-300 ease-in-out tran hover:translate-y-[-60px]">
          <img
            src="https://1.bp.blogspot.com/-8c7QTLoyajs/YLjr2V6KYRI/AAAAAAAACO8/ViVPQpLWVM0jGh3RZhh-Ha1-1r3Oj62wQCNcBGAsYHQ/s16000/team-1-3.jpg"
            alt="David Corner"
            className="w-full h-full rounded-full shadow-lg object-cover transition-transform duration-300 hover:rounded-lg"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-700 bg-opacity-80 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
          <h3 className="text-xl font-semibold">David Corner</h3>
          <p className="text-sm text-[#11ccf5] font-bold">Front End Developer</p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-white text-xl hover:text-blue-700">
              <FaFacebook />
            </a>
            <a href="#" className="text-white text-xl hover:text-pink-600">
              <FaInstagram />
            </a>
            <a href="#" className="text-white text-xl hover:text-blue-300">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="relative w-56 h-56 bg-white p-6 rounded-full shadow-lg transition-all duration-300 hover:rounded-lg hover:h-64 mx-4 overflow-hidden">
        <div className="relative w-full h-full transition-transform duration-300 ease-in-out tran hover:translate-y-[-60px]">
          <img
            src="https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg"
            alt="David Corner"
            className="w-full h-full rounded-full shadow-lg object-cover transition-transform duration-300 hover:rounded-lg"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-700 bg-opacity-80 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
          <h3 className="text-xl font-semibold">David Corner</h3>
          <p className="text-sm text-[#11ccf5] font-bold">Front End Developer</p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-white text-xl hover:text-blue-700">
              <FaFacebook />
            </a>
            <a href="#" className="text-white text-xl hover:text-pink-600">
              <FaInstagram />
            </a>
            <a href="#" className="text-white text-xl hover:text-blue-300">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="relative w-56 h-56 bg-white p-6 rounded-full shadow-lg transition-all duration-300 hover:rounded-lg hover:h-64 mx-4 overflow-hidden">
        <div className="relative w-full h-full transition-transform duration-300 ease-in-out hover:translate-y-[-60px]">
          <img
            src="https://1.bp.blogspot.com/-AO5j2Y9lzME/YLjr3mxiqAI/AAAAAAAACPE/KAaYYTtQTrgBE3diTbxGoc4U4fCGx-C2gCNcBGAsYHQ/s16000/team-1-4.jpg"
            alt="Tom Cruise"
            className="w-full h-full rounded-full shadow-lg object-cover transition-transform duration-300 hover:rounded-lg"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-700 bg-opacity-80 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
          <h3 className="text-xl font-semibold">Tom Cruise</h3>
          <p className="text-sm text-[#11ccf5] font-bold">Full Stack Developer</p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-white text-xl hover:text-blue-700">
              <FaFacebook />
            </a>
            <a href="#" className="text-white text-xl hover:text-pink-600">
              <FaInstagram />
            </a>
            <a href="#" className="text-white text-xl hover:text-blue-300">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamSection = () => {
  return (
    <div className="flex justify-center items-center mt-10 flex-wrap">
      <ProfileCard />
    </div>
  );
};

export default TeamSection;
