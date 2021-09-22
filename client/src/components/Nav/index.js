import React from "react";
import "./style.css";
import logo from "../../assets/images/nav/logo-3.png";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
// import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function Nav() {
  return (
    <section className="nav-background">
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
          <div className="navbar-brand position-absolute px-2 py-1" href="/">
              <img src={logo} className="d-block align-top m-auto" alt="" loading="lazy"/>
              <a className="flex-sm-fill d-block" href="/">Top One<br/><span className="transportation">Transportation</span>
              <br/>
              <span className="transportation">since 2008</span></a>
          </div>
        </div>
      {/* <div className="col-md-9 col-lg-9">
        <nav className="nav navbar d-flex justify-content-end">
          <a className="nav-link text-sm-center mt-2 mb-3" target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/company/zip-2-zip">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a className="nav-link text-sm-center mt-2 mb-3" target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/company/zip-2-zip">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          </nav>
      </div> */}
      </div>
    </div> 
    </section> 
  );
}

export default Nav;