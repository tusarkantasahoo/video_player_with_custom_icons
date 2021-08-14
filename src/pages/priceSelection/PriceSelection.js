import React, { useEffect, useState, Component } from "react";
import CircleLeft from "../../components/circle/CircleLeft.js";
import CircleRight from "../../components/circle/CircleRight.js";
import ReactPlayer from "react-player";
export default class PriceSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftSelection: { name: "Quantity Size Price", code: "quantitySizePrice" },
      rightSelection: {
        name: "Quantity Size Price",
        code: "quantitySizePrice",
      },

      video: props.props.videoB64,
    };
    this.setCurrency = this.setCurrency.bind(this);
  }

  setCurrency(currency, part) {
    if (part === "left") {
      this.setState({
        leftSelection: {
          name: this.state.leftSelection.name,
          code: this.state.leftSelection.code,
          currency: currency,
        },
      });
    }
    if (part === "right") {
      this.setState({
        rightSelection: {
          name: this.state.rightSelection.name,
          code: this.state.rightSelection.code,
          currency: currency,
        },
      });
    }
  }

  render() {
    var leftSidePriceSelection = [
      { name: "Normal", code: "normal" },
      { name: "Up Down", code: "upDown" },
      { name: "blank", code: "blank" },
    ];

    var rightSidePriceSelection = [
      { name: "Normal", code: "normal" },
      { name: "Up Down", code: "upDown" },
      { name: "Quantity Size Price", code: "quantitySizePrice" },
      { name: "blank", code: "blank" },
    ];

    console.log("Props", this.props);
    console.log("States", this.state);

    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <p style={{ fontSize: "22px", fontWeight: "bold" }}>
              Price Option Left Side
            </p>
            <div style={{ display: "flex" }}>
              {leftSidePriceSelection.map((item, id) => {
                return (
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => this.setState({ leftSelection: item })}
                  >
                    <CircleRight selection={item} />
                  </div>
                );
              })}
            </div>

            <div style={{ marginTop: "2em" }}>
              <p style={{ fontSize: "15px", fontWeight: "bold" }}>Price</p>
              <div style={{ display: "flex" }}>
                <div style={{ margin: "1em" }}>
                  <input
                    class="form-check-input"
                    type="radio"
                    value="noCurrency"
                    id="flexCheckDefault"
                    style={{ height: "1em", width: "1em" }}
                    onChange={(e) => {
                      console.log(e.target.value);
                      this.setCurrency(e.target.value, "left");
                    }}
                    name="flexRadioDefault1"
                  ></input>
                  <label
                    style={{ fontSize: "15px", fontWeight: "bold" }}
                    class="form-check-label"
                    for="flexCheckDefault"
                  >
                    No Currency
                  </label>
                </div>
                <div style={{ margin: "1em" }}>
                  <input
                    class="form-check-input"
                    type="radio"
                    value="sterling"
                    id="flexCheckDefault"
                    name="flexRadioDefault1"
                    onChange={(e) => {
                      console.log(e.target.value);
                      this.setCurrency(e.target.value, "left");
                    }}
                  ></input>
                  <label
                    style={{ fontSize: "15px", fontWeight: "bold" }}
                    class="form-check-label"
                    for="flexCheckDefault"
                  >
                    Sterling (£)
                  </label>
                </div>
                <div style={{ margin: "1em" }}>
                  <input
                    class="form-check-input"
                    type="radio"
                    value="euro"
                    id="flexCheckDefault"
                    name="flexRadioDefault1"
                    onChange={(e) => {
                      console.log(e.target.value);
                      this.setCurrency(e.target.value, "left");
                    }}
                  ></input>
                  <label
                    style={{ fontSize: "15px", fontWeight: "bold" }}
                    class="form-check-label"
                    for="flexCheckDefault"
                  >
                    Euro (€)
                  </label>
                </div>
              </div>
            </div>

            <p style={{ fontSize: "22px", fontWeight: "bold" }}>
              Price Option Right Side
            </p>
            <div style={{ display: "flex" }}>
              {rightSidePriceSelection.map((item, id) => {
                return (
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => this.setState({ rightSelection: item })}
                  >
                    <CircleLeft selection={item} />
                  </div>
                );
              })}
            </div>

            <div style={{ marginTop: "2em" }}>
              <p style={{ fontSize: "15px", fontWeight: "bold" }}>Price</p>
              <div class="form-check">
              <div style={{ display: "flex" }}>
                <div style={{ margin: "1em" }}>
                  <input
                    class="form-check-input"
                    type="radio"
                    value="noCurrency"
                    id="flexRadioDefault1"
                    name="flexRadioDefault12"
                    style={{ height: "1em", width: "1em" }}
                    onChange={(e) => {
                      console.log(e.target.value);
                      this.setCurrency(e.target.value, "right");
                    }}
                  ></input>
                  <label
                    style={{ fontSize: "15px", fontWeight: "bold" }}
                    class="form-check-label"
                    for="flexCheckDefault"
                  >
                    No Currency
                  </label>
                </div>
                <div style={{ margin: "1em" }}>
                  <input
                    class="form-check-input"
                    type="radio"
                    value="sterling"
                    id="flexRadioDefault1"
                    name="flexRadioDefault12"
                    onChange={(e) => {
                      console.log(e.target.value);
                      this.setCurrency(e.target.value, "right");
                    }}
                  ></input>
                  <label
                    style={{ fontSize: "15px", fontWeight: "bold" }}
                    class="form-check-label"
                    for="flexCheckDefault"
                  >
                    Sterling (£)
                  </label>
                </div>
                <div style={{ margin: "1em" }}>
                  <input
                    class="form-check-input"
                    type="radio"
                    value="euro"
                    id="flexRadioDefault1"
                    name="flexRadioDefault12"
                    onChange={(e) => {
                      console.log(e.target.value);
                      this.setCurrency(e.target.value, "right");
                    }}
                  ></input>
                  <label
                    style={{ fontSize: "15px", fontWeight: "bold" }}
                    class="form-check-label"
                    for="flexCheckDefault"
                  >
                    Euro (€)
                  </label>
                </div>
              </div>
            
              </div>
            
            </div>

            <div style={{ display: "flex" }}>
              <button
                type="button"
                class="btn btn-primary"
                style={{ margin: "1em" }}
                onClick={() => this.props.setPageName("fileUpload")}
              >
                Reset
              </button>
              <button
                type="button"
                class="btn btn-primary"
                style={{ margin: "1em" }}
              >
                Save and Render
              </button>
            </div>
          </div>
          <div className="col-6" style={{ textAlign: "left" }}>
            <div
              style={{
                display: "flex",
                margin: "2em",
                width: "40em",
              }}
            >
              <div
                style={{
                  zIndex: "10px",
                  position: "absolute",
                  marginTop: "2em",
                  marginLeft: "24%",
                }}
              >
                  <CircleRight
                selection={this.state.rightSelection  }
                bgColor={"white"}
                currency={this.state.rightSelection.currency}
              />
              </div>
            </div>
            <ReactPlayer
              pip
              width="40em"
              height="auto"
              playIcon="true"
              url={this.state.video}
              controls={false}
              playing={true}
              muted={true}
            ></ReactPlayer>

            <div
              style={{
                zIndex: "20",
                marginTop: "-10em",
                position: "absolute",
              }}
            >
                  <CircleLeft
                  selection={this.state.leftSelection}
                  bgColor={"white"}
                  currency={this.state.leftSelection.currency}
                />
        
            </div>
          </div>
        </div>
      </div>
    );
  }
}
