import React, { Component } from 'react';
 
 
// App component - represents the whole app
export default class ListItem extends Component {

  constructor(){
      super();
      this.state={}
  }

  changeSelectedItem(itemName){
    console.log("Item:"+itemName);
    this.props.changeselecteditem(itemName);
  }
 
  render() {

    var name = this.props.name;

    //console.log(this);

    return (
      <div className="grid-block shrink list-item" onClick={this.changeSelectedItem.bind(this,name)}>
        {name}
      </div>
    );
  }
}