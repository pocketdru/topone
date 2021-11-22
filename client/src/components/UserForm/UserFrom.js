import React, { Component } from 'react'

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
        make: ""
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
        
        return (
            <div>
                
            </div>
        )
    }
}

export default UserFrom
