import React, { useState, useEffect } from 'react'
import people from './testimonials';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = people[index];

  const checkNum = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  }

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNum(newIndex);
    })
  }

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNum(newIndex);
    })
  }

  const randomPerson = () => {
    let newNum = Math.floor(Math.random() * people.length);
    setIndex(() => {
      if (newNum === index) {
        newNum = index + 1;
      }
      return checkNum(newNum);
    })
  }

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((index) => {
        let newIndex = index + 1;
        return checkNum(newIndex);
      })
    }, 3000);
    return () => clearInterval(slider);
  }, [index])

  return (

    <article key={id} className="review">
      <div className="img-container">
        <div className="svg-container">
          <FaQuoteRight />
        </div>
        <img src={image} alt={name} className="person-img" />
      </div>
      <h4>{name}</h4>
      <p>{job}</p>
      <p className="text">{text}</p>
      <div className="arrows">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>

        <button className="random" onClick={randomPerson}>
          Randomize
        </button>
      </div>
    </article>
  )
}

export default Review;