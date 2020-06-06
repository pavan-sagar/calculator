import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="calculator">
          <div className="display"></div>
          <div className="numpad">
            <div className="btn btn-ac">AC</div>
            <div className="btn btn-divide">&divide;</div> {/*Divide sign*/}
            <div className="btn btn-delete">&#8592;</div> {/*Left Arrow/ Delete symbol*/}
            
            <div className="btn">7</div>
            <div className="btn">8</div>
            <div className="btn">9</div>
            <div className="btn">X</div>
            <div className="btn">4</div>
            <div className="btn">5</div>
            <div className="btn">6</div>
            <div className="btn">-</div>
            <div className="btn">1</div>
            <div className="btn">2</div>
            <div className="btn">3</div>
            <div className="btn">+</div>
            <div className="btn">0</div>
            <div className="btn">.</div>
            <div className="btn btn-equal">=</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
