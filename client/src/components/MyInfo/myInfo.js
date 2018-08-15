import React, {Component} from 'react';
import css from './myInfo.less';


class MyInfo extends Component{

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentWillMount(){
       /* console.log('myInfo',this.props)*/
    }

    render() {
        return <div>
            我是MyInfo页面
        </div>
    }


}

export default MyInfo;