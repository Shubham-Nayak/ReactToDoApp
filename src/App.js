import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      newItem:"",
      list:[]
    }
  }
addItem(toDoValue){
  if(toDoValue !="")
  {
    const newItem={
      id:Date.now(),
      value:toDoValue,
      isDone:false
    };
    const list=[...this.state.list];
    list.push(newItem);

    this.setState({
      list,
      newItem:""
    });
  }
}


deleteItem(id){
  const list=[...this.state.list];
  const updatedlist=list.filter(item=>item.id !==id);
  this.setState({
    list:updatedlist
  })
}

updateInput(input)
{
  this.setState({newItem:input});
}
  render(){
    return(
      <div>
      <img src={logo} className="logo" />
      <h1 className="App-hearder">Shubham ToDo React APP</h1>

      <div className="container">
        Add Item...
        <br/>
        <input type="text" name="" className="input-text" placeholder="Write To Do" value={this.state.newItem} required onChange={e=>this.updateInput(e.target.value)}></input>
        <button className="add-btn" onClick={()=>this.addItem(this.state.newItem)} disabled={!this.state.newItem.length}>Add Button</button>
        <br/>
        <div className="list">
          <ul>
            {this.state.list.map(item=>{
              return(
                <li key={item.id}>
                  <input type="checkbox" checked={item.isDone} name="isDone" onChange={()=>{}} />
                  {item.value}
                  <button className="btn" onClick={()=>this.deleteItem(item.id)}>Delete</button>
                </li>
              );
            })}
            <li>
              <input type="checkbox" />
              Record Youtube Videos
            
            <button className="delete-btn">Delete</button>
            
            </li>
          </ul>
        </div>
      </div>

      </div>
    )
  }
}

export default App