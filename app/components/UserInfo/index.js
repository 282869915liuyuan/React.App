/**
 * Created by yuanss on 2017/5/31.
 */
import React,{Component} from 'react';

export default class UserInfo extends Component{
    render(){
        return(
            <div className="user-info">
                用户名：{this.props.userInfo.username}
                城市：{this.props.userInfo.cityName}
            </div>
        )
    }
};
