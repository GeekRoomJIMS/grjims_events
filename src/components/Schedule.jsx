import "./Schedule.css";
import React, { useEffect } from "react";

const schedule = () => {
  // useEffect(() => {
  //   const callback = (entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add("timelineAnimation");
  //         document
  //           .querySelectorAll(".container, .container-mobile")
  //           .forEach((container) =>
  //             container.classList.add("timelineAnimationContainer")
  //           );
  //       }
  //     });
  //   };

  //   const options = {
  //     threshold: 0.2,
  //   };
  //   const observer = new IntersectionObserver(callback, options);
  //   const divs = document.querySelectorAll("#timeline");
  //   divs.forEach((div) => observer.observe(div));
  // });

  useEffect(() => {
    const hasAnimated = localStorage.getItem('hasAnimated');
    
    if (!hasAnimated) {
      const callback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("timelineAnimation");
            document
              .querySelectorAll(".container, .container-mobile")
              .forEach((container) =>
                container.classList.add("timelineAnimationContainer")
              );
          }
        });
      };
  
      const options = {
        threshold: 0.2,
      };
      const observer = new IntersectionObserver(callback, options);
      const divs = document.querySelectorAll("#timeline");
      divs.forEach((div) => observer.observe(div));
  
      localStorage.setItem('hasAnimated', 'true');
    } else {
      // If already animated, add classes immediately
      document.querySelectorAll("#timeline").forEach(div => div.classList.add("timelineAnimation"));
      document
        .querySelectorAll(".container, .container-mobile")
        .forEach((container) =>
          container.classList.add("timelineAnimationContainer")
        );
    }
  }, []);

  return (
    <React.Fragment>
      <div className="mainSchedule" id="schedule">
        <h1 className="timeh1">TimeLine</h1>
        <div className="parent-schedule">

          <div className="schedule-title">
            {/* <img src="/images/BulletPoint.svg" alt="arrow-logo" /> */}
            Schedule
          </div>

          <div className="schedule-title1">
            July 27 [online] 
          </div>

          <div className="timeline" id="timeline">

            <div className="container" id="timeline-container" style={{width:'45%'}}>

              <h2 className="date" style={{color: 'blue', background: 'none'}}>

                <div>
                  8:00 A.M
                </div>

              </h2>

              <h2 
              className="container-title">
                Hackathon Begins
              </h2>
              
              <span className="circle"></span>
            </div>

            <div className="container " style={{width:'45%'}}>
              <h2 className="container-title">Idea Submission Deadline</h2>
              <h1 className="date">
                <div>
                  5:00 P.M 
                  
                </div>
              </h1>
              
              <span className="circle"></span>
            </div>
            <div className="container " style={{width:'45%'}}>
              <h1 className="date">
                <div>
                  6:00 - 9:00 P.M
                </div>
              </h1>
              <h2 className="container-title">Mentoring Round</h2>
              

              <span className="circle"></span>
            </div>
            <div className="container " style={{width:'45%'}}>
              <h2 className="container-title">Mentoring Round Results</h2>
              <h1 className="date">
                <div>
                  July
                  <div>
                    <div>28</div> <div>th</div>
                  </div>
                </div>
              </h1>
              
              <span className="circle"></span>
            </div>

            
         
        

          <div className="schedule-title2">
            August 3 [offline]
          </div>
            <div className="container" id="timeline-container" style={{width:'45%'}}>
              <h2 className="date">
                <div>
                  11:00 P.M
                </div>
              </h2>
              <h2 className="container-title">Reporting Time</h2>
              
              <span className="circle"></span>
            </div>

            <div className="container " style={{width:'45%'}}>
              <h2 className="container-title">Presentation Round</h2>
              <h1 className="date">
                <div>
                  12:30 P.M
                </div>
              </h1>
              
              <span className="circle"></span>
            </div>

            <div className="container " style={{width:'45%'}}>
              <h1 className="date">
                <div>
                  3:00 P.M
                </div>
              </h1>
              <h2 className="container-title">Lunch</h2>
              <span className="circle"></span>
            </div>

            <div className="container " style={{width:'45%'}}>
              <h2 className="container-title">Result Declaration</h2>
              <h1 className="date">
                <div>
                  5:00 P.M
                </div>
              </h1>
              
              <span className="circle"></span>
            </div>

            
          </div>
        </div>
      </div>
      <div className="mainSchedule" id="schedule" >
      <div className="parent-schedule-mobile">
          <div className="schedule-title-mobile">
            <img src="/images/rrr.webp" alt="arrow-logo" />
            Schedule
          </div>
          <div className="schedule-title1-mobile">
            July 27 [online] 
          </div>
          <div className="timeline-mobile" id="timeline">
            <div className="container-mobile" id="timeline-container">
              <h2 className="date-mobile">
                <div>
                  8:00 A.M
                 
                </div>
              </h2>
              <h2 className="container-title-mobile">Hackathon Begins</h2>
              
              <span className="circle-mobile"></span>
            </div>
            <div className="container-mobile ">
              <h2 className="container-title-mobile">Idea Submission Deadline</h2>
              <h1 className="date-mobile">
                <div>
                  5:00 P.M 
                  
                </div>
              </h1>
              
              <span className="circle-mobile"></span>
            </div>
            <div className="container-mobile ">
              <h1 className="date-mobile">
                <div>
                  6:00 - 9:00 P.M
                </div>
              </h1>
              <h2 className="container-title-mobile">Mentoring Round</h2>
              

              <span className="circle-mobile"></span>
            </div>
            <div className="container-mobile ">
              <h2 className="container-title-mobile">Mentoring Round Results</h2>
              <h1 className="date-mobile">
                <div>
                  July
                  <div>
                    <div>28</div> <div>th</div>
                  </div>
                </div>
              </h1>
              
              <span className="circle-mobile"></span>
            </div>

            
         
        

          <div className="schedule-title2-mobile">
            August 3 [offline]
          </div>
          
            <div className="container-mobile" id="timeline-container-mobile">
              <h2 className="date-mobile">
                <div>
                  11:00 P.M
                </div>
              </h2>
              <h2 className="container-title-mobile">Reporting Time</h2>
              
              <span className="circle-mobile"></span>
            </div>
            <div className="container-mobile ">
              <h2 className="container-title-mobile">Presentation Round</h2>
              <h1 className="date-mobile">
                <div>
                  12:30 P.M
                </div>
              </h1>
              
              <span className="circle-mobile"></span>
            </div>
            <div className="container-mobile ">
              <h1 className="date-mobile">
                <div>
                  3:00 P.M    
                </div>
                <div></div>

              </h1>
              <h2 className="container-title-mobile">Lunch & Snacks</h2>
              

              <span className="circle-mobile"></span>
            </div>
            <div className="container-mobile ">
              <h2 className="container-title-mobile">Result Declaration</h2>
              <h1 className="date-mobile">
                <div>
                  5:00 P.M
                  
                </div>
              </h1>
              
              <span className="circle-mobile"></span>
            </div>

            
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default schedule;
