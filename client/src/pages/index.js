import React, { Component } from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import Contact from "../components/Contact";
import Advantages from "../components/Advantages";
import Steps from "../components/Steps";
import Testimonials from "../components/Testimonials";
import Services from "../components/Services";
import Faq from "../components/Faq";
import Footer from "../components/Footer";

class Home extends Component {
    render() {
        return (
        <div>
            <Nav/>
            <Jumbotron/>
            <section className="contact-background">
                <div className="container" id="contact">
                    <div className="row">
                        <div className="col-md-12">
                        <Contact/>
                        </div>
                    </div>
                </div>
            </section>
            <Advantages />
            <Steps />
            <Testimonials/>
            <Services />
            <Faq />
            <Footer />
        </div>
        ) 
    }
}

  export default Home;