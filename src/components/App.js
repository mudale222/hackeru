import React, { useEffect, useState, useReducer } from 'react'
import TopNavbar from './TopNavbar'
import StickyNavbar from './StickyNavbar'
import Banner from './Banner.js'
import OurCourses from './OurCourses.js'
import Benefits  from './Benefits.js'
import HowItsWork from './HowItsWork'

import '../styles/style.css'

const App = () => {
    return (
        <>
            <TopNavbar />
            <StickyNavbar />
            <Banner/>
            <OurCourses/>
            <Benefits/>
            <HowItsWork/>
        </>
    )
}

export default App