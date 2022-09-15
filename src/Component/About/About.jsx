import React from 'react';
import Header from './Header/Header';
import Executive from './Executive/Executive'
// import Details from '../Landing Page/Details/Details';
import Education from '../Landing Page/Education/Education';
import Instructors from './Instructors/Instructors';
import Affiliate from './Affiliate/Affiliate';

const About = () => {
    return(
        <div>
            <Header />
            <Executive />
            {/* <Details /> */}
            <Education />
            <Instructors />
            <Affiliate />
        </div>
    )
}

export default About;