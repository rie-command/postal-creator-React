/**
 * Created by ftalaev on 10.03.17.
 */
import { CHANGE_BACKGROUND_COLOR } from '../constants/Background'

export function changeBgColor(color) {
    return (dispatch) => {
        dispatch({
            type: CHANGE_BACKGROUND_COLOR,
            payload: color
        });
    }
}
