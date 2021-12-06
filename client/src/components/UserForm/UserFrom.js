import React, { Component } from 'react';
import "./style.css";
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
        delZip: "",
        transportType: "",
        name: "",
        email: "",
        phone: "", 
        milePrice: "",
        year: "",
        model: "",
        make: "",
        trim: ""
    }

    transportType = (selectedType) => {
        this.setState({
            transportType: selectedType
        }, ()=> {
            console.log(this.state.transportType);
        })
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

    milePrice = (milePrice) => {
        this.setState({
            milePrice: milePrice
        }, ()=> {
            console.log(this.state.milePrice)
        })
    }

    carPrice = (carPrice) => {
        this.setState({
            carPrice: carPrice
        }, ()=> {
            console.log(this.state.carPrice)
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
        this.setState({[input]: e.target.value}, ()=>{
            console.log(this.state)
        });
    }
    render() {
        const {step} = this.state;
        const { puZip, delZip, transportType, milePrice, name, email, phone, year, model, make, trim, carPrice} = this.state;
        const values = { puZip, delZip, transportType, milePrice, name, email, phone, year, model, make, trim, carPrice};
        switch(step) {
            case 1: 
                return (
                <FormLocationDetails
                    milePrice={this.milePrice}
                    transportType={this.transportType}
                    state={this.state}
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                /> 
            )
            case 2: 
                return (
            <UserCar 
                year={this.year}
                model={this.model}
                make={this.make}
                trim={this.trim}
                carPrice={this.carPrice}
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
            />
            )
            case 3: 
            return (
            <FormPersonalDetails 
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
