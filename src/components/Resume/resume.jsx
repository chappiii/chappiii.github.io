import { useState, useEffect } from "react";
import Particle from "../Particle";
import pdf from "../../assets/Kidus Resume.pdf";
import { AiOutlineDownload, AiOutlineLoading3Quarters } from "react-icons/ai"; // Import the spinning icon
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://raw.githubusercontent.com/chappiii/chappiii.github.io/master/src/assets/Kidus%20Resume.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center pt-16">
      <div className="resume-section w-full max-w-4xl mx-auto shadow-lg p-8">
        <Particle />
        <div className="flex justify-center py-5">
          <a
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-lime-700 hover:bg-lime-600"
          >
            <AiOutlineDownload />
            Download Resume
          </a>
        </div>
        <div className="resume flex justify-center">
          <Document file={resumeLink} onLoadSuccess={() => setLoading(false)}>
            <Page
              pageNumber={1}
              renderTextLayer={false}
              scale={width > 786 ? 1.5 : 0.6}
            />
          </Document>
        </div>
        {loading && (
          <div className="flex justify-center items-center mt-5">
            <AiOutlineLoading3Quarters className="animate-spin text-6xl text-lime-500" />
          </div>
        )}{" "}
        <div className="flex justify-center py-5">
          <a
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-lime-700 hover:bg-lime-600"
          >
            <AiOutlineDownload />
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default ResumeNew;
