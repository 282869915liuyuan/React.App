/**
 * Created by yuanss on 2017/5/31.
 */
import React,{Component} from 'react';
import HeaderComponent from '../../components/HeaderComponent/index';
import {connect} from 'react-redux';
import * as Action from '../../actions/userInfo';//拿到所有action对象
import {bindActionCreators} from 'redux';
import LoginComponent from '../../components/LoginComponent/index';
class Login extends Component{
    constructor(){
        super();
        this.state={
            login:false //默认不显示登录组件
        }
    }
    render(){
        return(
            <div>
              <HeaderComponent title="登录" history={this.props.history}/>
                {this.state.login?<LoginComponent login={this.login.bind(this)}/>:<div></div> }
            </div>
        )
    }
    //在这里需要写一个方法，这个方法是登录的，将用户名存入redux里；
    login(username){
        let info=this.props.userInfo;
        info.username=username;
        //更新redux中的state
        this.props.userAction.update(info);
        //登录完之后跳转到用户页
        //如果是从购买进入的需要在跳回购买页
        if(this.props.match.params.route){
            this.props.history.push(this.props.match.params.route);
        }else{
            //如果没指定跳个那个页面，那么跳回用户也
            this.props.history.push('/user');
        }

    }
    componentDidMount(){
        this.changeLogin();
    }
    changeLogin(){
        //检查是否登录.在redux中start.userInfo
        if(this.props.userInfo.username){
            return this.props.history.push('/user');
        }
        this.setState({
            login:true//显示组件
        })
    }
};
export default connect(
    state=>{
        return {userInfo:state.userInfo}
    },
    dispatch=>{
        return {userAction:bindActionCreators(Action,dispatch)}
    }
)(Login)
