import React, { useRef, useState } from 'react'

import useBodyClick from '../shared/useBodyClick'

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null)
  const accordionRef = useRef()

  useBodyClick(accordionRef, setActiveIndex, null)

  const renderedItems = items.map((item, i) => {
    const active = i === activeIndex

    const onClick = () => {
      active ? setActiveIndex(null) : setActiveIndex(i)
    }

    return (
      <div key={item.title} onClick={onClick}>
        <div className={`title ${active && "active"}`}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active && "active"}`}>
          <p>{item.content}</p>
        </div>
      </div>
    );
  })

  return (
  <div ref={accordionRef} className="ui fluid styled accordion">
    {renderedItems}
  </div>
  )
}

export default Accordion
