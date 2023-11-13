import { useMediaQuery } from "react-responsive";
import me from "../../assets/me.jpg";
import me2 from "../../assets/me2.jpg";
import Techstack from "./techstack";
import Toolstack from "./toolstack";
import Github from "./github";
import { ImPointRight } from "react-icons/im";

function About() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  return (
    <>
      {isDesktopOrLaptop ? (
        <>
          <div className="font-barlow bg-slate-950 bg-left-top bg-cover h-fit w-full">
            <div className="w-full pb-12 pt-36 flex justify-center">
              <div className="w-[80%] pt-10">
                <h1 className="text-white text-4xl pb-6">
                  A little about me <span className="text-lime-600">ME</span>
                </h1>
                <p className="text-white text-2xl mb-5 mx-10 text-justify">
                  Hello there <span className="text-lime-600">Kidus</span>
                  here. Born in Addis Ababa and raised in Dire Dawa, Ethiopia.
                  I'm an Electrical and computer engineering senior year student
                  at Mekelle/Dire Dawa University. <br />
                  <br />
                  Apart from coding, what do I enjoy?
                  <br /> <br /> 👉🏾 Playing basketball
                  <br />
                  👉🏾 gaming <br />
                  👉🏾 reading books <br /> 👉🏾 traveling
                </p>
              </div>
            </div>
          </div>
          <h1 className="bg-slate-950 text-white text-5xl pb-5">
            Professional <span className="text-lime-600">Skillset</span>
          </h1>
          <Techstack />
          <h1 className="bg-slate-950 text-white text-5xl pb-5">
            {" "}
            <span className="text-lime-600">Tools</span> I use
          </h1>
          <Toolstack />
          <Github />
        </>
      ) : (
        <>
          <h1 className="text-white text-3xl pt-36 pb-3">
            A little about me <span className="text-lime-600">ME</span>
          </h1>
          <p className="text-white text-2xl mb-10 mx-12 text-left">
            Hello there <span className="text-lime-600">Kidus</span> here. Born
            in Addis Ababa and raised in Dire Dawa, Ethiopia. I'm an Electrical
            and computer engineering senior year student at Mekelle/Dire Dawa
            University. <br />
            <br />
            Apart from coding, what do I enjoy?
            <br /> <br /> 👉🏾 Playing basketball
            <br />
            👉🏾 gaming <br />
            👉🏾 reading books <br /> 👉🏾 traveling
          </p>
          <h1 className="bg-slate-950 text-white text-3xl pb-5">
            Professional <span className="text-lime-600">Skillset</span>
          </h1>
          <div className="">
            <Techstack />
          </div>
          <h1 className="bg-slate-950 text-white text-3xl pb-5">
            {" "}
            <span className="text-lime-600">Tools</span> I use
          </h1>
          <Toolstack />
          <Github />
        </>
      )}
    </>
  );
}

export default About;
