import React, { useState } from 'react'
import './App.css';
import items from './data';
import Categories from './categories';
import Menu from './menu';
import Landing from './landing';
import Navigation from './nav';
import Review from './review';
import Mission from './Mission';
import missionInfo from './MissionInfo';
import Footer from './Footer'


const allCategories = ["all", ...new Set(items.map((item) => item.category))]

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }

    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  }

  return (
    <main>
      <Navigation />
      <Landing />
      <Mission items={missionInfo} />
      <section id="ourmenu" className="menu-section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
      <section className="reviews-container">
        <div className="title">
          <h3>Testimonials</h3>
        </div>
        <Review />
      </section>
      <section id="newsletter" className="newsletter">
        <div className="title">
          <h3>Sign up for our Newsletter</h3>
        </div>
        <div className="container">
          <input type="text" placeholder="First Name" />
          <input type="email" placeholder="Email" />
          <input type="phone" placeholder="Phone Number" />
          <button className="signup">SIGN UP</button>
        </div>
      </section>
      <Footer />
    </main>

  );
}

export default App;
