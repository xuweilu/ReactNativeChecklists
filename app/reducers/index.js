/**
 * Created by william on 2017/7/6.
 */
import {combineReducers} from 'redux';
import checklists from './checklists';

const rootReducer = combineReducers({
    checklists,
});

export default rootReducer;