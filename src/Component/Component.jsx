import React from 'react'
import LandingPage from './Landing Page/LandingPage'
import Layout from './Layout'

import { BrowserRouter, Routes, Route } from "react-router-dom"

import About from './About/About'
import Blog from './Blog/Blog'
import Courses from './Courses/Courses'
import DecFinance from './DecFinance/DecFinance'


function Component(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        {/* <Route path="NavBar" element={<NavBar />} /> */}
                        <Route index path="/" element={<LandingPage />} />
                        <Route path="About" element={<About />} />
                        <Route path="Blog" element={<Blog />} />
                        <Route path="Courses" element={<Courses />} />
                        <Route path="DecFinance" element={<DecFinance />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Component





