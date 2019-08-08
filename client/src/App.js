import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// run `npm install react-facebook-login`
import FacebookLogin from 'react-facebook-login'; // import FB Login component

// Declare this variable
const responseFacebook = (response) => {
  console.log(response);
}

class App extends Component {
  render() {
    return (
      // Render the fb login component, imported above
      <FacebookLogin
        appId="1088597931155576"
        autoLoad={true}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook} 
      />
    );
  }
}

export default App;
