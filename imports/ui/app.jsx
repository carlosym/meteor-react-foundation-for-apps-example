import React, { Component } from 'react';
import List from './components/list/list';
import RightPanel from './components/right-panel/right-panel';

// App component - represents the whole app
export default class App extends Component {

  constructor() {
    super();
    this.state = {
      selectedItem:false
    };
  }

  changeSelectedItem(selectedItem){
    console.log("App:"+selectedItem);
    this.setState({
      selectedItem:selectedItem
    });
  }

  render() {

    return (
      <div className="grid-frame">
        <div className="grid-block">
          <List changeselecteditem={this.changeSelectedItem.bind(this)}/>
        </div>
        <div className="grid-block">
          <RightPanel selecteditem={this.state.selectedItem}/>
        </div>
      </div>

    );
  }
}
