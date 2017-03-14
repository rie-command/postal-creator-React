/**
 * Created by ftalaev on 10.03.17.
 */
import React, { PropTypes, Component } from 'react'

export default class TextInput extends Component {
    render() {
        const { changeText } = this.props.actions;

        let handleKey = (e) => {
            changeText(e.target.value)
        };

        return (
            <div className="text">
                <p>TEXTO</p>
                <input id="textInput" type="text" ref="input" onKeyUp={handleKey}/>
            </div>
        )
    }
}
