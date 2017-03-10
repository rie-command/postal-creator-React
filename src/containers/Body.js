/**
 * Created by ftalaev on 10.03.17.
 */
/**
 * Created by pbxadmin on 07.03.17.
 */
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import BackgroundColorControl from '../components/BackgroundColorControl'
import DownloadImageButton from '../components/DownloadImageButton'
import Image from '../components/Image'
import ImageSizeControl from '../components/ImageSizeControl'
import TextControl from '../components/TextControl'
import TextInput from '../components/TextInput'
import * as imageActions from '../actions/ImageActions'
import * as backgroundActions from '../actions/BackgroundActions'
import * as textActions from '../actions/TextActions'

class Body extends Component {
    render() {
        const { text, background, image } = this.props
            , { changeImageSize } = this.props.imageActions
            , { changeBgColor } = this.props.backgroundActions
            , { changeTextColor, changeFont } = this.props.textActions;

        return (<div className='body'>
                    <ImageSizeControl actions={changeImageSize}/>
                    <BackgroundColorControl actions={changeBgColor}/>
                    <TextInput actions={this.props.textActions}/>
                    <TextControl actions={Object.assign({}, changeTextColor,  changeFont)}/>
                    <Image text={text} background={background}/>
                    <DownloadImageButton/>
               </div>)
    }
}

function mapStateToProps(state) {
    return {
        image: state.image,
        background: state.background,
        text: state.text
    }
}

function mapDispatchToProps(dispatch) {
    return {
        imageActions: bindActionCreators(imageActions, dispatch),
        backgroundActions: bindActionCreators(backgroundActions, dispatch),
        textActions: bindActionCreators(textActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Body)