import React, { Component } from "react";

class PDFview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numPages: null,
      pageNumber: 1,
      scale: 1.0
    };
  }
  // Custom pagination component
  onPageChange(pageNumber) {
    this.setState({ pageNumber: pageNumber + 1 });
  }

  onDocumentLoad({ numPages }) {
    this.setState({ numPages });
  }

  onPageLoad(page) {
    const parentDiv = document.querySelector("#pdfDocument");
    let pageScale = parentDiv.clientWidth / page.originalWidth;
    if (this.state.scale !== pageScale) {
      this.setState({ scale: pageScale });
    }
  }

  render() {
    return (
      <div id="pdfViewer">
        <div className="d-flex justify-content-center">
          <button id="prevEntry" className="arrow btn btn-secondary btn-sm">
            <i className="fas fa-arrow-circle-left"></i>
            <span> Prev Entry</span>
          </button>
          <button id="nextEntry" className="arrow btn btn-secondary btn-sm">
            <span>Next Entry </span>
            <i className="fas fa-arrow-circle-right"></i>
          </button>
        </div>
        <iframe
          title="Current PDF"
          src="https://drive.google.com/file/d/13QS7Thp_h3qyRMWugfeCrVUyPzLKWbOM/preview"
          height="500"
          frameborder="0"
        ></iframe>
        {/* <Document file={file}>
          <Page pageNumber={1} height={1500} />
        </Document> */}
      </div>
    );
  }
}

export default PDFview;
