import React, { Fragment, useState } from 'react'

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null)


  const renderedItems = items.map((item, i) => {
    const active = i === activeIndex ? 'active' : ''

    return(
      <Fragment key={item.title}>
        <div
          className={`title ${active}`}
          onClick={() => setActiveIndex(i)}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </Fragment>
    )
  })

  return (
  <div className="ui styled accordion">
    {renderedItems}
  </div>
  )
}

export default Accordion
