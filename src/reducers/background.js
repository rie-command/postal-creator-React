/**
 * Created by ftalaev on 10.03.17.
 */
import { CHANGE_BACKGROUND_COLOR } from '../constants/Background'

const initialState = {
    color: 'white'
};

export default function background(state = initialState, action) {
    switch (action.type) {
        case CHANGE_BACKGROUND_COLOR:
            return {...state, color: action.payload};

        default:
            return state;
    }
}