import { useMediaQuery } from "react-responsive";
import scanner from "../../assets/scanner.png";
import exit from "../../assets/exitprep.png";
import gpt from "../../assets/gpt api.png";
import kmean from "../../assets/k-mean.jpg"
import spam from "../../assets/spam.png"
import AZ from "../../assets/AZ.webp"
import ProjectCards from "./projectcards";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsBoxArrowUpRight } from "react-icons/bs";

function Projects() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return (
    <>
      {isDesktopOrLaptop ? (
        <>
          <div className="font-barlow bg-slate-950  bg-left-top bg-cover h-fit w-full">
            <div className="text-white pt-36 pb-10">
              <h1 className="text-3xl pb-3">
                My Recent <strong className="text-lime-600">Works </strong>
              </h1>
              <p>Here are a few projects I have worked on recently.</p>
            </div>

            <div className="flex items-center justify-center">
              <div className="grid grid-cols-3 gap-6">
                <div className="mb-4">
                  <ProjectCards
                    imgPath={AZ}
                    title="Alzheimer’s Screening"
                    description="Comparative Analysis of Machine Learning Models for Alzheimer’s Diseas"
                    demoLink="https://github.com/chappiii/Alzheimer-Disease-classification/blob/main/A%20Comparative%20Analysis%20of%20Machine%20Learning%20Models%20for%20Alzheimer%E2%80%99s%20Disease%20Screening.pdf"
                  />
                </div>
                <div className="mb-4">
                  <ProjectCards
                    imgPath={gpt}
                    title="Exam Prep"
                    description="Ethiopian Exit Exam Prep with ChatGPT"
                    demoLink="https://github.com/chappiii/EXIT-gpt"
                  />
                </div>

                <div className="">
                  <ProjectCards
                    imgPath={spam}
                    title="Spam Detection"
                    description="Experimental Comparison of Learning Algorithms for Spam Detection"
                    demoLink="https://github.com/chappiii/Experimental-Comparison-of-Learning-Algorithms-for-Spam-Detection/blob/new/Experimental_Comparison_of_Learning_Algorithms_for_Spam_Detection.pdf"
                  />
                </div>

                <div className=" col-span-3 justify-center flex">
                <div className="">
                  <ProjectCards
                    imgPath={kmean}
                    title="k-means Clustering"
                    description="K-Means Clustering Implementation in C"
                    demoLink="https://github.com/chappiii/Experimental-Comparison-of-Learning-Algorithms-for-Spam-Detection/blob/new/Experimental_Comparison_of_Learning_Algorithms_for_Spam_Detection.pdf"
                  />
                </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="text-white pt-36 pb-10">
            <h1 className="text-3xl pb-3">
              My Recent <strong className="text-lime-600">Works </strong>
            </h1>
            <p>Here are a few projects I have worked on recently.</p>
          </div>
          <div className="flex mb-10 justify-center mx-auto">
            <ProjectCards
              imgPath={AZ}
              title="Alzheimer’s Screening"
              description="Comparative Analysis of Machine Learning Models for Alzheimer’s Diseas"
              demoLink="https://github.com/chappiii/Alzheimer-Disease-classification/blob/main/A%20Comparative%20Analysis%20of%20Machine%20Learning%20Models%20for%20Alzheimer%E2%80%99s%20Disease%20Screening.pdf"
            />
          </div>
          <div className="flex mb-10 justify-center mx-auto">
            <ProjectCards
              imgPath={gpt}
              title="Exam Prep"
              description="Ethiopian Exit Exam Prep with ChatGPT"
              demoLink="https://github.com/chappiii/EXIT-gpt"
            />
          </div>

          <div className="flex mb-10 justify-center mx-auto">
            <ProjectCards
              imgPath={spam}
              title="Spam Detection"
              description="Experimental Comparison of Learning Algorithms for Spam Detection"
              demoLink="https://github.com/chappiii/Experimental-Comparison-of-Learning-Algorithms-for-Spam-Detection/blob/new/Experimental_Comparison_of_Learning_Algorithms_for_Spam_Detection.pdf"
            />
          </div>

          <div className="flex mb-10 justify-center mx-auto">
           <ProjectCards
              imgPath={kmean}
              title="k-means Clustering"
              description="K-Means Clustering Implementation in C"
              demoLink="https://github.com/chappiii/Experimental-Comparison-of-Learning-Algorithms-for-Spam-Detection/blob/new/Experimental_Comparison_of_Learning_Algorithms_for_Spam_Detection.pdf"
            />
          </div>
        </>
      )}
    </>
  );
}

export default Projects;
