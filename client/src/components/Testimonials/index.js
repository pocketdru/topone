import React from "react";
import "./style.css";
import GoogleIcon from '../../assets/images/testimonials/4.png'; 


function Testimonials () { 
    return (
        <section className="testimonials pt-5" id="testimonials">
            <div className="container">
                <div className="row sliders">
                    <div className="card-deck slider">
                        <div className="slider-wrapper">
                        <img className="card-img-top" src={GoogleIcon} alt="google review"></img>
                            <div className="slider">
                                <div className="card slider-text-1">
                                    <div className="card-body">
                                        <p className="card-text">We use them every year for transporting our vehicles. Always on time and never any hassle. <span className="font-weight-bold">Great</span> group to work with.</p>
                                    </div>
                                    <p className="card-text font-weight-bold">Mark H - Denver, CO</p>
                                </div>
                                <div className="card slider-text-2">
                                    <div className="card-body">
                                        <p className="card-text">Great and friendly company everything was very  professionally taken care off...</p>
                                    </div>
                                    <p className="card-text font-weight-bold">Dima P - Jacksonville, FL</p>
                                </div>
                                <div className="card slider-text-3">
                                    <div className="card-body">
                                        <p className="card-text">Very reliable company. Alex the driver is punctual and professional. A+ for the company and services they provided.I will definitely have business with Top One again!</p>
                                    </div>
                                    <p className="card-text font-weight-bold">Maxim G - Burbank, CA</p>
                                </div>
                                <div className="card slider-text-3">
                                    <div className="card-body">
                                        <p className="card-text"><span className="font-weight-bold">Positive:</span><span className="font-italic"> Professionalism, Punctuality, Quality</span><br/>
                                        Great costumer service! Keep up the good work!</p>
                                    </div>
                                    <p className="card-text font-weight-bold">Tempus Logix - Tujunga, CA</p>
                                </div>                         
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;