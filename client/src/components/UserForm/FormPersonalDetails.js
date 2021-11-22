import React, { Component } from 'react'

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
            <div>
                <form onSubmit={this.continue}>
                    <div className="form-group col-md-2">
                        <label htmlFor="name">Your name</label>
                        <input ref="name" name="from_name" type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Name" required
                        onChange={handleChange("name")}
                        defaultValue={values.name}/>
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="email">Your email </label>
                        <input ref="email" name="from_email" type="text" className="form-control" id="email" placeholder="Email"
                        onChange={handleChange("email")}
                        defaultValue={values.email} required/>
                    </div>
                    <div className="form-group col-md-2">
                    <div className="form-group col-md-4">
                        <label>Your phone number</label>
                        <input type="tel" name="contact_number" className="form-control" placeholder="optional"
                        onChange={handleChange("number")}
                        defaultValue={values.number}/>
                    </div>
                    </div>
                    <div className="form-group">
                        <button className="btn" onClick={this.continue}>
                            Continue
                        </button>
                    </div>
                    <div className="form-group">
                        <button className="btn" type="submit">
                            Back
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default FormPersonalDetails;