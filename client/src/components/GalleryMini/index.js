import React from "react";
import "./style.css";
import Truck1 from '../../assets/images/galleryMini/1.gif'; 
import Truck2 from '../../assets/images/galleryMini/2.gif';
import Truck3 from '../../assets/images/galleryMini/3.gif'; 

function GalleryMini () {
    return (
        <section className="galleryMini">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 card-background">
                        <div className="card">
                        <div className="card-body mt-5">
                            <h5 className="card-title mt-5 mb-5">Fleet Gallery</h5>
                            <button className="btn card-text mb-5 pl-4 pr-4">View All</button>
                        </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 mt-5">
                    <div className="card-deck">
                    <div className="card mt-1">
                        <img className="card-img-top" src={Truck1} alt="truck"/>
                    </div>
                    <div className="card mt-1">
                        <img className="card-img-top" src={Truck2} alt="truck"/>
                    </div>
                    <div className="card mt-1">
                        <img className="card-img-top" src={Truck3} alt="truck"/>
                    </div>
                    </div>
                    </div>
                </div>
                </div>
        </section>
    )
}

export default GalleryMini;