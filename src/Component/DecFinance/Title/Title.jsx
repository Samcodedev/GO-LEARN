import React from 'react';
import './Title.css'
import { Link } from 'react-router-dom';
import ClassesData from '../../Courses/Data/ClassesData.json'

const Title = (props) => {

    let details = []
    let cate1 = []
    let cate2 = []
    let cate3 = []
    let star = []
    
    for( let i=0; i<ClassesData.length; i++){
        // console.log(ClassesData[5].title)
        details = ClassesData[5].title
        cate1 = ClassesData[5].author.job1
        cate2 = ClassesData[5].author.job2
        cate3 = ClassesData[5].author.job3
        star = ClassesData[5].star
    }
    let data = props.data
    console.log(data)

    return(
        <div className="title">
            <div className="sub-title">
                <div className="detail">
                    <span>{star}</span>
                    <Link to="/construction"><h3>{data.courseTitle}</h3></Link>
                    <p>Categories: <Link to="/construction">{data.category}</Link> <Link to="/construction">{cate2}</Link> <Link to="/construction">{cate3}</Link> </p>
                </div>
                <div className="shear-save">
                    <Link to="/construction">Share</Link>
                    <Link to="/construction">Wishlist</Link>
                </div>
            </div>
        </div>
    )
}

export default Title;