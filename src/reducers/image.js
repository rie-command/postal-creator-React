/**
 * Created by ftalaev on 10.03.17.
 */

import {
    CHANGE_IMAGE_SIZE,
    DOWNLOAD_IMAGE
} from '../constants/Image'

const initialState = {
    size: {height: 20,
           width: 30
    }
};

export default function background(state = initialState, action) {
    switch (action.type) {
        case CHANGE_IMAGE_SIZE:
            return {...state, size: action.payload};

        default:
            return state;
    }
}