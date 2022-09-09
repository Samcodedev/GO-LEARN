import React from 'react';
import './Education.css'
import EducationDetail from '../Data/EducationDetail.json'
import Card from './Card';

const Education = () => {

    const Data = EducationDetail.map(items =>{
        return(
            <Card 
                title={items.title}
                content={items.content}
            />
        )
    })

    return(
        <div className="education">
            <div className="sub-education">
                <div className="education-text">
                    <span>Education for everyone</span>
                    <h2>Affordable Online Courses and Learning Opportunities​</h2>
                    <p>Finding your space and utilizing better learning options can result in extraordinary achievements better than conventional ways. Enjoy the beauty and rewards of eLearning!</p>
                </div>
                <div className="education-cards">
                    {Data}
                </div>
            </div>
        </div>
    )
}

export default Education;