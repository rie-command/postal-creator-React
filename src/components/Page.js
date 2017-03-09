/**
 * Created by pbxadmin on 07.03.17.
 */
import React, { PropTypes, Component } from 'react'

export default class Page extends Component {
    onYearBtnClick(e) {
        this.props.getPhotos(+e.target.innerText)
        console.info('dsdsdsdsd')
    }
    render() {
        const { year, photos, fetching } = this.props
        return (<div className='ib page'>
            <p>
            <button className='btn' onClick={::this.onYearBtnClick}>1</button>{' '}
        <button className='btn' onClick={::this.onYearBtnClick}>2015</button>{' '}
        <button className='btn' onClick={::this.onYearBtnClick}>2014</button>
        </p>
            <h2>LALA LAND 3333</h2>
        <h3>{year} год</h3>
        {
            fetching ?
        <p>Загрузка...</p>
    :
    <p>У тебя {photos.length}43 фото.</p>
    }
    </div>)
    }
}

Page.propTypes = {
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    getPhotos: PropTypes.func.isRequired
}