import React from 'react';
import { Link } from 'react-router-dom';
import './GoAlumni.css'
import { HiOutlineChatAlt } from 'react-icons/hi'

const GoAlumni = () => {
    return(
        <div className="goalumni">
            <div className="sub-goalumni">
                <div className="goalumni-content">
                    <span>GoLearn Alumni</span>
                    <h2>Join the Go-Learn Telegram Community​</h2>
                    <p>Done with your course or want to join our community of go-getters? Click now to join the Go-Learn online, telegram community and get updated insights, news and real-time information of all our offerings and services.</p>
                    <Link to=""><button> <HiOutlineChatAlt fontSize="20px" /> Join Go-Learn Community</button></Link>
                </div>
            </div>
        </div>
    )
}

export default GoAlumni;