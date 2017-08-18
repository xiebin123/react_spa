import React from 'react';
import {Link,IndexLink} from 'react-router';
import {Icon}from 'antd';

export default class App extends React.Component{
  constructor(props){
   super(props);
   this.state={
       visible:"block",
       width:"78%"
   }     
  }
   handleClick(){
     var width=this.state.visible==="block"?"100%":"78%";
     var visible=this.state.visible==="block"?"none":"block";
     this.setState({visible:visible,width:width});
   }
  render(){
      return(
          <div className="spa">
             <div className="left" style={{display:this.state.visible}}>
                 <div className="head"></div>
                 <ul role="nav" className="leftul" >
                   <li><Icon  className="Icons" type="home" style={{fontSize:35,color:'#FFFFFF'}}/><IndexLink to="/" activeName="active">Home</IndexLink></li>
                   <li><Icon  className="Icons" type="book" style={{fontSize:35,color:'#FFFFFF'}}/><IndexLink to="/todolist" activeName="active">todolist</IndexLink></li>
                   <li><Icon  className="Icons" type="layout" style={{fontSize:35,color:'#FFFFFF'}}/><IndexLink to="/form" activeName="active">form</IndexLink></li>
                 </ul>
             </div>
             <div className="right" style={{width:this.state.width}}>
              <div className="right-nav">
                  <Icon type="bars" style={{fontSize:35,color:'#FFFFFF',margin:"17.5 25",cursor:"pointer"}} onClick={this.handleClick.bind(this)}/>
              </div>
              {this.props.children}
             </div>    
          </div>
      )
  }
}