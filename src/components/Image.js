/**
 * Created by ftalaev on 10.03.17.
 */
import React, { PropTypes, Component } from 'react'

export default class Image extends Component {

    render() {
        const { color, text, size } = this.props;
        return (
            <div className="image"></div>
        )
    }
}

Image.propTypes = {
    // color: PropTypes.string.isRequired,
    // text: PropTypes.string.isRequired,
    // size: PropTypes.number.isRequired
};