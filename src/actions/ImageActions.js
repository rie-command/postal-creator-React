/**
 * Created by ftalaev on 10.03.17.
 */
import {
    CHANGE_IMAGE_SIZE,
    DOWNLOAD_IMAGE
} from '../constants/Image'

export function changeImageSize(size) {
    return (dispatch) => {
        dispatch({
            type: CHANGE_IMAGE_SIZE,
            payload: size
        });
    }
}