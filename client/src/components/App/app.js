import React, {Component} from 'react';
import css from './app.less';


class App extends Component{

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentWillMount(){
        console.log('App',this.props)
    }

    render() {
        return <div>
            我是App页面
        </div>
    }


}

export default App;