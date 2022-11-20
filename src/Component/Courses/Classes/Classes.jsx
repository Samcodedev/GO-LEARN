import React from 'react';
import './Classes.css'
import { useEffect } from 'react';
import ClassCard from './ClassCard';
// import ClassesData from '../Data/ClassesData'

const Classes = () => {
    let [courses, courseFunction] = React.useState([])
    const handleLogin = async () =>{
        let result = await fetch('https://mysterious-waters-58153.herokuapp.com/api/v1/course', {
            method:'get',
            credencials: 'include'
            
        })
        result = await result.json()
        console.warn(result)
        console.log(result)
        courseFunction(result.data)

        
    }
    // handleLogin()
    useEffect(() => {
        handleLogin()
    }, [])

    const datas = courses.map((items) =>{
        // console.log(items)
        return(
            <ClassCard 
                title={items.courseTitle}
                time={items.courseDuration}
                audience={items.audience}
                category={items.category}
                author={items.publisherName}
                data={items}
            />
        )
    })


    return(
        <div className="classes">
            {courses && (
                <div className="sub-classes">
                    {datas}
                </div>
            )}
            {!courses && <div className='loading'><h1>Loading...</h1></div>}
        </div>
    )
}

export default Classes;