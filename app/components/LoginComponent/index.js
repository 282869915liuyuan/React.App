/**
 * Created by yuanss on 2017/5/31.
 */
import React,{Component} from 'react';
import './index.less';
export default class LoginComponent extends Component{
    constructor(){
        super();
        this.state={
            val:''
        }
    }
    render(){
        return (

            <div className="login-component">
                {/*ref 非受控 受控onChange+state*/}
                <input type="text" value={this.state.val} onChange={this.changeValue.bind(this)}
                placeholder="请输入用户名"/>
                <button onClick={this.login.bind(this)}>登录</button>
            </div>
        )
    }
    changeValue(e){
        this.setState({
            val:e.target.value
        })
    }
    login(){
      if(this.state.val!==""){
          this.props.login(this.state.val)
      }
    }
};
