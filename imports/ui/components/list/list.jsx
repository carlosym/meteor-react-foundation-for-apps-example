import React, { Component } from 'react';
import ListItem from './list-item/list-item';
 
 
// App component - represents the whole app
export default class List extends Component {

  constructor(){
      super();
      this.state={
        items:["Apple","Coke","Orange","tea","coffee","pizza"]
      }
  }

  changeSelectedItem(selectedItem){
    console.log("List:"+selectedItem);
    this.props.changeselecteditem(selectedItem);
  }

  renderItem(){
    return this.state.items.map((item) => (
      <ListItem name={item} changeselecteditem={this.changeSelectedItem.bind(this)} />
    ));
  }
 
  render() {

    //console.log(this.state.items);

    return (
      <div className="vertical grid-block list ">
        <div className="grid-block shrink">
          <h4>List header</h4>
        </div>
        <div className="vertical  grid-block ">
          {this.renderItem()}
        </div>
      </div>
      
    );
  }
}
