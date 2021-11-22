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
                <form>
                    <div className="form-group col-md-2">
                        <label htmlFor="puZip">pu zip code</label>
                        <input ref="puZip" type="text" className="form-control" id="puZip" aria-describedby="emailHelp" placeholder="pick up zip" onChange={handleChange("puZip")}
                        defaultValue={values.puZip}/>
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="delZip">delivery zip</label>
                        <input ref="delZip" type="text" className="form-control" id="delZip" placeholder="delivery zip"
                        onChange={handleChange("delZip")}
                        defaultValue={values.delZip}/>
                    </div>
                    <div className="form-group">
                        <button className="btn" onClick={this.continue}>
                            Continue
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default FormPersonalDetails;