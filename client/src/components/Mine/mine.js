import React, {Component} from 'react';
import css from './mine.less';
import {withRouter,NavLink} from "react-router-dom";
import { getUserInfo, updateUserInfo } from '../../redux/action/UserAction';
import { connect } from 'react-redux';

class Mine extends Component{

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentWillMount(){
        this.props.getUserInfo();
        console.log('Mine',this.props)
    }

    handleJump = (id) =>{
        console.log(id)
        if(id===1){
            this.props.history.push('/detail')
        }else if(id===2){
            this.props.history.push('/test')
        }else if(id===3){
            this.props.history.push('/index/mine/my-info')
        }

    }

    render() {
        console.log('dddd',this.props.UserReducer)
        return <div>
            我是Mine页面
            {this.props.children}
            <p onClick={this.handleJump.bind(this,1)}>跳转detail</p>
            <p onClick={this.handleJump.bind(this,2)}>跳转test</p>
            <p onClick={this.handleJump.bind(this,3)}>跳转MyInfo</p>
            <NavLink to='/index/mine/my-info'><p>跳转到MyInfo1</p></NavLink>
        </div>
    }


}



const stateToProps = (state, ownProps) => {
    return {
        ...state,
    };
};

export default connect(stateToProps,{ getUserInfo, updateUserInfo }) (withRouter(Mine));