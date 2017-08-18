import React from 'react';



export default class TodoList extends React.Component{
  constructor(props){
      super(props);
      this.state={
          todolist:[]
      }
  }
handleAdd(mes){
    this.setState({
        todolist:mes
    });
}

  render(){
      return(
          <div className="container">
             <div className="box1">
               <h2 className="top">react-todolist</h2>
               <TypeNew add={this.handleAdd.bind(this)} todo={this.state.todolist}/>
               <Lists todo={this.state.todolist} del={this.handleAdd.bind(this)}  />
             </div>
          </div>   
      )
  }
};


class TypeNew extends React.Component{
  addContent(e){
      e.preventDefault();
      var text=this.refs.content.value.trim();
      if(text){
         this.props.todo.push(text);
         this.props.add(this.props.todo); 
      }
        this.refs.content.value="";
  }
    
  render(){
      return(
         <form onSubmit={this.addContent.bind(this)} className="form1">
              <input type="text" ref="content" placeholder="请输入你的todolist" className="input1" />
              <input type="submit" value="添加" className="add"/>
         </form>
      );
  }
};


class Lists extends React.Component{
   delContent(e){
       var i=e.target.getAttribute("data-index");
       this.props.todo.splice(i,1);
       this.props.del(this.props.todo);
   }

    render(){
        return(
            <ul id="todo-list">
               {
                   this.props.todo.map(function(mes,i){
                       return(
                         <li className="content">
                             <label>{mes}</label>
                              <span className="del" onClick={this.delContent.bind(this)} data-index={i}>x</span>
                         </li>
                       );
                   }.bind(this))
               }
            </ul>
        )
    }
}