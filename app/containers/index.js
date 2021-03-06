import React,{Component} from 'react';
import RouterMap from "../routes/index";
import {connect} from 'react-redux';
//绑定actionCreators组成的对象
import {bindActionCreators} from 'redux';
//获取所有actionCreators
import * as Actions from '../actions/userInfo'
import {getStorage} from '../local';
 class App extends Component{
    constructor(){
        super();
        this.state = {
            done:false
        }
    }
    render(){
        return (
            <div>
                {/*如果当路径为/ RouterMap 就会变为Home组件*/}
                {this.state.done?<RouterMap/>:<div>正在加载</div>}
            </div>
        )
    }
    componentDidMount(){
        let cityName=getStorage('cityName');
        if(cityName==null){
            cityName='杭州'
        }
        this.props.userActions.update({
            cityName
        })
        //先去本地查找 是否存储过localstorage名字cityName
        this.setState({
            done:true
        });

    }
}
export default connect(
    state=>{
        return {

        }
    },
    dispatch=>{
        return {
            userActions:bindActionCreators(Actions,dispatch)
        }
    }
)(App)//将状态和动作传递给app
