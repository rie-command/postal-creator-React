/**
 * Created by ftalaev on 10.03.17.
 */
import React, { PropTypes, Component } from 'react'

export default class ImageSizeControl extends Component {

    render() {
        return (
            <div className="img-size">
                <p>IMAGE SIZE</p>
                <select>
                    <option>13 x 13 cm</option>
                    <option>13 x 18 cm</option>
                    <option>18 x 13 cm</option>
                    <option>20 x 20 cm</option>
                    <option>20 x 30 cm</option>
                    <option>30 x 20 cm</option>
                    <option>30 x 30 cm</option>
                    <option>30 x 40 cm</option>
                    <option>40 x 30 cm</option>
                    <option>30 x 45 cm</option>
                    <option>45 x 30 cm</option>
                    <option>45 x 15 cm</option>
                </select>
            </div>
        )
    }
}

ImageSizeControl.propTypes = {
    // color: PropTypes.number.isRequired
};