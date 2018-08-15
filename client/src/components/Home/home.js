import React, {Component} from 'react';
import css from './home.less';


class Home extends Component{

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentWillMount(){
        /*console.log('Home',this.props)*/
    }

    render() {
        return <div>
            <div className={css.title}>我是Home页面</div>
        </div>
    }


}

export default Home;