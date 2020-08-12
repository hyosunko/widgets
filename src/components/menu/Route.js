import { useState, useEffect } from 'react'

const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onChangeLocation = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener('popstate', onChangeLocation)

    return () => {
      window.removeEventListener('popstate', onChangeLocation)
    }
  }, [])


  return currentPath === path ? children : null
}

export default Route
