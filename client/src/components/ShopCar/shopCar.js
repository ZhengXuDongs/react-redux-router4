import React, {Component} from 'react';
import css from './shopCar.less';


class ShopCar extends Component{

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentWillMount(){
        /*console.log('ShopCar',this.props)*/
    }

    render() {
        return <div>
            我是ShopCar页面
        </div>
    }


}

export default ShopCar;