import React from 'react';
import './Classes.css'
import ClassCard from './ClassCard';
import ClassesData from '../Data/ClassesData'

const Classes = () => {
    const container = ClassesData.map((item)  =>{
        return(
            <ClassCard 
                id={item.id}
                title={item.title}
                duration={item.details.duration}
                member={item.details.members}
                star={item.star}
                name={item.author.name}
                job1={item.author.job1}
                job2={item.author.job2}
                job3={item.author.job3}
                link={item.link}
            />
        )
    })
    return(
        <div className="classes">
            <div className="sub-classes">
                {container}
            </div>
        </div>
    )
}

export default Classes;