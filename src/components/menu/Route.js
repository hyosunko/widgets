import { useState, useEffect } from 'react'

const Route = ({ path, children }) => {
  const [currenPath, setCurrenPath] = useState(window.location.pathname)

  useEffect(() => {
    const onChangeLocation = () => {
      setCurrenPath(window.location.pathname)
    }

    window.addEventListener('popstate', onChangeLocation)

    return () => {
      window.removeEventListener('popstate', onChangeLocation)
    }
  }, [])


  return currenPath === path ? children : null
}

export default Route
