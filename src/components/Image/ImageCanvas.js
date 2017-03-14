/**
 * Created by ftalaev on 10.03.17.
 */
import React, { PropTypes, Component } from 'react';
import { Canvas, Text } from 'react-fabricjs';

export default class ImageCanvas extends Component {

    render() {
        const { color, text, size } = this.props,
              {font, textColor, value} = text;
        let textdsdsdColor = 'blue';

        return (
            <div className="image" style={{background: 'green'}}>
                <Canvas ref="canvas" width="500" height="200" >
                        <Text
                            text={value}
                            shadow="rgba(0,0,0,0.3) 5px 5px 5px"
                            stroke={textdsdsdColor}
                            strokeWidth={4}
                            fontStyle="italic"
                            fontFamily="Hoefler Text"
                        />
                </Canvas>
            </div>
        )
    }
}

Image.propTypes = {
    // color: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    // size: PropTypes.number.isRequired
};