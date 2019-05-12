import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'

/*将NavLink封装为自定义myLink*/
import './myLink.css'
export default  class MyLink extends Component{

    render() {

        return (
            /*{...props}自动展开MyLink的标签属性并传给NavLink*/
            <NavLink {...this.props} activeClassName='myActive'/>
        )
    }
}