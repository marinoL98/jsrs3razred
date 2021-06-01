import React, { Component } from 'react';
import List from './List';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
     
      items: [...this.state.items, this.state.term]
    });
  }

  render() {
    return (
      <div>
          <br></br>  <br></br>  <br></br>
        <form class="Todof" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange}placeholder="Wishlist" /><br></br><br></br>
          <button id="submittodo">Nova</button>
        </form>
        
        <b><List items={this.state.items} class="todolista"/></b>
      </div>
    );
  }
}