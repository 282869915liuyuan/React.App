import React,{Component} from 'react';
import HomeHeader from "../../components/HomeHeader/index";
import Slider from "../../components/Slider/index";
import Ad from "./subpage/Ad";
import List from "./subpage/List"
import {connect} from 'react-redux';
 class Home extends Component{
    render(){
        return (
            <div>
                <HomeHeader cityName={this.props.userInfo.cityName}/>
                <Slider/>
                <Ad/>
                <List cityName={this.props.userInfo.cityName}/>
            </div>
        )
    }
}
//取出redux中的城市传递给HomeHeader组件
export default connect(
    state=>{
        return{//取出redux里
            userInfo:state.userInfo
        }

    }
)(Home)
