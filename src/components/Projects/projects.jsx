import { useMediaQuery } from "react-responsive";
import me from "../../assets/me.jpg";
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
              Here are a few projects I have worked on recently.
              <p></p>
            </div>
            <div className="flex items-center justify-center">
              <div className="grid grid-cols-3 gap-6">
                <div className="mb-4">
                  <ProjectCards
                    imgPath={me}
                    title="exit"
                    description="The biggest Ethiopian Tech News Platform"
                    demoLink="https://googel.com/"
                  />
                </div>

                <div className="">
                  <ProjectCards
                    imgPath={me}
                    title="Axum"
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

                <div className=" col-span-3 justify-center flex">
                  <div className="">
                    <ProjectCards
                      imgPath={me}
                      title="test"
                      description="The biggest Ethiopian Tech News Platform"
                      demoLink="https://googel.com/"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default Projects;
