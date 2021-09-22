import React from "react";
import "./style.css";
import Tire from '../../assets/images/service/car-tire-wheel.png'; 

function Services () {
    return (
        <section className="services">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h5 className="card-title title-steps mt-5 mb-5">Services</h5>
                    </div>
                    <div className="col-md-12">
                    <div className="card-deck">
                        <div className="card">
                            <div className="card-body">
                            <h5 className="card-title">Open Carrier Car Shipping</h5>
                            <p className="card-text">Open car transport is the most popular and economical of our vehicle shipping services. With open carrier car shipping, your vehicle will be shipped door-to-door on an open trailer car carrier - most commonly seen on highways and delivering to dealerships across the country.</p>
                            <div className="card-footer d-flex justify-content-between">
                                <p className="card-text dollars"><small className="dollars">$$</small></p>
                                <img className="tire" src={Tire} alt="tire"/>
                            </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                            <h5 className="card-title">Enclosed Car Shipping</h5>
                            <p className="card-text">The Safest Way to Relocate Your Vehicle. When shipping on an enclosed car carrier, your vehicle will be completely protected from all outdoor elements that an open carrier would typically be exposed to. When you require the highest level of service, fully covered car transport is the way to go. Enclosed shipping is the VIP method of transportation.</p>
                            <div className="card-footer d-flex justify-content-between">
                                <p className="card-text"><small className="dollars">$$$$</small></p>
                                <img className="tire" src={Tire} alt="tire"/>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="card-deck">
                        <div className="card">
                            <div className="card-body">
                            <h5 className="card-title">Cross Country Car Shipping</h5>
                            <p className="card-text">When driving is not an option due to excessive distance, shipping a car across country may be the most convenient way to go.</p>
                            <div className="card-footer d-flex justify-content-between">
                                <p className="card-text"><small className="dollars">$$</small></p>
                                <img className="tire" src={Tire} alt="tire"/>
                            </div>
                        </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                            <h5 className="card-title">Seasonal Car Shipping</h5>
                            <p className="card-text">When relocating to a seasonal residence, many people find it helpful to ship their vehicle to use for the season.</p>
                            <div className="card-footer d-flex justify-content-between">
                            <p className="card-text"><small className="dollars">$$</small></p>
                            <img className="tire" src={Tire} alt="tire"/>
                            </div>
                           </div>
                        </div>   
                        </div>      
                        <div className="card-deck">
               
                        <div className="card">
                            <div className="card-body">
                            <h5 className="card-title">Dealer &amp;	Auction Shipping </h5>
                            <p className="card-text">Don’t want to waste time going to get your vehicle in person? No problem. Top One Transportation can deliver your auto from anywhere, making it even easier to buy a car online and have it delivered to your door.</p>
                            <div className="card-footer d-flex justify-content-between">
                            <p className="card-text"><small className="dollars">$$$</small></p>
                            <img className="tire" src={Tire} alt="tire"/>
                            </div>
                        </div>  
                        </div>
                        <div className="card">
                            <div className="card-body">
                            <h5 className="card-title">College car shipping services</h5>
                            <p className="card-text">
                                                        The Nationwide College Car Shipping Experts
                                                                When attending college out of state, some students choose to relocate their vehicle to their new campus.</p>
                            <div className="card-footer d-flex justify-content-between">
                            <p className="card-text"><small className="dollars">$$</small></p>
                            <img className="tire" src={Tire} alt="tire"/>
                            </div>
                            </div>
                        </div>
                    </div>
                
                </div>
                </div>
            </div>
        </section>
    )
}

export default Services;