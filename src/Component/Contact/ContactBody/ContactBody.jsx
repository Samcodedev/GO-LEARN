import React from 'react';
import { Link } from 'react-router-dom';
import './ContactBody.css'
import icon from './img/Group 1.png'

const ContactBody = () => {
    return(
        <div className="contactbody">
            <div className="sub-contactbody">
                <div className="content-area">
                    <span>Contact Details</span>
                    <h2>Get in Touch</h2>
                    <p>Interested in reaching out to us with regards one of our services? Or your would like to know more about our affiliate program? Kindly send us an email and someone would get in touch as soon as possible.</p>
                    <ul>
                        <li>
                            <div className="icon">
                                <img src={icon} alt=""/>
                            </div>
                            <div className="text">
                                <h3>Our Address</h3>
                                <p>Lekki, Lagos</p>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                                <img src={icon} alt=""/>
                            </div>
                            <div className="text">
                                <h3>E-mail</h3>
                                <p>Support: <a href="mailto:hello@ecademy.com">hello@go-learn.oline</a> </p>
                                <p>Affiliate: <a href="mailto:hello@ecademy.com">affiliate@go-learn.online</a> </p>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                                <img src={icon} alt=""/>
                            </div>
                            <div className="text">
                                <h3>Contact</h3>
                                <p>Mobile: <a href="https://go-learn.online/contact/tel:+234-802-156-9242">+234-802-156-9242</a> </p>
                                <p>Whatsapp: <a href="https://go-learn.online/contact/tel:+234-802-654-5550">+234-802-654-5550</a> </p>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                                <img src={icon} alt=""/>
                            </div>
                            <div className="text">
                                <h3>Hours of Operation</h3>
                                <p>Monday - Saturday: 09.00 - 20.00</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="form">
                    <h2>Ready to Get Started?</h2>
                    <p>Your email address will not be published. Required fields are marked *</p>
                    <form action="/construction">
                        <input type="text" placeholder="Your Name" required/>
                        <input type="email" placeholder="Your Email Address" required/>
                        <input type="text" placeholder="Your Subject" required/>
                        <textarea cols="30" rows="10" placeholder="Write Your Message" required></textarea>
                        <small>Accept 
                            <Link to="/construction"> Teams </Link> and 
                            <Link to="/construction"> Private Policy </Link><input type="checkbox" required/></small>
                        <input className="submit" type="submit" value="Send Message"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactBody;