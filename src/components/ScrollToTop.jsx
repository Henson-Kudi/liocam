import React, {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import aos from 'aos'

function ScrollToTop({children}) {
    const pathname = useLocation()

    useEffect(() =>{
        window.scrollTo(0, 0)
        aos.init({duration : 1000})
    }, [pathname])

    return (
        <>
            {children}
        </>
    )
}

export default ScrollToTop