import React from 'react';
import './Title.css'
import ClassesData from '../../Courses/Data/ClassesData.json'

const Title = () => {

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

    return(
        <div className="title">
            <div className="sub-title">
                <div className="detail">
                    <span>{star}</span>
                    <a href="/construction"><h3>{details}</h3></a>
                    <p>Categories: <a href="/construction">{cate1}</a> <a href="/construction">{cate2}</a> <a href="/construction">{cate3}</a> </p>
                </div>
                <div className="shear-save">
                    <a href="/construction">Share</a>
                    <a href="/construction">Wishlist</a>
                </div>
            </div>
        </div>
    )
}

export default Title;