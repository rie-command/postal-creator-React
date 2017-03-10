/**
 * Created by ftalaev on 10.03.17.
 */
import React, { PropTypes, Component } from 'react'

export default class TextInput extends Component {

    render() {
        // const { color } = this.props;
        return (
            <div className="text">
                <p>TEXTO</p>
                <input id="text-input" type="text" />
            </div>
        )
    }
}

TextInput.propTypes = {
    // color: PropTypes.number.isRequired
};