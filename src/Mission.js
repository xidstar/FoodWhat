import React from 'react';
import img1 from './img/donate.png';
import img2 from './img/events.png';
import img3 from './img/photo.png';

function Mission({ items }) {
  return (
    <>
      <section id="whoweare" className="mission">
        <div className="container">
          <div className="title">
            <h2>Who We Are</h2>
            <div className="underline"></div>
          </div>
          {items.map((item) => {
            const { index, heading, paragraph } = item;

            return (
              <div key={index}>
                <h3>{heading}</h3>
                <p>{paragraph}</p>
              </div>
            )
          })}
          <div className="img-wrapper">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Mission;