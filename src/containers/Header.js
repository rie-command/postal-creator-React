/**
 * Created by ftalaev on 10.03.17.
 */
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import FontTemplate from '../components/Text/FontTemplate'
import TextColor from '../components/Text/TextColor'
import * as textActions from '../actions/TextActions'

class Header extends Component {
    render() {
        const { text } = this.props
            , { changeTextColor } = this.props.textActions;

        return <div className='header'>
            <TextColor color={text.color} actions={changeTextColor}/>
            <FontTemplate color={text.color} actions={changeTextColor}/>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        text: state.text
    }
}

function mapDispatchToProps(dispatch) {
    return {
        textActions: bindActionCreators(textActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)