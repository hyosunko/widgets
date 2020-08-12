import React from 'react'

const Link = ({ className, href, children, currentLink, setCurrentLink}) => {

  const onClick = (e) => {
    if (e.metaKey || e.ctrlKey) {
      return
    }

    e.preventDefault();
    window.history.pushState({}, '', href)

    const navEvent = new PopStateEvent('popstate')
    window.dispatchEvent(navEvent)

    setCurrentLink(navEvent.target.location.pathname);
  }

  const activeLink = href === currentLink ? "active orange" : "";

  return (
    <a className={`${className} ${activeLink}`} href={href} onClick={onClick}>
      {children}
    </a>
  );
}

export default Link
