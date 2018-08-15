import React from "react" //必须引入
import {BrowserRouter, Route, Redirect, Switch, withRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
// 引入store文件，下步会创建
import configureStore from '../redux/store/configureStore';
// 调用 store 文件中的rootReducer常量中保存的方法
let store = configureStore();

import Index from '../components/Index/index';
import Home from '../components/Home/home';
import ShopCar from '../components/ShopCar/shopCar';
import Mine from '../components/Mine/mine';
import Detail from '../components/Detail/detail';
import Test from '../components/Test/test';
import MyInfo from "../components/MyInfo/myInfo";

const router = (<Provider store={store}><BrowserRouter>
    <Switch>
        <Route path='/index' render={() =>
            <Index>
                <Switch>
                    <Route exact path='/index/home' component={Home}/>
                    <Route path='/index/shop-car' component={ShopCar}/>
                    <Route path='/index/mine' render={()=>
                        <Mine>
                            <Switch>
                                <Route exact path='/index/mine/my-info' component={MyInfo}/>
                                {/*<Redirect from="/index/mine" to="mine/my-info" />*/}
                            </Switch>
                        </Mine>
                    }/>
                </Switch>
            </Index>
        }/>
        <Route path='/detail' component={Detail}/>
        <Route path='/test' component={Test}/>
        <Redirect to="/index/home"/> {/*必须处于路由的最后一行*/}
    </Switch>
</BrowserRouter></Provider>);

export default router;