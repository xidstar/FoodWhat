import React from 'react'

function Landing() {
  return (
    <section id="landing" className="landing">
      <div className="overlay"></div>
      <div className="intro">
        <h1>Say Goodbye to Boring Food<br /><span>Say hello to delicious meals!</span></h1>
        <div className="btn-container">
          <a href="#whoweare" className="who-btn">Who we are</a>
          <a href="#ourmenu" className="menu-btn">See Menu</a>
        </div>
      </div>
    </section>
  )
}

export default Landing;