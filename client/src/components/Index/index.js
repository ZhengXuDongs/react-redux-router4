import React, {Component} from 'react';
import css from './index.less';
import operate from './operate';
import {Redirect} from 'react-router-dom';
import router from "../../router";
import {withRouter} from "react-router-dom";
import { getUserInfo, updateUserInfo } from '../../redux/action/UserAction';
import { connect } from 'react-redux';


class Index extends Component{
    constructor(props) {
        super(props);
        console.log('xxss',getUserInfo())
        // const getUserInfo = this.props.getUserInfo();
        // const updateUserInfo = this.props.updateUserInfo(1);
        this.state = {
            iconId:1,
            // user:getUserInfo.user,
            // upuser:updateUserInfo.user
        }
    }

    componentWillMount(){

        // const { user,upuser } = this.state;
        // console.log(user);
        // console.log(user,upuser);
        // console.log(2222,user)
    }

    componentDidMount(){
        //发起获取用户信息的请求
        this.props.getUserInfo();
    }

    componentWillReceiveProps (nextProps){
        console.log('2222222', nextProps);
    }

    handleTab(id){

        // dispatch events
        this.props.updateUserInfo();
        this.setState({
            iconId:id
        });
        switch (id) {
            case 1:
                this.props.history.push({pathname:`/index/home`,state:{id:1}})
                break;
            case 2:
                this.props.history.push({pathname:`/index/shop-car`,state:{id:2}});
                break;
            case 3:
                this.props.history.push({pathname:`/index/mine`,state:{id:3}});
                break;
        }
    };


    render() {
        const { iconId } = this.state;
         console.log(332,this.props.UserReducer);
        return <div>
            {this.props.children}
            <div className={css.bottom}>
                <div className={css.tab_content}>
                    {operate.tab.map((item,index)=>{
                        return <div key={index} onClick={this.handleTab.bind(this,item.id)} className={css.tab_single}>
                            <i className={`iconfont ${css.icon}`} style={iconId===item.id?{color:'#F4B59D'}:{}}>{item.icon}</i>
                            <p className={css.tab_name}>{item.name}</p>
                        </div>
                    })}
                </div>
            </div>

        </div>
    }


}

const stateToProps = (state, ownProps) => {
    return {
        ...state,
    };
};

export default connect(stateToProps,{ getUserInfo, updateUserInfo }) (withRouter(Index));
