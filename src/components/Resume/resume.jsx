import { useState, useEffect } from "react";
import Particle from "../Particle";
import pdf from "../../assets/Kidus Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://raw.githubusercontent.com/chappiii/chappiii.github.io/master/src/assets/Kidus%20Resume.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center h-[50] justify-center pt-36">
      <div className="resume-section w-full max-w-4xl mx-auto shadow-lg p-8">
        <Particle />
        <div className="flex justify-center py-5">
          <a
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            <AiOutlineDownload className="" />
            Download Resume
          </a>
        </div>

        <div className="resume flex justify-center">
          <Document file={resumeLink}>
            <Page
              pageNumber={1}
              renderTextLayer={false}
              scale={width > 786 ? 1.5 : 0.6}
            />
          </Document>
        </div>
      </div>
    </div>
  );
}

export default ResumeNew;
