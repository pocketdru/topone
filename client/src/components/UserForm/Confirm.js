import React, { Component } from 'react'

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const {values, handleChange, state} = this.props;

        return (
            <div>
                <p>{values.name}</p>
                <p>{values.year}</p>
                <p>{state}</p> 
                <div className="form-group">
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
