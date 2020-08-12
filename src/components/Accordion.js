import React, { useEffect, useRef, useState } from 'react'

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null)
  const accordionRef = useRef()

  useEffect(() => {
    const onBodyClick = (e) => {
      if (accordionRef.current.contains(e.target)) {
        return
      }

      setActiveIndex(null)
    }

      document.body.addEventListener('click', onBodyClick)

    return () => {
      document.body.removeEventListener('click', onBodyClick)
    }
  }, [])

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
