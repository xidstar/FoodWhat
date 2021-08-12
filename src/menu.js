import React from 'react'

function Menu({ items }) {
  return (
    <div id="menu" className="menuitems-section">
      {items.map((item) => {
        const { id, title, price, img, desc } = item;

        return (
          <article key={id} className="food-item">
            <img src={img} alt={title} className="photo" />
            <div className="food">
              <span className="food-title">
                <h3>{title}</h3>
                <p className="price">${price}</p>
              </span>
              <p>{desc}</p>
            </div>
          </article>
        )
      })}
    </div>

  )
}

export default Menu;