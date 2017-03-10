/**
 * Created by ftalaev on 10.03.17.
 */
import React, { PropTypes, Component } from 'react'

export default class TextControl extends Component {

    render() {
        // const { color } = this.props;
        return (
            <div className="text-control">
                <p>TEXT COLOR</p>
                <div className="text-color">
                    <div className="text-color-white"></div>
                    <div className="text-color-black"></div>
                </div>
                <div className="font-selector">
                    <p>FONT</p>
                    <div className="font-selector-normal">Aa</div>
                    <div className="font-selector-italic">Aa</div>
                    <div className="font-selector-bold">Aa</div>
                    <div className="font-selector-underline">Aa</div>
                </div>
            </div>
        )
    }
}

TextControl.propTypes = {
    // color: PropTypes.number.isRequired
};