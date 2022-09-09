import React from 'react';
import './Olubori.css'
import '../OnlineBlog/OnlineBlog.css'
import img from './img/olubori-free.png'

const Olubori = () => {
    return(
        <div className="OnlineBlog Online-bori">
            <div className="sub-OnlineBlog sub-Online-bori">
                <div className="OnlineBlog-img-div Sub-Online-img">
                    <img src={img} alt=""/>
                </div>
                <div className="OnlineBlog-content">
                    <span>Cheap access to courses </span>
                    <h2>Get Access To All Available Courses For 1,000 Naira</h2>
                    <p>You get a chance to access all our courses for a thousand naira. This thousand naira gives you access to our courses for a year.</p>
                    <a href=""><button>Start For Free</button></a>
                </div>
            </div>
        </div>
    )
}

export default Olubori;