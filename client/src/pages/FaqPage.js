import React, { Component } from "react";
import Nav from "../components/Nav";
import SiteMap from "../components/SiteMap";
import Footer from "../components/Footer";
class FaqPage extends Component {
    render() {
        return (
        <div className="faqPage">
            <Nav/>
            <SiteMap />
            <Footer />
        </div>
        ) 
    }
}

  export default FaqPage;