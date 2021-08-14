import React,{useEffect,useState,Component} from 'react';
import './App.css';
import PriceSelection from "./pages/priceSelection/PriceSelection.js";
import UploadFile from "./pages/uploadFile/UploadFile.js";
export default class App extends Component  {
  constructor(props) {
      super(props);
      this.state = {
        page:"fileUpload",
        videoB64:"",
        fileName:""
      };

      this.renderPageBySelection = this.renderPageBySelection.bind(this);
      this.setPageName = this.setPageName.bind(this);
      this._onClickNextAfterFileUpload = this._onClickNextAfterFileUpload.bind(this);
  
    }


    renderPageBySelection(){
      switch(this.state.page){
        case "fileUpload": return <UploadFile setPageName={this.setPageName} _onClickNextAfterFileUpload={this._onClickNextAfterFileUpload} />
        case "addPrices" :return <PriceSelection setPageName={this.setPageName} props={this.state} />

        default : return null
      }
    }

    setPageName(item){
      this.setState({page:item});
    }

    _onClickNextAfterFileUpload(page,video,fileName){
        this.setState({
          page:page,
          videoB64:video,
          fileName:fileName
        })
    }


    render(){
      return (
        <div className="App">
          {/* <PriceSelection /> */}
          {this.renderPageBySelection()}
          </div>
      );
    }

}


