import React, { Component } from 'react'

export class UserFrom extends Component {
    state = {
        step: 1,
        name: "",
        email: "",
        phone: ""
    }

    //proceed to next step 
    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        })
    }
     
    // go back to prev step 
    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        })
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default UserFrom
