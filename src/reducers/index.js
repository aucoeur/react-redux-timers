import { combineReducers } from 'redux';

import timerReducer from './timers-reducers';
import selectTimerReducer from './select-timer-reducer';

export default combineReducers({
    timers: timerReducer,                   // array
    selectedTimer: selectTimerReducer,      // int/number
});