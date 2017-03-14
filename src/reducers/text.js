/**
 * Created by ftalaev on 10.03.17.
 */
import {
    CHANGE_FONT,
    CHANGE_TEXT_COLOR,
    CHANGE_TEXT
} from '../constants/Text'

const initialState = {
    font: 'Arial',
    textColor: 'black',
    value: 'Example'
};

export default function background(state = initialState, action) {
    switch (action.type) {
        case CHANGE_FONT:
            return {...state, font: action.payload};

        case CHANGE_TEXT_COLOR:
            return {...state, textColor: action.payload};

        case CHANGE_TEXT:
            return {...state, value: action.payload};

        default:
            return state;
    }
}