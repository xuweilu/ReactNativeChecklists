/**
 * Created by william on 2017/7/6.
 */
import types from '../constants';
import update from 'react-addons-update';

const checklists = (state = [], action) => {
    switch (action.type) {
        case types.RECEIVE_CHECKLISTS:
            if (action.success) {
                return update(state, {$set: action.data});
            } else {
                return state;
            }
        default:
            return state;
    }
};

export default checklists;