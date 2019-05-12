import React,{Component} from 'react'


export default  class Detail extends Component{

    state={
        allMessage:[
            {id:1,title:'title01',message:'0101010101'},
            {id:2,title:'title02',message:'2222222222'},
            {id:3,title:'title03',message:'3333333333'}
        ]
    };

    render() {
        /*得到路由链接中的占位符参数id*/
        const {id}=this.props.match.params;
        /*根据id查询到详情*/
        const {allMessage}=this.state;
        /*返回id相等第一个元素*/
        const msg=allMessage.find((i)=>i.id===id*1);
        /*debugger;*/
        return (
            <ul>
                <li>id:{msg.id}</li>
                <li>title:{msg.title}</li>
                <li>msg:{msg.message}</li>

            </ul>

        )
    }
}