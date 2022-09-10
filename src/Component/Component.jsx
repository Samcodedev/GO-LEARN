import React from 'react'
import LandingPage from './Landing Page/LandingPage'
import Layout from './Layout'

import { HashRouter, Routes, Route } from "react-router-dom"

import About from './About/About'
import Blog from './Blog/Blog'
import Courses from './Courses/Courses'
import DecFinance from './DecFinance/DecFinance'
import Contact from './Contact/Contact'
import Construction from './Construction'


function Component(){
    return(
        <div>
            <HashRouter>
                <Routes>
                    <Route element={<Layout />}>
                        {/* <Route path="NavBar" element={<NavBar />} /> */}
                        <Route index path="/" element={<LandingPage />} />
                        <Route path="About" element={<About />} />
                        <Route path="Blog" element={<Blog />} />
                        <Route path="Courses" element={<Courses />} />
                        <Route path="DecFinance" element={<DecFinance />} />
                        <Route path="Contact-Us" element={<Contact />} />
                        <Route path="construction" element={<Construction />} />
                    </Route>
                </Routes>
            </HashRouter>
        </div>
    )
}

export default Component





