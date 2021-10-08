import React, { useEffect, useState } from 'react'

export default function useWindowSize() {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth])
  useEffect(() => {
    const handlerResize = () => {
      setSize([window.innerHeight, window.innerWidth])
    }
    window.addEventListener("resize", handlerResize, )
    return () => {  
      window.removeEventListener("resize" ,handlerResize)
    }
  }, [])
  return size
}
