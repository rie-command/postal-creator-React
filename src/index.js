/**
 * Created by ftalaev on 07.03.17.
 */
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Header from './containers/Header'
import Body from './containers/Body'
import './styles/app.less'
import configureStore from './store/configureStore'

const store = configureStore()

render(
    <Provider store={store}>
        <div className='app'>
            <Header />
            <Body />
        </div>
    </Provider>,
    document.getElementById('root')
)
