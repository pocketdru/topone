import React from "react";
import "./style.css";
import Truck1 from '../../assets/images/faq/1.jpeg'; 
import Truck2 from '../../assets/images/faq/2.jpeg'; 
import Truck3 from '../../assets/images/faq/3.jpeg'; 
import Truck4 from '../../assets/images/faq/4.jpeg'; 
import Truck5 from '../../assets/images/faq/5.jpeg'; 

function Faq () { 
    return(
        <section className="pt-5 pb-5" id="faq">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 p-0">
                        <div className="card-group">
                            <div className="card bg-dark text-white">
                                <img src={Truck1} className="card-img" alt="truck"/>
                                <div className="card-img-overlay">
                                    <h5 className="card-title">How do I get a quote for shipping?</h5>
                                    <a className="btn d-block mx-auto" href="/faq#left-tabs-tab-pricing">See more</a>
                                </div>
                            </div>
                            <div className="card bg-dark text-white">
                                <img src={Truck2} className="card-img" alt="truck"/>
                                <div className="card-img-overlay">
                                    <h5 className="card-title">How do I pay for my auto shipping?</h5>
                                    <a className="btn d-block mx-auto" href="/faq#uncontrolled-tab-tab-pricing">See more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 p-0">
                        <div className="card-group second-row">
                            <div className="card bg-dark text-white">
                                <img src={Truck3} className="card-img" alt="truck"/>
                                <div className="card-img-overlay">
                                    <h5 className="card-title">Can I pay with my credit card?</h5>
                                    <a className="btn d-block mx-auto" href="/faq#left-tabs-tab-pricing">See more</a>
                                </div>
                            </div>
                            <div className="card bg-dark text-white">
                                <img src={Truck4} className="card-img" alt="truck"/>
                                <div className="card-img-overlay">
                                    <h5 className="card-title">How do I get my car ready for shipment?</h5>
                                    <a className="btn d-block mx-auto" href="/faq#left-tabs-tab-pricing">See more</a>
                                </div>
                            </div>
                            <div className="card bg-dark text-white">
                                <img src={Truck5} className="card-img" alt="truck"/>
                                <div className="card-img-overlay">
                                    <h5 className="card-title">Can I ship my vehicle if it isn't running?</h5>
                                    <a className="btn d-block mx-auto" href="/faq#left-tabs-tab-pricing">See more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq;