/**
 * Created by william on 2017/7/6.
 */
import types from '../constants';
import API from '../api/API';

let ActionCreators = {
    fetchChecklists() {
        return (dispatch) => {
            dispatch({type: types.REQUEST_CHECKLISTS});
            API.fetchChecklistsAsync().then(
                (data) => dispatch({type: types.RECEIVE_CHECKLISTS, success: true, data}),
                (error) => dispatch({type: types.RECEIVE_CHECKLISTS, success: false, error})
            )
        }
    },
};

export default ActionCreators;