import React, { useState } from 'react'
import Link from './Link'

const Header = () => {
    const [currentLink, setCurrentLink] = useState(window.location.pathname);

  return (
    <div className="ui secondary pointing menu">
      <Link
        href="/"
        className="item"
        currentLink={currentLink}
        setCurrentLink={setCurrentLink}
      >
        Accordion
      </Link>
      <Link
        href="/list"
        className="item"
        currentLink={currentLink}
        setCurrentLink={setCurrentLink}
      >
        Search
      </Link>
      <Link
        href="/dropdown"
        className="item"
        currentLink={currentLink}
        setCurrentLink={setCurrentLink}
      >
        Dropdown
      </Link>
      <Link
        href="/translate"
        className="item"
        currentLink={currentLink}
        setCurrentLink={setCurrentLink}
      >
        Translate
      </Link>
    </div>
  );
}

export default Header
