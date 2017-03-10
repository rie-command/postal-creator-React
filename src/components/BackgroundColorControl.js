/**
 * Created by ftalaev on 10.03.17.
 */
import React, { PropTypes, Component } from 'react'

export default class BackgroundColorControl extends Component {

    render() {
        // const { color } = this.props;
        return (
            <div className="background-control">
                <p>BACKGROUND COLOR</p>
                <div className="bg-color">
                    <div className="white square"></div>
                    <div className="black square"></div>
                    <input type="color" id='table-backgroundColor'/>
                </div>
            </div>
        )
    }
}

BackgroundColorControl.propTypes = {
    // color: PropTypes.number.isRequired
};