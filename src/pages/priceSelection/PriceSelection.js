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

       video: props.props.videoB64
    };
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

    console.log("Props",this.props)
    console.log("States",this.state)

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
                    <CircleLeft code={item.code} />
                  </div>
                );
              })}
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
                    <CircleRight code={item.code} />
                  </div>
                );
              })}
            </div>

            <div style={{ display: "flex" }}>
              <button
                type="button"
                class="btn btn-primary"
                style={{ margin: "1em" }}
                onClick={() =>this.props.setPageName("fileUpload")}
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
                width:"40em"
              }}
            >
              <div
                style={{ zIndex: "10px", position: "absolute", marginTop:"2em",marginLeft:"24%" }}
              >
                <CircleRight
                  code={this.state.leftSelection.code}
                  bgColor={"white"}
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
                code={this.state.rightSelection.code}
                bgColor={"white"}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
