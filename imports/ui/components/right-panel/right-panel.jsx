import React, { Component } from 'react';
 
 
// App component - represents the whole app
export default class RightPanel extends Component {

  constructor(){
      super();
      this.state={}
  }
 
  render() {

    var selectedItem = this.props.selecteditem;

    return (
      <div className="grid-block right-panel">
        {selectedItem}
      </div>
      
    );
  }
}
