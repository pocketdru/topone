import React, { useEffect } from "react";
import "./style.css";
import Customer from '../../assets/images/steps/computer-user.png'; 
import Truck from '../../assets/images/steps/flatbed-truck.png'; 
import Delivery from '../../assets/images/steps/garage.png';
import Aos from "aos";
import "aos/dist/aos.css" 

function Steps () {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);
    return (
        <section className="steps">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h5 className="card-title title-steps mt-5 mb-5">How it works</h5>
                    </div>
                    <div className="col-sm-12 col-md-12">
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-8 col-md-8">
                                <div className="card-body">
                                <p className="card-text"><small className="text-muted">Step 1</small></p>
                                    <h5 className="card-title">Car Shipping Quote</h5>
                                    <p className="card-text">Begin by getting an instant quote by <a href="/#email" className="link">sending us an email</a> with all vehicle details, or by speaking with a car shipping specialist at (303) 353-8362.</p>
                                    <div className="details">
                                        <p className="card-text fw-bold">Secure Online Shipment Reservation</p>
                                        <p className="card-text">
                                            Schedule a convenient time for pickup via our secure online booking form or by phone with a shipping agent.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 col-md-4">
                            <img src={Customer} className="img-fluid rounded-start" alt="step 1"/>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12">
                    <div className="card mb-3" data-aos="fade-up">
                        <div className="row g-0">
                            <div className="col-4 col-md-4">
                            <img src={Truck} className="img-fluid rounded-start" alt="step 2"/>
                            </div>
                            <div className="col-8 col-md-8">
                            <div className="card-body">
                                <p className="card-text"><small className="text-muted">Step 2</small></p>
                                    <h5 className="card-title">Vehicle Pick Up</h5>
                                    <p className="card-text">Your shipment will be assigned to the carrier anf the driver contant number will be given to you. On the day of pickup, your vehicle will be safely loaded and will begin heading to the destination.</p>
                                    <div className="details">
                                        <p className="card-text fw-bold">Shipment Tracking</p>
                                        <p className="card-text">
                                            To track your shipment please give us a call at (303) 353-8362 or email us with your order number.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12">
                    <div className="card mb-3" data-aos="fade-right">
                        <div className="row g-0">
                            <div className="col-8 col-md-8">
                            <div className="card-body">
                                <p className="card-text"><small className="text-muted">Step 3</small></p>
                                    <h5 className="card-title">Vehicle Delivery</h5>
                                    <p className="card-text">Upon arrival at the destination, your vehicle will be safely offloaded. A final inspection is completed and the driver hands over the keys.</p>
                                    <div className="details">
                                        <p className="card-text fw-bold">Leave us a review :)</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 col-md-4">
                            <img src={Delivery} className="img-fluid rounded-start" alt="step 3"/>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 

export default Steps;