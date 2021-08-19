import React, { useEffect, useState, Component } from "react";
import CircleLeft from "../../components/circle/CircleLeft.js";
import CircleRight from "../../components/circle/CircleRight.js";
import ReactPlayer from "react-player";
import ShowLeftCircle from "../../components/circle/ShowLeftCircle.js";
import ShowRightCircle from "../../components/circle/ShowRightCircle.js";
import {leftSidePriceSelection,rightSidePriceSelection} from "./PriceList.js";
import AddPrice from "../../components/price/AddPrice.js";
export default class PriceSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      leftSelection: {
        name: "blank",
        code: "blank",
        isTwoPrice: false,
        quantity1: null,
        currency1: null,
        price1: null,
        quantity2: null,
        currency2: null,
        price2: null,
      },
      rightSelection: {
        name: "blank",
        code: "blank",
        isTwoPrice: false,
        quantity1: null,
        currency1: null,
        price1: null,
        quantity2: null,
        currency2: null,
        price2: null,
      },

      video: props.props.videoB64,
    };
    this.setLeftSideAllValue = this.setLeftSideAllValue.bind(this);
    this.setRightSideAllValue = this.setRightSideAllValue.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

setLeftSideAllValue(item){

  this.setState({leftSelection:item});

}

setRightSideAllValue(item){
  this.setState({rightSelection:item});
}

  render() {
    console.log("Dimensions  after render",this.state.width)
    return (
      <div className="container">
        <div className="row">
          <div className="col-6" style={{height:this.state.height+"px",overflow:"scroll"}}>
            <p style={{ fontSize: "22px", fontWeight: "bold" }}>
              Price Option Left Side
            </p>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {leftSidePriceSelection.map((item, id) => {

                return (
                  <>
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => this.setState({ leftSelection: item })}
                    >
                      <CircleLeft selection={item} />
                    </div>
                  </>
                );
              })}
            </div>
            <AddPrice part="left" setLeftSideAllValue={this.setLeftSideAllValue} leftSelection={this.state.leftSelection} />


            <p style={{ fontSize: "22px", fontWeight: "bold" }}>
              Price Option Right Side
            </p>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {rightSidePriceSelection.map((item, id) => {
                return (
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => this.setState({ rightSelection: item })}
                  >
                    <CircleRight selection={item} />
                  </div>
                );
              })}
            </div>

            <AddPrice part="right" setRightSideAllValue={this.setRightSideAllValue} rightSelection={this.state.rightSelection} />
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
                  marginLeft: "27em",
                }}
              >
                <ShowRightCircle
                  selection={this.state.rightSelection}
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
              <ShowLeftCircle
                selection={this.state.leftSelection}
                 bgColor={"white"}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
    console.log("dimensions", this.state.width, this.state.height);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
}
