/**
 * Created by ftalaev on 10.03.17.
 */
import React, { PropTypes, Component } from 'react'

export default class TextColor extends Component {

    render() {
        const { color } = this.props
        return (
            <div className="text-color"></div>
        )
    }
}

TextColor.propTypes = {
    // color: PropTypes.string.isRequired
};