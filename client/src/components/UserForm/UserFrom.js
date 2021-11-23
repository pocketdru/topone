import React, { Component } from 'react'
import FormLocationDetails from './FormLocationDetails'; 
import FormPersonalDetails from './FormPersonalDetails';
import UserCar from './UserCar';
import Confirm from './Confirm';

export class UserFrom extends Component {
    constructor(props) {
        super(props)
        // this.selectYear = this.selectYear.bind(this)
      }
    state = {
        step: 1,
        puZip: "",
        puDel: null,
        name: "",
        email: "",
        phone: "", 
        year: "22",
        model: "",
        make: "",
        trim: ""
    }

    year = (selectedYear) => {
        this.setState({
            year: selectedYear
        }, ()=> {
            console.log(this.state.year)
        })
    }

    model = (selectedModel) => {
        this.setState({
            model: selectedModel
        }, ()=> {
            console.log(this.state.model)
        })
    }

    make = (selectedMake) => {
        this.setState({
            make: selectedMake
        }, ()=> {
            console.log(this.state.make)
        })
    }    
    
    trim = (selectedTrim) => {
        this.setState({
            trim: selectedTrim
        }, ()=> {
            console.log(this.state.trim)
        })
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
        const { puZip, delZip, name, email, phone, year, model, make, trim} = this.state;
        const values = { puZip, delZip, name, email, phone, year, model, make, trim};
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
                <FormPersonalDetails 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            )
            case 3: 
            return (
            <UserCar 
                year={this.year}
                model={this.model}
                make={this.make}
                trim={this.trim}
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
            />
        )
            case 4: 
            return (
                <Confirm
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
                 />
            )
            case 5: 
                return (
            <h1>Success</h1>
        )
        }
    }
}

export default UserFrom;
