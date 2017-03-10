/**
 * Created by ftalaev on 10.03.17.
 */
import React, { PropTypes, Component } from 'react'

export default class FontTemplate extends Component {

    render() {
        const { color } = this.props;
        return (
            <div className="text-template">TEXT TEXT TEXT TEXT TEXT TEXT TEXT</div>
        )
    }
}

FontTemplate.propTypes = {
    // color: PropTypes.string.isRequired
};