import React, { useEffect, useState, Component } from "react";

export default class UploadFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileName: "",
      file:{},
      video:""
    };
  }

  convertFileToBase64(file) {
    console.log("convertImageFileToBase64=======");
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }
  async  uploadVideo(file) {
    console.log("file", file);
    this.setState({ file: file });
    const base64Video = await this.convertFileToBase64(file);
    console.log("base64 image", base64Video);
    if (base64Video) {
      this.setState({ video: base64Video });
    }
  }

  render() {
    return (
      <>
        <div className="conatiner" style={{ textAlign: "center" }}>
          <div style={{ marginTop: "10em" }}>
            <p style={{ fontSize: "22px", fontWeight: "800" }}>
              Price Promotion
            </p>
            <p>Upload Video</p>
          </div>

          <div style={{}}>
            <div class="custom-file">
              <input
                style={{ border: "1px solid black" }}
                type="file"
                class="custom-file-input"
                id="inputGroupFile01"
                onChange={(e) => {
                  console.log("file details", e.target.files[0].name);
                  this.setState({ fileName: e.target.files[0].name });
                  this.uploadVideo(e.target.files[0])
                }}
              ></input>
              <label class="custom-file-label" for="inputGroupFile01">
                Choose file
              </label>
            </div>
          </div>

          <button
            type="button"
            class="btn btn-primary"
            style={{ margin: "1em" }}
            onClick={()=>{
                this.props._onClickNextAfterFileUpload("addPrices",this.state.video,this.state.fileName)
            }}
          >
            Next
          </button>
        </div>
      </>
    );
  }
}
