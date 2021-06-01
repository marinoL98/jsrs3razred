import React, { Component } from 'react';

class Login extends Component {
  state = {
    name: ''
  };
  render() {
    return (
      <div id="username">
        <h3><b>{this.state.name}</b><br></br></h3>
    
        <input
          type="text"
          placeholder="Unesi Ime(Max.13 slova)"
          maxLength="13"
          onChange={e => {
            this.setState({
              name: e.target.value
            });
          }}
        />
      </div>
    );
  }
}

export default Login;