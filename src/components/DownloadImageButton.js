/**
 * Created by ftalaev on 10.03.17.
 */
import React, { PropTypes, Component } from 'react'

export default class DownloadImageButton extends Component {
    render() {
        // const { color, text, size } = this.props;
        return (
            <div className="image-download">
                <button>DOWNLOAD HIGH RESOLUTION IMAGE</button>
            </div>
        )
    }
}

DownloadImageButton.propTypes = {
    // color: PropTypes.string.isRequired,
};