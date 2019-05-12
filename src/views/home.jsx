import React,{Component} from 'react'
import {Redirect,Route,Switch} from 'react-router-dom'

import MyLink from '../components/myLink'
import News from '../views/news'
import Message from '../views/message'
export default  class Home extends Component{

    render() {

        return (
            <div>
                <ul className='nav nav-tabs'>
                    <li>
                        <MyLink to='/home/new'>news</MyLink>
                    </li>
                    <li>
                        <MyLink to='/home/message'>message</MyLink>
                    </li>
                </ul>
                <div>
                    <Switch>
                        <Route path='/home/new' component={News}/>
                        <Route path='/home/message' component={Message}/>
                        <Redirect to='/home/new'/>
                    </Switch>
                </div>
            </div>
        )
    }
}