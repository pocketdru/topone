import React, { Component } from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import Contact from "../components/Contact";
import Advantages from "../components/Advantages";
import Email from "../components/Email";
import Steps from "../components/Steps";
// import Quote from "../components/Quote";
// import GalleryMini from "../components/GalleryMini";
import Testimonials from "../components/Testimonials";
import Services from "../components/Services";
import Faq from "../components/Faq";
// import Quote from "../components/Quote";
import Footer from "../components/Footer";

class Home extends Component {
    render() {
        return (
        <div>
            <Nav/>
            <Jumbotron/>
            <Email/>
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
            {/* <Quote/> */}
            <Testimonials/>
            <Services />
            <Faq />
            <Footer />
        </div>
        ) 
    }
}

  export default Home;