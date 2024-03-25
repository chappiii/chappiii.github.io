import { useMediaQuery } from "react-responsive";
import axum from "../../assets/axum.png";
import scanner from "../../assets/scanner.png";
import exit from "../../assets/exitprep.png";
import gpt from "../../assets/gpt api.png";
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
                    imgPath={axum}
                    title="Axum"
                    description="movie streaming webapp"
                    demoLink="https://github.com/chappiii/semister-project"
                  />
                </div>

                <div className="mb-4">
                  <ProjectCards
                    imgPath={gpt}
                    title="chat bot"
                    description="chat bot using chatgpt api"
                    demoLink="https://github.com/chappiii"
                  />
                </div>

                <div className="">
                  <ProjectCards
                    imgPath={exit}
                    title="exit"
                    description="ethiopian exit exam preparation web app using MERN"
                    demoLink="https://github.com/chappiii"
                  />
                </div>

                <div className=" col-span-3 justify-center flex">
                  <div className="">
                    <Card className="h-[600px] w-[300px] text-white hover:scale-110 transition-transform duration-300 rounded overflow-hidden shadow-lg border border-lime-600 bg-slate-950">
                      <Card.Img
                        src={scanner}
                        alt="card-img"
                        className="w-64 object-cover object-center mx-5 my-4"
                      />
                      <Card.Body className="mb-6">
                        <Card.Title className="font-bold text-xl mb-2">
                          v25 qrcode scanner
                        </Card.Title>
                        <Card.Text className="mb-6 mx-2">
                          flutter mobile app to scane qrcode version 25
                        </Card.Text>
                        <Button
                          href={"https://github.com/chappiii"}
                          target="_blank"
                          className="bg-slate-900 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
                        >
                          <BsBoxArrowUpRight className="mr-2" />
                          Preview
                        </Button>
                      </Card.Body>
                    </Card>
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
              imgPath={axum}
              title="Axum"
              description="movie streaming webapp"
              demoLink="https://github.com/chappiii/semister-project"
            />
          </div>
          <div className="flex mb-10 justify-center mx-auto">
            <ProjectCards
              imgPath={gpt}
              title="chat bot"
              description="chat bot using chatgpt api"
              demoLink="https://github.com/chappiii"
            />
          </div>

          <div className="flex mb-10 justify-center mx-auto">
            <ProjectCards
              imgPath={exit}
              title="exit"
              description="ethiopian exit exam preparation web app using MERN"
              demoLink="https://github.com/chappiii"
            />
          </div>

          <div className="flex mb-10 justify-center mx-auto">
            <Card className="h-[600px] w-[300px] text-white hover:scale-110 transition-transform duration-300 rounded overflow-hidden shadow-lg border border-lime-600 bg-slate-950">
              <Card.Img
                src={scanner}
                alt="card-img"
                className="w-64 object-cover object-center mx-5 my-4"
              />
              <Card.Body className="mb-6">
                <Card.Title className="font-bold text-xl mb-2">
                  v25 qrcode scanner
                </Card.Title>
                <Card.Text className="mb-6 mx-2">
                  flutter mobile app to scane qrcode version 25
                </Card.Text>
                <Button
                  href={"https://github.com/chappiii"}
                  target="_blank"
                  className="bg-slate-900 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
                >
                  <BsBoxArrowUpRight className="mr-2" />
                  Preview
                </Button>
              </Card.Body>
            </Card>
          </div>
        </>
      )}
    </>
  );
}

export default Projects;
