import React,{Component} from 'react'
import {Route} from 'react-router-dom'
import Detail from './detail'
import Mylink from '../components/myLink'

export default  class Message extends Component{

    state={
        messageArr:[
            /*{id:1,title:'title11'},
            {id:2,title:'title02'},
            {id:3,title:'title03'}*/
        ]
    };

    componentDidMount() {
        setTimeout(()=>{

         const messageArr=[
                    {id:1,title:'title01',message:'0101010101'},
                    {id:2,title:'title02',message:'2222222222'},
                    {id:3,title:'title03',message:'3333333333'}
                ];
         this.setState({messageArr})
        },1000)
    }

    showDetail=(id)=>{
        this.props.history.push(`/home/message/detail/${id}`)
    };
    showDetail2=(id)=>{
        this.props.history.replace(`/home/message/detail/${id}`)
    };
    back=()=>{
        this.props.history.goBack();
    };
    forward=()=>{
        this.props.history.goForward();
    };
    render() {

        return (
            <div>
                <ul>
                    {
                        this.state.messageArr.map((item,index)=>
                            (
                                <li key={index}>
                                    <Mylink to={`/home/message/detail/${item.id}`}>{item.title}</Mylink>
                                    &nbsp;&nbsp;
                                    {/*不用路由链接，通过js也能路由跳转，通过将路由链接压入history*/}
                                    {/*通过把事件回调函数设为箭头函数间接调用
                                        需要的函数就可以传参数了*/}
                                    <button onClick={()=>this.showDetail(item.id)}>push查看</button>
                                    <button onClick={()=>this.showDetail2(item.id)}>replace查看</button>
                                </li>
                            )
                        )
                    }
                </ul>
                {/*向路由组件传递数据通过链接设置占位符’:参数名‘*/}
                <button onClick={this.back}>back</button>
                <button onClick={this.forward}>forward</button>
                <Route path='/home/message/detail/:id' component={Detail}/>
            </div>

        )
    }
}