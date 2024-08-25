// import React, { useEffect, useState } from 'react';

// const CircularTimer = ({ value, max, label }) => {
//   const percentage = (value / max) * 100;
//   const strokeWidth = 4;
//   const radius = 48;
//   const circumference = 2 * Math.PI * radius;

//   return (
//     <div className="flex flex-col w-96 h-auto items-center">
//       <div className="relative "> {/* Increased size */}
//         <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
//           <circle
//             className="text-gray-200 stroke-current"
//             strokeWidth={strokeWidth}
//             cx="50"
//             cy="50"
//             r={radius}
//             fill="transparent"
//           />
//           <circle
//             className="text-blue-400 stroke-current"
//             strokeWidth={strokeWidth}
//             strokeLinecap="round"
//             cx="50"
//             cy="50"
//             r={radius}
//             fill="transparent"
//             strokeDasharray={circumference}
//             strokeDashoffset={circumference - (percentage / 100) * circumference}
//           />
//         </svg>
//         <div className="absolute inset-0 flex items-center justify-center">
//           <span className="text-7xl font-bold">{value.toString().padStart(2, '0')}</span> {/* Increased font size */}
//         </div>
//       </div>
//       <div className="mt-2 text-4xl font-bold text-blue-400">{label}</div>
//     </div>
//   );
// };

// const Countdown = () => {
//   const [timeLeft, setTimeLeft] = useState({
//     days: 8,
//     hours: 20,
//     minutes: 35,
//     seconds: 48
//   });

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(prevTime => {
//         if (prevTime.days === 0 && prevTime.hours === 0 && prevTime.minutes === 0 && prevTime.seconds === 0) {
//           clearInterval(timer);
//           return prevTime;
//         }
        
//         let newTime = { ...prevTime };
//         if (newTime.seconds > 0) {
//           newTime.seconds--;
//         } else {
//           newTime.seconds = 59;
//           if (newTime.minutes > 0) {
//             newTime.minutes--;
//           } else {
//             newTime.minutes = 59;
//             if (newTime.hours > 0) {
//               newTime.hours--;
//             } else {
//               newTime.hours = 23;
//               if (newTime.days > 0) {
//                 newTime.days--;
//               }
//             }
//           }
//         }
//         return newTime;
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="flex gap-8 justify-center p-8">
//       <CircularTimer value={timeLeft.days} max={30} label="Days" />
//       <CircularTimer value={timeLeft.hours} max={24} label="Hours" />
//       <CircularTimer value={timeLeft.minutes} max={60} label="Minutes" />
//       <CircularTimer value={timeLeft.seconds} max={60} label="Seconds" />
//     </div>
//   );
// };

// export default Countdown;





import React, { useEffect, useState } from 'react';

const CircularTimer = ({ value, max, label }) => {
  const percentage = (value / max) * 100;
  const strokeWidth = 4;
  const radius = 48;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="flex flex-col items-center w-64 h-auto sm:w-32 md:w-40 lg:w-64 xl:w-64">
      <div className="relative w-full h-full">
        <svg
         className="w-full h-full transform -rotate-90" 
         viewBox="0 0 100 100">
          <circle
            className="text-gray-200 stroke-current"
            strokeWidth={strokeWidth}
            cx="50"
            cy="50"
            r={radius}
            fill="transparent"
          />
          <circle
            className="text-blue-600 stroke-current"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            cx="50"
            cy="50"
            r={radius}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (percentage / 100) * circumference}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl text-white sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl font-bold">
            {value.toString().padStart(2, '0')}
          </span>
        </div>
      </div>
      <div className="mt-8 text-4xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-blue-600">
        {label}
      </div>
    </div>
  );
};

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 8,
    hours: 20,
    minutes: 35,
    seconds: 48
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime.days === 0 && prevTime.hours === 0 && prevTime.minutes === 0 && prevTime.seconds === 0) {
          clearInterval(timer);
          return prevTime;
        }
        
        let newTime = { ...prevTime };
        if (newTime.seconds > 0) {
          newTime.seconds--;
        } else {
          newTime.seconds = 59;
          if (newTime.minutes > 0) {
            newTime.minutes--;
          } else {
            newTime.minutes = 59;
            if (newTime.hours > 0) {
              newTime.hours--;
            } else {
              newTime.hours = 23;
              if (newTime.days > 0) {
                newTime.days--;
              }
            }
          }
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center p-4 sm:p-8">
      <CircularTimer value={timeLeft.days} max={30} label="Days" />
      <CircularTimer value={timeLeft.hours} max={24} label="Hours" />
      <CircularTimer value={timeLeft.minutes} max={60} label="Minutes" />
      <CircularTimer value={timeLeft.seconds} max={60} label="Seconds" />
    </div>
  );
};

export default Countdown;
