/**
 * Created by yuanss on 2017/5/30.
 */
// /api/ad

import {get} from '../index'
export function getAd() {
    return get('/api/ad');
}
//获取list表数据
export function getList(city,page) {
    return get('/api/list/'+city+'/'+page)
}
