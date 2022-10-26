import React from 'react';
import './PupCourse.css'
import PupCryto from '../Data/PupCrypto'
import Card from './Card.jsx'
// import ClassesData from '../../Courses/Data/ClassesData'
import { Link } from 'react-router-dom';

const PupCourse = () => {

    const cards = PupCryto.map(items =>{
        return(
            <Card
                title={items.title}
                content={items.content}
                author={items.author}
                lesson={items.details.lesson}
                students={items.details.students}
                link={items.link}
            />
        )
    })

    return(
        <div className="pupcourse">
            <div className="sub-pupcourse">
                <div className="pupcourse-top-text">
                    <span>Learn At Your Own Pace</span>
                    <h2>GoLearn Popular Courses</h2>
                    <p>Explore all of our courses and choose the one suitable to your goals and start learning with us! We assure that you will never regret it!</p>
                </div>
                <div className="wrapper">
                    {cards}
                </div>
                <div className="pupcourse-bottom-text">
                    <p>Enjoy the top notch learning methods and achieve next level skills! You are the creator of your own career & we will guide you through that. <Link to="/register">Register Free Now!</Link> </p>
                    <Link to="/Courses"><button>VIEW MORE COURSES</button></Link>
                </div>
            </div>
        </div>
    )
}

export default PupCourse;
