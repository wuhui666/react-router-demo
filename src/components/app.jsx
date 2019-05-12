import React,{Component} from 'react'
/*import {NavLink,Redirect,Route,Switch} from 'react-router-dom'*/
import {Redirect,Route,Switch} from 'react-router-dom'

import MyLink from './myLink'
import Home from '../views/home';
import About from '../views/about'
import './app.css'
export default  class App extends Component{

    render() {

        return (
            <div id='app' className='row'>
                <div className='col-md-3'>
                    <div className='list-group'>
                        {/*<NavLink className='list-group-item' to='/about'>about</NavLink>
                        <NavLink className='list-group-item' to='/home'>home</NavLink>*/}
                        <MyLink className='list-group-item' to='/about'>about</MyLink>
                        <MyLink className='list-group-item' to='/home'>home</MyLink>
                    </div>

                </div>
                <div className='col-md-6'>
                    <Switch>
                        {/*<Redirect to='/home'/> 不能这么靠前，因为to指向的route还未定义*/}
                        <Route path='/home' component={Home}/>
                        {/*<Redirect to='/home'/>可以放这儿，前面已经有定义了，
                        但是<Redirect to='/about'/>不能放这儿*/}
                        <Route path='/about' component={About}/>
                        {/*<Redirect to='/about'/>可以放这儿，前面已经有定义了*/}
                        <Redirect to='/home'/>
                        {/*总之Redirect建议放到最后，这样默认的路由页面才生效否则出错*/}

                    </Switch>
                </div>
            </div>
        )
    }
}