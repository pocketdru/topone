import React, { Component } from 'react'
import FormLocationDetails from './FormLocationDetails'; 

export class UserFrom extends Component {
    state = {
        step: 1,
        puZip: "",
        puDel: "",
        name: "",
        email: "",
        phone: "", 
        year: "",
        model: "",
        make: "",
        trim: ""
    }

    //proceed to next step 
    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        })
    }
     
    // go back to prev step 
    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        })
    }

    //handle fields change 
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }
    render() {
        const {step} = this.state;
        const { puZip,  puDel, name, email, phone, year, model, make, trim} = this.state;
        const values = { puZip,  puDel, name, email, phone, year, model, make, trim};
        switch(step) {
            case 1: 
                return (
                <FormLocationDetails 
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                /> 
            )
            case 2: 
                return (
                <h1>FormPersonalDetails</h1>
            )
            case 3: 
                return (
                <h1>Confirm</h1>
            )
            case 4: 
                return (
            <h1>Success</h1>
        )
        }
    }
}

export default UserFrom;
