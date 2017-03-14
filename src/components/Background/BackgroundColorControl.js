/**
 * Created by ftalaev on 10.03.17.
 */
import React, { PropTypes, Component } from 'react';
import { SwatchesPicker } from 'react-color';

export default class BackgroundColorControl extends Component {

    constructor() {
        super();
        this.state = {
            isColorPicking: false
        };
    }


    render() {

        let focusHandler = () => {
            // this.setState({isColorPicking: !this.state.isColorPicking})
            console.info('focus')
        };

        let blurHandler = () => {
            // this.setState({isColorPicking: !this.state.isColorPicking})
            console.info('blur')
        };

        // const { color } = this.props;
        return (
            <div className="background-control">
                <p>BACKGROUND COLOR</p>
                <div className="bg-color">
                    <div className="white square"></div>
                    <div className="black square"></div>
                    <div className="color-picker"
                         onClick={() => {this.setState({isColorPicking: true})}}
                         onBlur={blurHandler}
                         onFocus={focusHandler}
                    ></div>
                        {this.state.isColorPicking && <div onBlur={blurHandler} onFocus={focusHandler} onClick={() => {console.info('dsdsd')}}> <SwatchesPicker onBlur={blurHandler} onClick={() => {console.info('dsdsd')}}/></div>}

                </div>
            </div>
        )
    }
}

BackgroundColorControl.propTypes = {
    // color: PropTypes.number.isRequired
};