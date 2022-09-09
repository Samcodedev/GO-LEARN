import React from 'react';
import './Instructors.css'
import InstructorsData from '../Data/InstructorsData'
import Card from './Card'
import profile from './img/olubori-free3.jpg'

const Instructors = () => {

    const prof = InstructorsData.map((item) =>{
        return(
            <Card 
                img={profile}
                work={item.Work}
                name={item.Name}
            />
        )
    })

    return(
        <div className="instructors">
            <div className="sub-instructors">
                <div className="instructors-content">
                    <span>Instructor</span>
                    <h2>GoLearn Faculty</h2>
                    <p>Meet our expert instructors for the courses we are offering! Every course is designed to render utmost value and insight to the desired topic addressed.</p>
                </div>
                <div className="instructures-wrapper">
                    {prof}
                </div>
            </div>
        </div>
    )
}

export default Instructors;