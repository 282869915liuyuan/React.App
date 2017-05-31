import React,{Component} from 'react';
//路由的两种类型 HashRouter BrowserRouter
import {
    HashRouter as Router, //提供一个路由容器
    Route ,//单条路由
   Switch//支配一次
} from 'react-router-dom';
import Home from '../containers/Home'
import Detail from '../containers/Detail'
import Login from '../containers/Login'
import User from '../containers/User'
export default class RouterMap extends Component{
    render(){
        return (
            <div>
                <Router>
                    <Switch>
                        {/*只有路由为/的时候才配路由 //绝对匹配exact*/}
                        <Route exact path='/' component={Home}/>
                        <Route path='/detail/:id' component={Detail}/>
                        {/*点击先跳转到登陆页，登录后 再回到登录之前的页面，在login路径可能会保存上次点击login的路径
                        如果登录过在登录跳到用户页面*/}
                        <Route path="/login/:route?" component={Login}/>
                        <Route path="/user" component={User}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}
