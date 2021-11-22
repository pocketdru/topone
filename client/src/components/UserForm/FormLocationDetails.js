import React, { Component } from 'react'

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const {values, handleChange} = this.props;
        return (
            <div>
                <form onSubmit={this.continue}>
                    <div className="form-group col-md-2">
                        <label htmlFor="puZip">pu zip code</label>
                        <input ref="puZip" type="text" className="form-control" id="puZip" aria-describedby="emailHelp" placeholder="pick up zip" onChange={handleChange("puZip")}
                        defaultValue={values.puZip} required/>
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="delZip">delivery zip</label>
                        <input ref="delZip" type="text" className="form-control" id="delZip" placeholder="delivery zip"
                        onChange={handleChange("delZip")}
                        defaultValue={values.delZip}
                        required/>
                    </div>
                    <div className="form-group">
                        <button className="btn" type="submit">
                            Continue
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default FormUserDetails;
 