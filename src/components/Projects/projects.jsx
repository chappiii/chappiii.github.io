import { useMediaQuery } from "react-responsive";
import me from "../../assets/me.jpg";
import axum from "../../assets/axum.png";
import ProjectCards from "./projectcards";

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
                <div className="mb-4 ">
                  <ProjectCards
                    imgPath={axum}
                    title="exit"
                    description="movie streaming webapp"
                    demoLink="https://googel.com/"
                  />
                </div>

                <div className="">
                  <ProjectCards
                    imgPath={me}
                    title="v25 qrcode scanner"
                    description="The biggest Ethiopian Tech News Platform"
                    demoLink="https://googel.com/"
                  />
                </div>

                <div className="">
                  <ProjectCards
                    imgPath={me}
                    title="v25 qrcode scanner"
                    description="The biggest Ethiopian Tech News Platform"
                    demoLink="https://googel.com/"
                  />
                </div>

                <div className=" col-span-3 justify-center flex">
                  <div className="">
                    <ProjectCards
                      imgPath={me}
                      title="Axum"
                      description="movie streaming webapp"
                      demoLink="https://googel.com/"
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
              imgPath={me}
              title="Axum"
              description="movie streaming webapp"
              demoLink="https://googel.com/"
            />
          </div>
          <div className="flex mb-10 justify-center mx-auto">
            <ProjectCards
              imgPath={me}
              title="Axum"
              description="movie streaming webapp"
              demoLink="https://googel.com/"
            />
          </div>

          <div className="flex mb-10 justify-center mx-auto">
            <ProjectCards
              imgPath={me}
              title="Axum"
              description="movie streaming webapp"
              demoLink="https://googel.com/"
            />
          </div>

          <div className="flex mb-10 justify-center mx-auto">
            <ProjectCards
              imgPath={axum}
              title="Axum"
              description="movie streaming webapp"
              demoLink="https://googel.com/"
            />
          </div>
        </>
      )}
    </>
  );
}

export default Projects;
