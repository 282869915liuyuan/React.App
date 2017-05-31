/**
 * Created by yuanss on 2017/5/30.
 */
import {createStore} from 'redux';
import  reducers from '../reducers';
export function configureStore(initState) {
    return createStore(reducers,initState)
}
//(插件 翻墙，查看状态)redux-tools 得配置第三个参数（window.devToolsExtension?window.devToolsExtension():undefined;
