import React from 'react';
import {useNavigate} from 'react-router-dom';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';


import PageLayout from '../layouts/PageLayout';

function ContactUs(){
    const nav = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        nav("/");
    };
    return(
        <>
            <Header />
            <div className="page-content">
                <PageLayout desc={false} pageTitle="Contact Us" />
                <section className="content-inner contact-form-wraper style-1">
			        <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-5 col-lg-5 m-b30">
                                <div className="info-box">
                                    <div className="info">
                                        <h2>Contact Information</h2>
                                        <p className="font-18">Fill up the form and our team will get back to you within 24 hours.</p>
                                    </div>
                                    
                                    <div className="widget widget_about">
                                        <div className="widget widget_getintuch">
                                            <ul>
                                                <li>
                                                    <i className="fa fa-phone"></i>
                                                    <span>1800-123-4567<br/>+91 987-654-3210</span> 
                                                </li>
                                                <li>
                                                    <i className="fa fa-envelope"></i> 
                                                    <span>info@example.com <br/>services@gmail.com</span>
                                                </li>
                                                <li>
                                                    <i className="fas fa-map-marker-alt"></i>
                                                    <span>Demo Address #8901 Marmora Road <br/>Chi Minh City, Vietnam</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>


                                    <div className="social-box dz-social-icon style-3">
                                        <h6>Our Socials</h6>
                                        <ul className="social-icon">
                                            <li><a className="social-btn" target="_blank" rel="noreferrer" href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></a></li>
                                            <li><a className="social-btn" target="_blank" rel="noreferrer" href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a></li>
                                            <li><a className="social-btn" target="_blank" rel="noreferrer" href="https://twitter.com/"><i className="fa-brands fa-twitter"></i></a></li>
                                            <li><a className="social-btn" target="_blank" rel="noreferrer" href="https://youtube.com/"><i className="fab fa-youtube"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                                
                            <div className="col-xl-7 col-lg-7">
                                <div className="contact-box">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="mb-4">
                                                <h2 className="mb-0">Get In touch</h2>
                                                <p className="mb-0 font-18 text-primary">We are here for you. How we can help?</p>
                                            </div>
                                            <form className="dzForm" onSubmit={(e) => submitHandler(e)}>
                                                <div className="dzFormMsg"></div>
                                                <input type="hidden" className="form-control" name="dzToDo" value="Contact" />
                                                
                                                <div className="row">
                                                    <div className="col-xl-6 mb-3 mb-md-4">
                                                        <input name="dzFirstName"  type="text" className="form-control" placeholder="First Name" />
                                                    </div>
                                                    <div className="col-xl-6 mb-3 mb-md-4">
                                                        <input name="dzLastName" type="text" className="form-control" placeholder="Last Name" />
                                                    </div>
                                                    <div className="col-xl-6 mb-3 mb-md-4">
                                                        <input name="dzEmail"  type="text" className="form-control" placeholder="Email Address" />
                                                    </div>
                                                    <div className="col-xl-6 mb-3 mb-md-4">
                                                        <input name="dzPhoneNumber"  type="number" className="form-control" placeholder="Phone No." />
                                                    </div>
                                                    <div className="col-xl-12 mb-3 mb-md-4">
                                                        <textarea name="dzMessage"  className="form-control" placeholder="Message"></textarea>
                                                    </div>                                                    
                                                    <div className="col-xl-12">
                                                        <button name="submit" type="submit" value="Submit" className="btn btn-primary">Submit Now</button>								
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default ContactUs;