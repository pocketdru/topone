import React, { Component } from 'react'
import emailjs from 'emailjs-com';

export class Confirm extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    sendEmail = e => {
        e.preventDefault();
    
        emailjs.sendForm('service_752idno', 'template_f0mcw4u', e.target, 'user_Qv5eynQ9bFuznSm26mu6r')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        //   handleShow();
          e.target.reset();
      }
    render() {
        const {values, handleChange, state} = this.props;
        console.log(values.date);
        console.log(values.operable);
        var price = values.milePrice + values.carPrice;
        if (values.transportType === "enclosed") {
            price = price+530;
        }
        if (values.date === "week") {
            price = price - 10;
        } else if (values.date === "month") {
            price = price - 20;
        } else if (values.date === "later") {
            price = price - 25;
        }
        if (values.operable === "no" ) {
            price = price + 150;
        }
        console.log(values.milePrice);
        console.log(price);
        console.log(values.phone);

        return (
            <section id="email">
                <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <div className="form-group contact-form mt-3 mb-3 pt-3">
                        <h3 className="card-title">Shipment details</h3>
                        <p className="card-text">Confirm the information you entered</p>
                        <ul className="list-group">
                            <li className="card-text">{values.name}</li>
                            <li className="card-text">Pick up from: {values.puZip}</li>
                            <li className="card-text">Delivery: {values.delZip}</li>
                            <li className="card-text">{values.year} {values.model} {values.make}</li>
                            <li className="card-text">Transport type: {values.transportType}</li>
                            <li className="card-text">Sending a copy of a quote to: {values.email}</li>
                            <li className="card-text">Phone number: {values.phone ? values.phone : "Not provided"}</li>

                        </ul>
                        <form className="needs-validation pb-4" onSubmit={this.sendEmail}>
                            <input defaultValue={values.name} type="text" name="from_name" className="form-control" required hidden/>
                            <input defaultValue={values.email} type="email" name="from_email" className="form-control" required hidden/>
                            <input defaultValue={values.phone} type="tel" name="phone" className="form-control" placeholder="optional" hidden/>
                            <input defaultValue={values.puZip} type="tel" name="puZip" className="form-control" placeholder="optional" required hidden/>
                            <input defaultValue={values.delZip} type="tel" name="delZip" className="form-control" placeholder="optional" required hidden/>
                            <input defaultValue={values.year} type="tel" name="year" className="form-control" placeholder="optional" required hidden/>
                            <input defaultValue={values.model} type="tel" name="model" className="form-control" placeholder="optional" required hidden/>
                            <input defaultValue={values.make} type="tel" name="make" className="form-control" placeholder="optional" required hidden/>
                            <input defaultValue={values.trim} type="tel" name="trim" className="form-control" placeholder="optional" required hidden/>
                            <input defaultValue={price} type="tel" name="price" className="form-control" placeholder="optional" required hidden/>
                            <div className="form-group d-flex justify-content-center">
                            <button className="btn" type="submit">
                                Confirm!
                            </button>
                        </div>
                        <div className="form-group d-flex justify-content-center">
                            <button className="btn" onClick={this.back}>
                                Back
                            </button>
                        </div>
                        </form>
                    </div>
                    </div>
                    </div>
                </div>
           </section>
        )
    }
}

export default Confirm
