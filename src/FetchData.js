import React from 'react';
import {ChangeData} from './ChangeData';
import {DisplayData} from './DisplayData';
import octocat from './octocat.svg';

import $ from 'jquery';

export class FetchData extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name: '',
      info: [],
    }
  }

  getUser() {
      $.getJSON("https://api.github.com/users/"+this.state.name)
        .then(
        (result) =>
          this.setState({ info: result }));
  }

  onUpdate = (val) => {
    this.setState({
      name: val
    })
  };

  onKeyPress = () => {
      this.getUser();
  }


  render() {
    return (
      <div>
      <ul className="navBar" role="navigation">
        <li className="title">GitData</li>
        <li className="search"><ChangeData onUpdate={this.onUpdate} onKeyPress={this.onKeyPress}/></li>
      </ul>
        <br />
        <DisplayData passedVal={this.state.info} />
      </div>
    )
  }
}