import React, { useEffect, useState, Component } from "react";

export default class AddPrice extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.setLeftSideCurrencyType1 = this.setLeftSideCurrencyType1.bind(this);
    this.setLeftSideCurrencyType2 = this.setLeftSideCurrencyType2.bind(this);
    this.setRightSideCurrencyType1 = this.setRightSideCurrencyType1.bind(this);
    this.setRightSideCurrencyType2 = this.setRightSideCurrencyType2.bind(this);
    this.setLeftSideprice1 = this.setLeftSideprice1.bind(this);
    this.setLeftSideprice2 = this.setLeftSideprice2.bind(this);
    this.setRightSidePrice1 = this.setRightSidePrice1.bind(this);
    this.setRightSidePrice2 = this.setRightSidePrice2.bind(this);
  }

  setLeftSideCurrencyType1(data) {
    this.props.setLeftSideAllValue({
      name: this.props.leftSelection.name,
      code: this.props.leftSelection.code,
      isTwoPrice: this.props.leftSelection.isTwoPrice,
      quantity1: this.props.leftSelection.quantity1,
      currency1: data,
      price1: this.props.leftSelection.price1,
      quantity2: this.props.leftSelection.quantity2,
      currency2: this.props.leftSelection.currency2,
      price2: this.props.leftSelection.price2,
    });
  }

  setLeftSideCurrencyType2(data) {
    this.props.setLeftSideAllValue({
      name: this.props.leftSelection.name,
      code: this.props.leftSelection.code,
      isTwoPrice: this.props.leftSelection.isTwoPrice,
      quantity1: this.props.leftSelection.quantity1,
      currency1: this.props.leftSelection.currency1,
      price1: this.props.leftSelection.price1,
      quantity2: this.props.leftSelection.quantity2,
      currency2: data,
      price2: this.props.leftSelection.price2,
    });
  }

  setLeftSideprice1(data) {
    this.props.setLeftSideAllValue({
      name: this.props.leftSelection.name,
      code: this.props.leftSelection.code,
      isTwoPrice: this.props.leftSelection.isTwoPrice,
      quantity1: this.props.leftSelection.quantity1,
      currency1: this.props.leftSelection.currency1,
      price1: data,
      quantity2: this.props.leftSelection.quantity2,
      currency2: this.props.leftSelection.currency2,
      price2: this.props.leftSelection.price2,
    });
  }

  setLeftSideprice2(data) {
    this.props.setLeftSideAllValue({
      name: this.props.leftSelection.name,
      code: this.props.leftSelection.code,
      isTwoPrice: this.props.leftSelection.isTwoPrice,
      quantity1: this.props.leftSelection.quantity1,
      currency1: this.props.leftSelection.currency1,
      price1: this.props.leftSelection.price1,
      quantity2: this.props.leftSelection.quantity2,
      currency2: this.props.leftSelection.currency2,
      price2: data,
    });
  }

  setRightSideCurrencyType1(data) {
    this.props.setRightSideAllValue({
      name: this.props.rightSelection.name,
      code: this.props.rightSelection.code,
      isTwoPrice: this.props.rightSelection.isTwoPrice,
      quantity1: this.props.rightSelection.quantity1,
      currency1: data,
      price1: this.props.rightSelection.price1,
      quantity2: this.props.rightSelection.quantity2,
      currency2: this.props.rightSelection.currency2,
      price2: this.props.rightSelection.price2,
    });
  }

  setRightSideCurrencyType2(data) {
    this.props.setRightSideAllValue({
      name: this.props.rightSelection.name,
      code: this.props.rightSelection.code,
      isTwoPrice: this.props.rightSelection.isTwoPrice,
      quantity1: this.props.rightSelection.quantity1,
      currency1: this.props.rightSelection.currency1,
      price1: this.props.rightSelection.price1,
      quantity2: this.props.rightSelection.quantity2,
      currency2: data,
      price2: this.props.rightSelection.price2,
    });
  }
  setRightSidePrice1(data) {
    this.props.setRightSideAllValue({
      name: this.props.rightSelection.name,
      code: this.props.rightSelection.code,
      isTwoPrice: this.props.rightSelection.isTwoPrice,
      quantity1: this.props.rightSelection.quantity1,
      currency1: this.props.rightSelection.currency1,
      price1: data,
      quantity2: this.props.rightSelection.quantity2,
      currency2: this.props.rightSelection.currency2,
      price2: this.props.rightSelection.price2,
    });
  }

  setRightSidePrice2(data) {
    this.props.setRightSideAllValue({
      name: this.props.rightSelection.name,
      code: this.props.rightSelection.code,
      isTwoPrice: this.props.rightSelection.isTwoPrice,
      quantity1: this.props.rightSelection.quantity1,
      currency1: this.props.rightSelection.currency1,
      price1: this.props.rightSelection.price1,
      quantity2: this.props.rightSelection.quantity2,
      currency2: this.props.rightSelection.currency2,
      price2: data,
    });
  }

  render() {
    console.log("incoming in addPrices", this.props);
    var currencyArray = [
      { name: "No Currency", code: "noCurrency" },
      { name: "Sterling (£)", code: "sterling" },
      { name: "Euro (€)", code: "euro" },
    ];
    if (this.props.part === "left") {
      return (
        <>
          <div className="row">
            <div className="col-6">
              <div style={{ marginTop: "2em" }}>
                <p style={{ fontSize: "15px", fontWeight: "bold" }}>Price 1</p>
                <div style={{ display: "flex" }}>
                  {currencyArray.map((item, id) => {
                    return (
                      <>
                        <div style={{ margin: "1em", display: "flex" }}>
                          <input
                            class="form-check-input"
                            type="radio"
                            value={item.code}
                            id="flexCheckDefault"
                            style={{ height: "1em", width: "1em" }}
                            onChange={(e) => {
                              console.log(e.target.value);
                              this.setLeftSideCurrencyType1(e.target.value);
                            }}
                            name="flexRadioDefault1"
                          ></input>
                          <label
                            style={{ fontSize: "15px", fontWeight: "bold" }}
                            class="form-check-label"
                            for="flexCheckDefault"
                          >
                            {item.name}
                          </label>
                        </div>
                      </>
                    );
                  })}
                </div>
                <div style={{ display: "flex" }}>
                  <input
                    style={{ width: "100%", margin: "0.5em" }}
                    type="text"
                    class="form-control"
                    placeholder="Price 1"
                    aria-describedby="basic-addon1"
                    onChange={(e) => {
                      console.log("left price 1", e.target.value);
                      this.setLeftSideprice1(e.target.value);
                    }}
                  ></input>
                </div>
              </div>
            </div>
            <div className="col-6">
              {this.props.leftSelection.isTwoPrice === true ? (
                <div style={{ marginTop: "2em" }}>
                  <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                    Price 2
                  </p>
                  <div style={{ display: "flex" }}>
                    {currencyArray.map((item, id) => {
                      return (
                        <>
                          <div style={{ margin: "1em", display: "flex" }}>
                            <input
                              class="form-check-input"
                              type="radio"
                              value={item.code}
                              id="flexCheckDefault"
                              style={{ height: "1em", width: "1em" }}
                              onChange={(e) => {
                                console.log(e.target.value);
                                this.setLeftSideCurrencyType2(e.target.value);
                              }}
                              name="flexRadioDefault1"
                            ></input>
                            <label
                              style={{ fontSize: "15px", fontWeight: "bold" }}
                              class="form-check-label"
                              for="flexCheckDefault"
                            >
                              {item.name}
                            </label>
                          </div>
                        </>
                      );
                    })}
                  </div>

                  <div style={{ display: "flex" }}>
                    <input
                      style={{ width: "100%", margin: "0.5em" }}
                      type="text"
                      class="form-control"
                      placeholder="Price 2"
                      aria-describedby="basic-addon1"
                      onChange={(e) => {
                        console.log("left price 1", e.target.value);
                        this.setLeftSideprice2(e.target.value);
                      }}
                    ></input>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </>
      );
    } else if (this.props.part === "right") {
      return (
        <>
          <div className="row">
            <div className="col-6">
              <div style={{ marginTop: "2em" }}>
                <p style={{ fontSize: "15px", fontWeight: "bold" }}>Price 1</p>

                <div style={{ display: "flex" }}>
                  {currencyArray.map((item, id) => {
                    return (
                      <>
                        <div style={{ margin: "1em", display: "flex" }}>
                          <input
                            class="form-check-input"
                            type="radio"
                            value={item.code}
                            id="flexCheckDefault"
                            style={{ height: "1em", width: "1em" }}
                            onChange={(e) => {
                              console.log(e.target.value);
                              this.setRightSideCurrencyType1(e.target.value);
                            }}
                            name="flexRadioDefault1"
                          ></input>
                          <label
                            style={{ fontSize: "15px", fontWeight: "bold" }}
                            class="form-check-label"
                            for="flexCheckDefault"
                          >
                            {item.name}
                          </label>
                        </div>
                      </>
                    );
                  })}
                </div>

                <div style={{ display: "flex" }}>
                  <input
                    style={{ width: "100%", margin: "0.5em" }}
                    type="text"
                    class="form-control"
                    placeholder="Price 1"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={(e) => {
                      console.log("left price 1", e.target.value);
                      this.setRightSidePrice1(e.target.value);
                    }}
                  ></input>
                </div>
              </div>
            </div>
            <div className="col-6">
              {this.props.rightSelection.isTwoPrice === true ? (
                <div style={{ marginTop: "2em" }}>
                  <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                    Price 2
                  </p>

                  <div style={{ display: "flex" }}>
                    {currencyArray.map((item, id) => {
                      return (
                        <>
                          <div style={{ margin: "1em", display: "flex" }}>
                            <input
                              class="form-check-input"
                              type="radio"
                              value={item.code}
                              id="flexCheckDefault"
                              style={{ height: "1em", width: "1em" }}
                              onChange={(e) => {
                                console.log(e.target.value);
                                this.setRightSideCurrencyType2(e.target.value);
                              }}
                              name="flexRadioDefault1"
                            ></input>
                            <label
                              style={{ fontSize: "15px", fontWeight: "bold" }}
                              class="form-check-label"
                              for="flexCheckDefault"
                            >
                              {item.name}
                            </label>
                          </div>
                        </>
                      );
                    })}
                  </div>

                  <div style={{ display: "flex" }}>
                    <input
                      style={{ width: "100%", margin: "0.5em" }}
                      type="text"
                      class="form-control"
                      placeholder="Price 2"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      onChange={(e) => {
                        console.log("left price 1", e.target.value);
                        this.setRightSidePrice2(e.target.value);
                      }}
                    ></input>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </>
      );
    }
  }
}
