// import React from 'react'
// import './FAQ.css'

// function FAQ() {
//   return (
//     <div>
//       <h3 className='Faq-title'>FAQs</h3>
//       <div className="container1">
//         {/*Stylish FAQ Accordion by Informatology*/}
//         <label className="accordion accordion--1" htmlFor="open-1">
//           <input
//             className="accordion__open"
//             id="open-1"
//             type="radio"
//             name="accordion-1"
//           />
//           <input
//             className="accordion__close"
//             id="close-1"
//             type="radio"
//             name="accordion-1"
//           />
//           <div className="accordion__tab">FAQ 1</div>
//           <div className="accordion__wrapper">
//             <dl className="accordion__box">
//               <dt className="accordion__patition">
//                 <span className="accordion__number">01</span>
//                 <span className="accordion__title">What services do you offer?</span>
//               </dt>
//               <dd className="accordion__text">
//                 <p>
//                   We offer a wide range of interior design services including:
//                 </p>
//                 <ul>
//                   <li>Residential design</li>
//                   <li>Commercial design</li>
//                   <li>Space planning</li>
//                   <li>Furniture selection</li>
//                   <li>Color consultation</li>
//                 </ul>
//               </dd>
//             </dl>
//           </div>
//           <label htmlFor="close-1" className="accordion__button">
//             <span className="accordion__buttonText">CLOSE</span>
//           </label>
//         </label>

//         <label className="accordion accordion--2" htmlFor="open-2">
//           <input
//             className="accordion__open"
//             id="open-2"
//             type="radio"
//             name="accordion-2"
//           />
//           <input
//             className="accordion__close"
//             id="close-2"
//             type="radio"
//             name="accordion-2"
//           />
//           <div className="accordion__tab">FAQ 2</div>
//           <div className="accordion__wrapper">
//             <dl className="accordion__box">
//               <dt className="accordion__patition">
//                 <span className="accordion__number">02</span>
//                 <span className="accordion__title">How long does a typical project take?</span>
//               </dt>
//               <dd className="accordion__text">
//                 <p>
//                   The duration of a project can vary depending on its scope and complexity. Typically:
//                 </p>
//                 <ul>
//                   <li>Small projects: 2-4 weeks</li>
//                   <li>Medium projects: 1-3 months</li>
//                   <li>Large projects: 3-6 months or more</li>
//                 </ul>
//                 <p>We'll provide a more accurate timeline during our initial consultation.</p>
//               </dd>
//             </dl>
//           </div>
//           <label htmlFor="close-2" className="accordion__button">
//             <span className="accordion__buttonText">CLOSE</span>
//           </label>
//         </label>

//         <label className="accordion accordion--3" htmlFor="open-3">
//           <input
//             className="accordion__open"
//             id="open-3"
//             type="radio"
//             name="accordion-3"
//           />
//           <input
//             className="accordion__close"
//             id="close-3"
//             type="radio"
//             name="accordion-3"
//           />
//           <div className="accordion__tab">FAQ 3</div>
//           <div className="accordion__wrapper">
//             <dl className="accordion__box">
//               <dt className="accordion__patition">
//                 <span className="accordion__number">03</span>
//                 <span className="accordion__title">What is your design process?</span>
//               </dt>
//               <dd className="accordion__text">
//                 <p>Our design process typically involves the following steps:</p>
//                 <ol>
//                   <li>Initial consultation</li>
//                   <li>Concept development</li>
//                   <li>Design presentation</li>
//                   <li>Revisions and refinement</li>
//                   <li>Implementation and project management</li>
//                   <li>Final walkthrough and touch-ups</li>
//                 </ol>
//               </dd>
//             </dl>
//           </div>
//           <label htmlFor="close-3" className="accordion__button">
//             <span className="accordion__buttonText">CLOSE</span>
//           </label>
//         </label>
//       </div>
//     </div>
//   )
// }

// export default FAQ

import React from 'react'
import './FAQ.css'

function FAQ() {
  return (
    <div>
      <h3 className='Faq-title'>FAQs</h3>
      <div className="container1">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <label key={num} className={`accordion accordion--${num}`} htmlFor={`open-${num}`}>
            <input
              className="accordion__open"
              id={`open-${num}`}
              type="radio"
              name={`accordion-${num}`}
            />
            <input
              className="accordion__close"
              id={`close-${num}`}
              type="radio"
              name={`accordion-${num}`}
            />
            <div className="accordion__tab">FAQ {num}</div>
            <div className="accordion__wrapper">
              <dl className="accordion__box">
                <dt className="accordion__patition">
                  <span className="accordion__number">{num.toString().padStart(2, '0')}</span>
                  <span className="accordion__title">FAQ item title {num}</span>
                </dt>
                <dd className="accordion__text">
                  <p style={{fontSize:'20px'}}>This is the answer to FAQ item {num}. Add your detailed response here.</p>
                  <ul>
                    <li>Point 1</li>
                    <li>Point 2</li>
                    <li>Point 3</li>
                  </ul>
                </dd>
              </dl>
            </div>
            <label htmlFor={`close-${num}`} className="accordion__button">
              <span className="accordion__buttonText">CLOSE</span>
            </label>
          </label>
        ))}
      </div>
    </div>
  )
}

export default FAQ