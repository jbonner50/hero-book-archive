import React, { Component } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import file from "../pdfs/applicationCSE.pdf";

class PDFview extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
    scale: 1.0
  };
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

  componentDidMount() {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  }

  render() {
    return (
      <div id="pdf-viewer">
        <div id="entry-btn-group" className="d-flex justify-content-center">
          <button id="prevEntry" className="arrow btn btn-secondary btn-sm">
            <i className="fas fa-arrow-circle-left"></i>
            <span> Prev Entry</span>
          </button>
          <button id="nextEntry" className="arrow btn btn-secondary btn-sm">
            <span>Next Entry </span>
            <i className="fas fa-arrow-circle-right"></i>
          </button>
        </div>
        <div id="pdf">
          <Document file={file}>
            <Page pageNumber={1} height={1500} />
          </Document>
        </div>
      </div>
    );
  }
}

export default PDFview;
