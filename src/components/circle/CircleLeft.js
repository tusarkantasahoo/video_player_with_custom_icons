import React, { useEffect, useState, Component } from "react";

export default class CircleLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.code === "upDown") {
      return (
        <>
          <div
            style={{
              height: "7em",
              width: "7em",
              borderRadius: "7em",
              border: "1px solid black",
              textAlign: "center",
              margin: "1em",
              backgroundColor: this.props.bgColor
            }}
          >
            <p style={{ fontWeight: "700" }}>Large</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <p
                style={{
                  fontSize: "2.5em",
                  marginTop: "-30%",
                  fontWeight: "700",
                }}
              >
                3
              </p>
              <p
                style={{
                  fontSize: "18px",
                  marginTop: "-15%",
                  fontWeight: "700",
                }}
              >
                25
              </p>
            </div>
            <div
              style={{
                height: "2px",
                backgroundColor: "black",
                marginTop: "-26%",
              }}
            ></div>
            <p style={{ fontWeight: "700", marginTop: "0px" }}>Medium</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <p
                style={{
                  fontSize: "2.5em",
                  marginTop: "-35%",
                  fontWeight: "700",
                }}
              >
                2
              </p>
              <p
                style={{
                  fontSize: "18px",
                  marginTop: "-15%",
                  fontWeight: "700",
                }}
              >
                09
              </p>
            </div>
          </div>
        </>
      );
    } else if (this.props.code === "normal") {
      return (
        <>
          <div
            style={{
              height: "7em",
              width: "7em",
              borderRadius: "7em",
              border: "1px solid black",
              textAlign: "center",
              margin: "1em",
              backgroundColor: this.props.bgColor
            }}
          >
            <p style={{ fontWeight: "700", marginTop: "0.5em" }}>Large</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <p
                style={{
                  fontSize: "3em",
                  marginTop: "-30%",
                  fontWeight: "700",
                }}
              >
                3
              </p>
              <p
                style={{
                  fontSize: "18px",
                  marginTop: "-15%",
                  fontWeight: "700",
                }}
              >
                25
              </p>
            </div>
          </div>
        </>
      );
    }
    
    else if (this.props.code === "quantitySizePrice") {
        return (
          <>
            <div
              style={{
                height: "7em",
                width: "7em",
                borderRadius: "7em",
                border: "1px solid black",
                textAlign: "center",
                margin: "1em",
                backgroundColor: this.props.bgColor
              }}
            >
              <p style={{ fontWeight: "800", marginTop: "0",fontSize:"25px" }}>2</p>
          
                <p
                  style={{
                    fontSize: "22px",
                    marginTop: "-1em",
                    fontWeight: "800",
                  }}
                >
                  Mediums
                </p>
                <p
                  style={{
                    fontSize: "42px",
                    marginTop: "-30%",
                    fontWeight: "800",
                  }}
                >
                  5
                </p>
             
            </div>
          </>
        );
      }
    else {
      return (
        <>
          <div
            style={{
              height: "7em",
              width: "7em",
              borderRadius: "7em",
              border: "1px solid black",
              textAlign: "center",
              margin: "1em",
            }}
          ></div>
        </>
      );
    }
  }
}
