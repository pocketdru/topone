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
