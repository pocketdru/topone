import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const {values, handleChange} = this.props;
        return (
            <section id="email">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <form onSubmit={this.continue} className="contact-form">
                    <div className="form-group col-md-12">
                        <label htmlFor="name">Your name</label>
                        <input name="from_name" type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Name" required
                        onChange={handleChange("name")}
                        defaultValue={values.name} required/>
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="email">Your email</label>
                        <input name="from_email" type="text" className="form-control" id="email" placeholder="Email"
                        onChange={handleChange("email")}
                        defaultValue={values.email} required/>
                    </div>
                    <div className="form-group col-md-12">
                        <select value={values.date} onChange={handleChange("date")} required>
                            <option value="">First avalible date</option>
                            <option value="asap">As soon as possible</option>
                            <option value="week">Within 2 weeks</option>
                            <option value="month">Within 30 days</option>
                            <option value="later">More than 30 days</option>
                        </select> 
                    </div>
                    <div className="form-group col-md-12">
                        <label>Your phone number</label>
                        <input type="tel" name="contact_number" className="form-control" placeholder="optional"
                        onChange={handleChange("phone")}
                        defaultValue={values.phone}/>
                    </div>
                    <div className="form-group d-flex justify-content-between">
                        <button className="btn" onClick={this.back}>
                            Back
                        </button>
                        <button className="btn" type="submit">
                            Calculate price <FontAwesomeIcon icon={faArrowRight}/>
                        </button>
                    </div>
                        </form>
                    </div>
                    </div>
                </div>
           </section>
        )
    }
}

export default FormPersonalDetails;