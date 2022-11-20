import React from 'react'
import Head from './Head/Head'
import Details from './Details/Details'
import PupCourse from './PupCourse/PupCourse'
import Olubori from './Olubori/Olubori'
import Education from './Education/Education'
import OnlineBlog from './OnlineBlog/OnlineBlog'
import FreeAccess from './FreeAccess/FreeAccess'
import GoAlumni from './GoAlumni/GoAlumni'
import DistanceLearn from './DistanceLearn/DistanceLearn'
import Subscribe from './Subscribe/Subscribe'
import Footer from './Footer/Footer'


function LandingPage(){
    return(
        <div>
            <Head />
            <Details />
            <PupCourse />
            <Olubori />
            <Education />
            <OnlineBlog />
            <FreeAccess />
            <GoAlumni />
            <DistanceLearn />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default LandingPage