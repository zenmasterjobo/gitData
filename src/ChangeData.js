import React from 'react';

export class ChangeData extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
          name: ''
      }
      this.update = this.update.bind(this);
      this.enter  = this.enter.bind(this);
    }

  update(e){
    this.setState({name: e.target.value})
    this.props.onUpdate(e.target.value)
  }
  
  enter(e){
    if(e.key === 'Enter'){
      this.props.onKeyPress();
    }
  }

  render(){
    return (
        <input
          type="text"
          placeholder="Search for User"
          onChange={this.update}
          onKeyPress={this.enter}
          value={this.state.name}
        />
    )
  }
}

