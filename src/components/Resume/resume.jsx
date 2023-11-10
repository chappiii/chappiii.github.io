import { Document, Page, pdfjs } from "react-pdf";
import pdf from "../../assets/Kidus Mikael Birhanu.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Button from "react-bootstrap/Button";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  return (
    <div className="text-white font-barlow pt-36 bg-slate-950 bg-left-top bg-cover h-fit w-full">
      <Button className="bg-slate-800 hover:bg-lime-700 text-white font-bold py-2 mb-4 px-4 rounded inline-flex items-center">
        Download Resume
      </Button>
      <Document file={pdf} className="mx-32">
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}

export default Resume;
