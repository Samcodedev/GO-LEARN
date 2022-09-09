import React from 'react';
import '../OnlineBlog/OnlineBlog.css'
import './DistanceLearn.css'
import img from './img/man-with-laptop-olubori.png'

const DistanceLearn = () => {
    return(
        <div className="OnlineBlog Online-bori">
            <div className="sub-OnlineBlog sub-Online-bori">
                <div className="distance-img-div">
                    <img src={img} alt=""/>
                </div>
                <div className="OnlineBlog-content">
                    <span>Distant Learning</span>
                    <h2>Feel Like You Are Attending Your Classes Physically</h2>
                    <p>Go-Learn training programs can bring you a super exciting experience of learning through online! You never face any negative experience while enjoying your classes virtually by sitting in your comfort zone. Our flexible learning initiatives will help you to learn better and quicker than the traditional ways of learning skills.</p>
                    <a href=""><button>View Courses</button></a>
                </div>
            </div>
        </div>
    )
}

export default DistanceLearn;