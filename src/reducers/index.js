/**
 * Created by pbxadmin on 07.03.17.
 */
import { combineReducers } from 'redux'
import background from './background'
import text from './text'
import image from './image'

export default combineReducers({
    background
    , text
    , image
})