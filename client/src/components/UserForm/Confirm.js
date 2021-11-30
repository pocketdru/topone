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
        console.log(values.carPrice);
        var price = values.milePrice + values.carPrice;

        return (
            <div>
                <p>{values.name}</p>
                <p>{values.year}</p>
                <p>{values.model}</p>
                <p>{values.make}</p>
                <p>{values.trim}</p>
                <p>{values.milePrice}</p> 
                <p>{price}</p>
                <div className="form-group">
                <form className="contact-form needs-validation pb-4" onSubmit={this.sendEmail}>
                    <div className="form-row">
                    <div className="form-group col-md-4">     
                        <label>Your Name</label>
                        <input defaultValue={values.name} type="text" name="from_name" className="form-control" required hidden/>
                    </div>
                    <div className="form-group col-md-4">
                        <label>Your Email</label>
                        <input defaultValue={values.email} type="email" name="from_email" className="form-control" required hidden/>
                    </div>
                    <div className="form-group col-md-4">
                        <label>Your phone number</label>
                        <input defaultValue={values.phone} type="tel" name="phone" className="form-control" placeholder="optional" hidden/>
                    </div>
                    <div className="form-group col-md-4">
                        <label>Your phone number</label>
                        <input defaultValue={values.puZip} type="tel" name="puZip" className="form-control" placeholder="optional" required hidden/>
                    </div>
                    <div className="form-group col-md-4">
                        <label>Your phone number</label>
                        <input defaultValue={values.delZip} type="tel" name="delZip" className="form-control" placeholder="optional" required hidden/>
                    </div>
                    <div className="form-group col-md-4">
                        <label>Your phone number</label>
                        <input defaultValue={values.year} type="tel" name="year" className="form-control" placeholder="optional" required hidden/>
                    </div>
                    <div className="form-group col-md-4">
                        <label>Your phone number</label>
                        <input defaultValue={values.model} type="tel" name="model" className="form-control" placeholder="optional" required hidden/>
                    </div>
                    <div className="form-group col-md-4">
                        <label>Your phone number</label>
                        <input defaultValue={values.make} type="tel" name="make" className="form-control" placeholder="optional" required hidden/>
                    </div>
                    <div className="form-group col-md-4">
                        <label>Your phone number</label>
                        <input defaultValue={values.trim} type="tel" name="trim" className="form-control" placeholder="optional" required hidden/>
                    </div>
                    <div className="form-group col-md-4">
                        <label>Your phone number</label>
                        <input defaultValue={price} type="tel" name="price" className="form-control" placeholder="optional" required hidden/>
                    </div>
                    </div>
                    <input type="submit" value="SEND MESSAGE" className="btn d-block mx-auto pl-4 pr-4 pt-3 pb-3" variant="primary" />
                    </form>
                        <button className="btn" type="submit">
                            Continue
                        </button>
                    </div>
                    <div className="form-group">
                        <button className="btn" onClick={this.back}>
                            Back
                        </button>
                    </div>
            </div>
        )
    }
}

export default Confirm
