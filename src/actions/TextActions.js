/**
 * Created by ftalaev on 10.03.17.
 */
import {
    CHANGE_FONT,
    CHANGE_TEXT_COLOR,
    CHANGE_TEXT
} from '../constants/Text'

export function changeTextColor(color) {
    return (dispatch) => {
        dispatch({
            type: CHANGE_TEXT_COLOR,
            payload: color
        });
    }
}

export function changeFont(font) {
    return (dispatch) => {
        dispatch({
            type: CHANGE_FONT,
            payload: font
        });
    }
}

export function changeText(text) {
    return (dispatch) => {
        dispatch({
            type: CHANGE_TEXT,
            payload: text
        });
    }
}

