import React, { Component } from 'react';

class TabSelector extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     activeId: 'home'
  //   };
  //   this.handleChangeTab = this.handleChangeTab.bind(this);
  // }

  // handleChangeTab(event) {
  //   const buttonId = event.target.id;
  //   this.setState({ activeId: buttonId });
  // }

  render() {
    // const { activeId } = this.state; 
    const activeId = this.props.activeId
    return (
      <div className="TabSelector">
        <button
          id="home"
          onClick={this.props.changeTab}
          className={activeId === 'home' ? 'active' : ''}
        >
          Home
        </button>
        <button
          id="about"
          onClick={this.props.changeTab}
          className={activeId === 'about' ? 'active' : ''}
        >
          About
        </button>
        <button
          id="contact"
          onClick={this.props.changeTab}
          className={activeId === 'contact' ? 'active' : ''}
        >
          Contact
        </button>
      </div>
    );
  }
}

export default TabSelector;
