import React from 'react';
import './StudentRev.css'
import profile from './img/Group 1.png'
import { FaStar } from 'react-icons/fa'

const StudentRev = (props) => {
    let sta = {
        one: <FaStar />
    }
    let stars = ""
    function reload(){
        if( props.star === 5 ){
            stars = sta.one
        } else if( props.star === 4 ){
            stars = "⭐⭐⭐⭐"
        } else if( props.star === 3 ){
            stars = "⭐⭐⭐"
        } else if( props.star === 2 ){
            stars = "⭐⭐"
        } else if( props.star === 1 ){
            stars = "⭐"
        } else if( props.star > 5 ){
            stars = "⭐⭐⭐⭐⭐"
        }
    }
    reload()



    return(
        <div className='studentrev'>
            <div className="top">
                <div className="cont">
                    <div className="img-div">
                        <img src={profile} alt="" />
                    </div>
                    <div className="text-div">
                        <span>{props.name}</span>
                        <p>{props.time} ago</p>
                    </div>
                </div>
                <div className="star">
                    <p>{stars}</p>
                    <FaStar fill='rgb(226, 194, 12)' />
                    <FaStar fill='rgb(226, 194, 12)' />
                </div>
            </div>
            <div className="body">
                <p>{props.review}</p>
            </div>
        </div>
    )
}

export default StudentRev;