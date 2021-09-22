import React from "react";
import "./style.css";
function Footer() {
    return (
        <section className="footer">
            <div className="container">
                <div className="row align-items-end">
                <div className="col-md-3">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link active" href="/#email">Request a quote</a>
                            </li>
                      </ul> 
                    </div>
                    <div className="col-md-3">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link" href="/#contact">Contact us</a>
                            </li>

                        </ul> 
                    </div>
                    <div className="col-md-3">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link active" href="/faq#left-tabs-tab-pricing">FAQs</a>
                            </li>
                        </ul> 
                    </div>
                    <div className="col-md-3">
                        <ul className="nav flex-column">
                            <li className="nav-item align-text-bottom">&copy; 2021 Top One Transportation</li>
                        </ul>                   
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Footer;