import React, { Component } from "react";
import Button from "antd/lib/button";
import AddSite from "./containers/AddSiteToggle";
import NewSiteForm from "./components/NewSiteForm";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <NewSiteForm />
      </div>
    );
  }
}

export default App;
