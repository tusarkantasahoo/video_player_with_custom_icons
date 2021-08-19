import React, { useEffect, useState, Component } from "react";

export default class ShowLeftCircle extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.getPriceWithCurrency = this.getPriceWithCurrency.bind(this);
    this.renderCirclesBySelection = this.renderCirclesBySelection.bind(this);
  }

  getPriceWithCurrency(type,value) {
      
    console.log("--", type, value);
    if(type===null||type===undefined){
        if(value===null||value===undefined){
            return ""
        }else{
            return value.toString()
        }
    }
    else{

        if(value===null||value===undefined){
            if (type === "noCurrency") {
                return "";
              } else if (type === "euro") {
                return "€";
              } else if (type === "sterling") {
                return "£";
              } else {
                return "";
              }
        }
        else{
            if (type === "noCurrency") {
                return value.toString();
              } else if (type === "euro") {
                return "€" + value;
              } else if (type === "sterling") {
                return "£" + value;
              } else {
                return value;
              }
        }
       
       
    }
   
  }

  renderCirclesBySelection(item) {
    switch (item.code) {
      case "blank":
        return (
          <>
            <div
              className="circleLeftCards"
              style={{
                height: "7em",
                width: "7em",
                borderRadius: "7em",
                border: "2px solid black",
                textAlign: "center",
                // backgroundColor: this.props.bgColor,
                margin: "1em",
              }}
            ></div>
          </>
        );

      case "large/Medium":

          return (
            <>
              <div
                className=""
                style={{
                  height: "7em",
                  width: "7em",
                  borderRadius: "7em",
                  border: "2px solid black",
                  textAlign: "center",
                  backgroundColor: this.props.bgColor,
                  margin: "1em",
                }}
              >
                <p style={{ fontWeight: "800", marginTop: "0.5em" }}>Large</p>
                <p style={{marginTop:"-1em",fontWeight: "800",fontSize:"18px",height:"1.5em"}}>{this.getPriceWithCurrency(item.currency1,item.price1)}</p>
                <div
                  id=""
                  style={{
                    width: "80%",
                    marginLeft: "10%",
                    height: "4px",
                    backgroundColor: "black",
                    border: "2px solid black",
                    marginTop:"-1em"
                  }}
                ></div>
                <p style={{ fontWeight: "800",  }}>Medium</p>
                <p style={{marginTop:"-1em",fontWeight: "800",fontSize:"18px",height:"1.5em"}} >{this.getPriceWithCurrency(item.currency2,item.price2)}</p>
              </div>
            </>
          );
      

      case "twisterOup":
        return (
          <>
            <div
              className="circleLeftCards"
              style={{
                height: "7em",
                width: "7em",
                borderRadius: "7em",
                border: "2px solid black",
                textAlign: "center",
                backgroundColor: this.props.bgColor,
                margin: "1em",
              }}
            >
              <p style={{ fontWeight: "800", marginTop: "2em" }}>
                Twister <br></br> Oup
              </p>
              <p style={{marginTop:"-1em",fontWeight: "800",fontSize:"18px",height:"1.5em"}}>{this.getPriceWithCurrency(item.currency1,item.price1)}</p>
            </div>
          </>
        );

      case "21oz":
        return (
          <>
            <div
              className="circleLeftCards"
              style={{
                height: "7em",
                width: "7em",
                borderRadius: "7em",
                border: "2px solid black",
                textAlign: "center",
                backgroundColor: this.props.bgColor,
                margin: "1em",
              }}
            >
              <p style={{ fontWeight: "800", marginTop: "2em" }}>21oz</p>
              <p style={{marginTop:"-1em",fontWeight: "800",fontSize:"18px",height:"1.5em"}}>{this.getPriceWithCurrency(item.currency1,item.price1)}</p>
            </div>
          </>
        );

      case "12oz":
        return (
          <>
            <div
              className="circleLeftCards"
              style={{
                height: "7em",
                width: "7em",
                borderRadius: "7em",
                border: "2px solid black",
                textAlign: "center",
                backgroundColor: this.props.bgColor,
                margin: "1em",
              }}
            >
              <p style={{ fontWeight: "800", marginTop: "2em" }}>12oz</p>
              <p style={{marginTop:"-1em",fontWeight: "800",fontSize:"18px",height:"1.5em"}}>{this.getPriceWithCurrency(item.currency1,item.price1)}</p>
            </div>
          </>
        );

      case "medium":
        return (
          <>
            <div
              className="circleLeftCards"
              style={{
                height: "7em",
                width: "7em",
                borderRadius: "7em",
                border: "2px solid black",
                textAlign: "center",
                backgroundColor: this.props.bgColor,
                margin: "1em",
              }}
            >
              <p style={{ fontWeight: "800", marginTop: "2em" }}>Medium</p>
              <p style={{marginTop:"-1em",fontWeight: "800",fontSize:"18px",height:"1.5em"}}>{this.getPriceWithCurrency(item.currency1,item.price1)}</p>
            </div>
          </>
        );

      case "2medium":
        return (
          <>
            <div
              className="circleLeftCards"
              style={{
                height: "7em",
                width: "7em",
                borderRadius: "7em",
                border: "2px solid black",
                textAlign: "center",
                backgroundColor: this.props.bgColor,
                margin: "1em",
              }}
            >
              <p style={{ fontWeight: "800", marginTop: "2em" }}>2 Medium</p>
              <p style={{marginTop:"-1em",fontWeight: "800",fontSize:"18px",height:"1.5em"}}>{this.getPriceWithCurrency(item.currency1,item.price1)}</p>
            </div>
          </>
        );

      case "blankLine":
        return (
          <>
            <div
              className="circleLeftCards"
              style={{
                height: "7em",
                width: "7em",
                borderRadius: "7em",
                border: "2px solid black",
                textAlign: "center",
                backgroundColor: this.props.bgColor,
                margin: "1em",
              }}
            >
              <div
                id="line"
                style={{
                  width: "80%",
                  marginLeft: "10%",
                  height: "4px",
                  backgroundColor: "black",
                  border: "2px solid black",
                  marginTop: "3em",
                }}
              ></div>
            </div>
          </>
        );

      case "21oz/12oz":
        return (
          <>
            <div
              style={{
                height: "7em",
                width: "7em",
                borderRadius: "7em",
                border: "2px solid black",
                textAlign: "center",
                backgroundColor: this.props.bgColor,
                margin: "1em",
              }}
            >
              <p style={{ fontWeight: "800", marginTop: "0.5em" }}>21oz</p>
              <p style={{marginTop:"-1em",fontWeight: "800",fontSize:"18px",height:"0.5em"}}>{this.getPriceWithCurrency(item.currency1,item.price1)}</p>
              <div
              
                style={{
                  width: "80%",
                  marginLeft: "10%",
                  height: "4px",
                  backgroundColor: "black",
                  border: "2px solid black",
                }}
              ></div>
              <p style={{ fontWeight: "800", marginTop: "0em" }}>12oz</p>
              <p style={{marginTop:"-1em",fontWeight: "800",fontSize:"18px",height:"1.5em"}}>{this.getPriceWithCurrency(item.currency2,item.price2)}</p>
            </div>
          </>
        );

      case "large":
        return (
          <>
            <div
              className="circleLeftCards"
              style={{
                height: "7em",
                width: "7em",
                borderRadius: "7em",
                border: "2px solid black",
                textAlign: "center",
                backgroundColor: this.props.bgColor,
                margin: "1em",
              }}
            >
              <p style={{ fontWeight: "800", marginTop: "2em" }}>Large</p>
              <p style={{marginTop:"-1em",fontWeight: "800",fontSize:"18px",height:"1.5em"}}>{this.getPriceWithCurrency(item.currency1,item.price1)}</p>
            </div>
          </>
        );
      case "2for":
        return (
          <>
            <div
              className="circleLeftCards"
              style={{
                height: "7em",
                width: "7em",
                borderRadius: "7em",
                border: "2px solid black",
                textAlign: "center",
                backgroundColor: this.props.bgColor,
                margin: "1em",
              }}
            >
              <p style={{ fontWeight: "800", marginTop: "2em" }}>2 for</p>
              <p style={{marginTop:"-1em",fontWeight: "800",fontSize:"18px",height:"1.5em"}}>{this.getPriceWithCurrency(item.currency1,item.price1)}</p>
            </div>
          </>
        );
      case "300ml":
        return (
          <>
            <div
              className="circleLeftCards"
              style={{
                height: "7em",
                width: "7em",
                borderRadius: "7em",
                border: "2px solid black",
                textAlign: "center",
                backgroundColor: this.props.bgColor,
                margin: "1em",
              }}
            >
              <p style={{ fontWeight: "800", marginTop: "2em" }}>300 ml</p>
              <p style={{marginTop:"-1em",fontWeight: "800",fontSize:"18px",height:"1.5em"}}>{this.getPriceWithCurrency(item.currency1,item.price1)}</p>
            </div>
          </>
        );
      case "500ml":
        return (
          <>
            <div
              className="circleLeftCards"
              style={{
                height: "7em",
                width: "7em",
                borderRadius: "7em",
                border: "2px solid black",
                textAlign: "center",
                backgroundColor: this.props.bgColor,
                margin: "1em",
              }}
            >
              <p style={{ fontWeight: "800", marginTop: "2em" }}>500 ml</p>
              <p style={{marginTop:"-1em",fontWeight: "800",fontSize:"18px",height:"1.5em"}}>{this.getPriceWithCurrency(item.currency1,item.price1)}</p>
            </div>
          </>
        );
      case "test":
        return (
          <>
            <div
              className="circleLeftCards"
              style={{
                height: "7em",
                width: "7em",
                borderRadius: "7em",
                border: "2px solid black",
                textAlign: "center",
                backgroundColor: this.props.bgColor,
                margin: "1em",
              }}
            >
              <p style={{ fontWeight: "800", marginTop: "2em" }}>Test</p>
              <p style={{marginTop:"-1em",fontWeight: "800",fontSize:"18px",height:"1.5em"}}>{this.getPriceWithCurrency(item.currency1,item.price1)}</p>
            </div>
          </>
        );
      case "refill":
        return (
          <>
            <div
              className="circleLeftCards"
              style={{
                height: "7em",
                width: "7em",
                borderRadius: "7em",
                border: "2px solid black",
                textAlign: "center",
                backgroundColor: this.props.bgColor,
                margin: "1em",
              }}
            >
              <p style={{ fontWeight: "800", marginTop: "2em" }}>Re Fill</p>
              <p style={{marginTop:"-1em",fontWeight: "800",fontSize:"18px",height:"1.5em"}}>{this.getPriceWithCurrency(item.currency1,item.price1)}</p>
            </div>
          </>
        );

      default:
        return null;
    }
  }

  render() {
    console.log("actual ground level props", this.props);
    return <>{this.renderCirclesBySelection(this.props.selection)}</>;
  }
}
