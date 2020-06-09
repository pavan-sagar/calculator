import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      formulaDisplayValue: "",
      indexOfLastOperator: -1,
      expParserArr: [],
      calculationWasDone: false, //We will set this to true on every = btn press and then during new expression again set it to false.
    };
    this.btnref = React.createRef();

    this.handleBtnPress = this.handleBtnPress.bind(this);
    this.calculateOutput = this.calculateOutput.bind(this);
  }

  handleBtnPress(e) {
    let num = e.target.innerHTML;
    let prevInputValue = this.state.inputValue;

    //Clear everything if AC button is pressed
    if (num == "AC") {
      this.setState({
        inputValue: "",
        formulaDisplayValue: "",
        expParserArr: [],
        calculationWasDone: false,
      });
      return;
    }

    //Clear formula bar if it already is filled with previous formula
    if (this.state.formulaDisplayValue.length > 0) {
      this.setState({ formulaDisplayValue: "" });
    }

    //Ignore zero if first character is also a zero
    if (num == "0" && prevInputValue.length == 1) {
      return;
    }

    //Ignore if first character is an operator symbol other than minus (-)
    if (["+", "x", "÷", "."].includes(num) && prevInputValue.length == 0) {
      return;
    }

    //Make the operator as minus if previous is plus and current is minus or vice versa.
    if (
      ["+", "-"].includes(num) &&
      ["+", "-"].includes(prevInputValue[prevInputValue.length - 1])
    ) {
      num = "-";
      //Delete last operator of previous input value
      this.setState((state, props) => {
        return {
          inputValue: state.inputValue.slice(0, state.inputValue.length - 1),
        };
      });
    } //Ignore if consecutive operator symbols are pressed
    else if (
      ["+", "-", "x", "÷", "."].includes(num) &&
      ["+", "-", "*", "/", "."].includes(
        prevInputValue[prevInputValue.length - 1]
      )
    ) {
      return;
    } else {
      //do nothing
    }

    //Ignore dot is already a dot is present
    if (num == "." && prevInputValue.includes(".")) {
      return;
    }

    //Change symbol for multiply and divide
    if (num == "x") {
      num = "*";
    } else if (num == "÷") {
      num = "/";
    } else {
      //do nothing
    }

    // Either add the number to current input value string or remove the latest character if delete button is pressed
    if (num == "←") {
      this.setState((state, props) => {
        return {
          inputValue: state.inputValue.slice(0, state.inputValue.length - 1),
        };
      });
    } else {
      //If a number is pressed after previously a result was calculated, the new inputValue should be the number pressed and not be appended to previous result
      if (this.state.calculationWasDone && "1234567890".includes(num)) {
        this.setState((state, props) => {
          return { inputValue: num };
        });
      } else {
        this.setState((state, props) => {
          return { inputValue: state.inputValue + num };
        });
      }
    }

    //Make the calculationWasDone flag as false since this is a new calculation
    if (this.state.calculationWasDone) {
      this.setState({ calculationWasDone: false });
    }
  }

  calculateOutput() {
    //Split and push numbers and operators to parser Array

    let { inputValue, expParserArr, indexOfLastOperator } = this.state;
    inputValue.split("").map((item, idx) => {
      if (("+*/-".includes(item) || idx == inputValue.length - 1) && idx != 0) {
        //If we reach last character
        if (idx == inputValue.length - 1) {
          let itemsToPush = Number(
            inputValue.slice(
              indexOfLastOperator + 1,
              idx + 1 // Here we are doing idx+1 so that we can capture the last character also
            )
          );

          expParserArr.push(itemsToPush);
          // We are not pushing the last current item as it is already part of itemsToPush

          indexOfLastOperator = idx;
        } else {
          let itemsToPush = Number(
            inputValue.slice(indexOfLastOperator + 1, idx)
          );

          expParserArr.push(itemsToPush);
          expParserArr.push(item);

          indexOfLastOperator = idx;
        }
      }
    });

    //console.log(expParserArr);

    //Parse the array

    let i = 0;
    while (i < expParserArr.length) {
      if (expParserArr[i] == "*") {
        expParserArr = [
          ...expParserArr.slice(0, i - 1),
          expParserArr[i - 1] * expParserArr[i + 1],
          ...expParserArr.slice(i + 2),
        ];
        // i += 2;
        continue;
      }

      if (expParserArr[i] == "/") {
        expParserArr = [
          ...expParserArr.slice(0, i - 1),
          expParserArr[i - 1] / expParserArr[i + 1],
          ...expParserArr.slice(i + 2),
        ];
        continue; // i += 2;
      }

      i++;
    }
    // We transverse to find an operator, remove its previous and next element, perform calculation, and replace these 3 elements in array
    // with the computer value
    i = 0;
    while (i < expParserArr.length) {
      if (expParserArr[i] == "+") {
        expParserArr = [
          ...expParserArr.slice(0, i - 1),
          expParserArr[i - 1] + expParserArr[i + 1],
          ...expParserArr.slice(i + 2),
        ];
        continue;
      }

      if (expParserArr[i] == "-") {
        expParserArr = [
          ...expParserArr.slice(0, i - 1),
          expParserArr[i - 1] - expParserArr[i + 1],
          ...expParserArr.slice(i + 2),
        ];
        continue;
      }
      i++;
    }

    //Show formula and latest answer

    let output =
      expParserArr[0] % 1 > 0
        ? String(expParserArr[0].toFixed(4))
        : String(expParserArr[0]); // Show the decimal points only if needed

    this.setState((state, props) => {
      return {
        inputValue: output,
        formulaDisplayValue: state.inputValue,
        expParserArr: [],
        indexOfLastOperator: -1,
        calculationWasDone: true,
      };
    });
  }

  render() {
    return (
      <div className="App">
        <div className="calculator">
          <div className="display">
            <p
              className={`formula-display ${
                this.state.formulaDisplayValue.length > 0
                  ? ".formula-display-has-value"
                  : ""
              }`}
            >
              {this.state.formulaDisplayValue}
            </p>
            <p className="input-display">{this.state.inputValue}</p>
          </div>
          <div className="numpad">
            <div className="btn btn-ac" onClick={this.handleBtnPress}>
              AC
            </div>
            <div
              className="btn btn-round btn-divide "
              onClick={this.handleBtnPress}
            >
              &divide;
            </div>{" "}
            {/*Divide sign*/}
            <div
              className="btn btn-round btn-delete"
              onClick={this.handleBtnPress}
            >
              &#8592;
            </div>{" "}
            {/*Left Arrow/ Delete symbol*/}
            <div className="btn" value="7" onClick={this.handleBtnPress}>
              7
            </div>
            <div className="btn" onClick={this.handleBtnPress}>
              8
            </div>
            <div className="btn" onClick={this.handleBtnPress}>
              9
            </div>
            <div
              className="btn btn-round btn-multiply"
              onClick={this.handleBtnPress}
            >
              x
            </div>
            <div className="btn" onClick={this.handleBtnPress}>
              4
            </div>
            <div className="btn" onClick={this.handleBtnPress}>
              5
            </div>
            <div className="btn" onClick={this.handleBtnPress}>
              6
            </div>
            <div
              className="btn btn-round btn-minus"
              onClick={this.handleBtnPress}
            >
              -
            </div>
            <div className="btn" onClick={this.handleBtnPress}>
              1
            </div>
            <div className="btn" onClick={this.handleBtnPress}>
              2
            </div>
            <div className="btn" onClick={this.handleBtnPress}>
              3
            </div>
            <div className="btn btn-round" onClick={this.handleBtnPress}>
              +
            </div>
            <div className="btn btn-dot" onClick={this.handleBtnPress}>
              .
            </div>
            <div className="btn" onClick={this.handleBtnPress}>
              0
            </div>
            <div className="btn btn-equal" onClick={this.calculateOutput}>
              =
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
