//合并所有reducers 导出，让store使用
import {combineReducers} from 'redux';
import {userInfo} from  './userInfo';
export default combineReducers({
    userInfo
});

