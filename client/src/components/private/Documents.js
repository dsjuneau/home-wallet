import React, { Component } from "react";
import Upload from "./Upload";
import { Button, Modal, ModalBody, ModalFooter, Alert } from "reactstrap";
import axios from "axios";

export class Documents extends Component {
  // console.log(this.props);
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      selectedFiles: null,
      modal: false,
      visible: false,
      message: "",
      color: "",
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  }

  singleFileChangedHandler = event => {
    // console.log(event.target.files);
    this.setState({
      selectedFile: event.target.files[0],
    });
  };

  singleFileUploadHandler = () => {
    const data = new FormData();
    // If file selected
    if (this.state.selectedFile) {
      data.append(
        "profileImage",
        this.state.selectedFile,
        this.state.selectedFile.name
      );
      axios
        .post("/api/uploads/home-file-upload", data, {
          headers: {
            accept: "application/json",
            "Accept-Language": "en-US,en;q=0.8",
            "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
          },
        })
        .then(response => {
          if (200 === response.status) {
            // If file size is larger than expected.
            if (response.data.error) {
              if ("LIMIT_FILE_SIZE" === response.data.error.code) {
                this.onShowAlert("Max size: 2MB", "danger");
              } else {
                console.log(response.data);
                // If not the given file type
                this.onShowAlert(response.data.error, "danger");
              }
            } else {
              // Success
              let fileName = response.data;
              console.log("fileName", fileName);
              this.onShowAlert("Document Uploaded Successfully", "success");
            }
          }
        })
        .catch(error => {
          // If another error
          this.onShowAlert(error, "danger");
        });
    } else {
      // if file not selected throw error
      this.onShowAlert("Please upload file", "danger");
    }
  };

  onShowAlert = (message, color) => {
    this.setState({ visible: true, message, color }, () => {
      window.setTimeout(() => {
        this.setState({ visible: false, modal: false });
      }, 4000);
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="card mt-2" />
          <div className="card-header mb-4 bg-secondary text-white">
            <h3 className="text-center mt-4 ">
              <i className="fas fa-file-pdf" /> &nbsp; Document List
            </h3>
          </div>
          <div className="card-body">
            <div className="text-right">
              <a
                className="btn btn-info"
                href="/AddDocument/"
                onClick={this.toggle}
              >
                <i className="fa fa-plus-circle" aria-hidden="true" />
                &nbsp; Add Document
              </a>
            </div>
            {/* <div>
              <input type="file" onChange={e => this.props.showFile(e)} />
            </div> */}
            {/* <br /> */}
          </div>
        </div>
        <div>
          {/* <Button color="danger" onClick={this.toggle}>
            {/* {this.props.buttonLabel} */}
          {/* Hello World */}
          {/* </Button>  */}
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalBody>
              <Alert color={this.state.color} isOpen={this.state.visible}>
                {this.state.message}
              </Alert>
              <Upload
                onShowAlert={this.onShowAlert}
                singleFileChangedHandler={this.singleFileChangedHandler}
                singleFileUploadHandler={this.singleFileUploadHandler}
              />
            </ModalBody>
            <ModalFooter>
              <button
                className="btn btn-info"
                onClick={this.singleFileUploadHandler}
              >
                Upload!
              </button>
              {/* <Button color="info" onClick={this.toggle}>
                Upload
              </Button>*/}
              <Button color="danger" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}

export default Documents;
