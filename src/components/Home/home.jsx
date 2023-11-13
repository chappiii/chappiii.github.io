import { useMediaQuery } from "react-responsive";
import me2 from "../../assets/me2.jpg";
// import me from "../../assets/me.jpg";
import Type from "./type";

function Home() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  return (
    <>
      {isDesktopOrLaptop ? (
        <div className="font-barlow bg-slate-950 bg-left-top bg-cover h-fit w-full">
          <div className="flex flex-col pb-12 pt-44">
            <div className="flex">
              <div className=" text-white w-[60%] pt-10">
                <h1 className=" text-4xl pb-6">
                  Hello! <span>👋🏻</span>
                </h1>
                <h1 className="text-4xl pb-6">
                  I am
                  <strong className="text-lime-600"> Kidus Mikael</strong>
                </h1>
                <div className="text-4xl text-lime-600">
                  <Type />
                </div>
              </div>

              <div className="w-[20%]">
                <img src={me2} className="rounded-full" alt="me" />
              </div>
            </div>
          </div>

          <div className="w-full pb-12 pt-36 flex justify-center">
            <div className="w-[80%] pt-10">
              <h1 className="text-white text-4xl pb-6">
                <span className="text-lime-600">Somethings</span> you should
                Know about me
              </h1>
              <p className="text-white text-2xl mx-10 text-justify">
                I'm in love with the process of learning and figuring things
                out. Tech enthusiast!!! <br />
                <br />
                I started my programming journey In my third year of studying
                computer engineering with C++. Then continued to learn python
                eventually As my interest in web development grew mastered
                JavaScript. <br />
                <br />
                My learning journey underwent a significant shift during my
                internship at NID, where I had the privilege of learning from
                some of the best in the field. <br />
                <br />
                I'm highly interested in Machine Learning and Computer vision.
                Want to continue my learning journey and figure more things out
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className=" text-white pt-56 mb-10">
            <h1 className=" text-4xl pb-6">
              Hello! <span>👋🏻</span>
            </h1>
            <h1 className="text-4xl pb-6">
              I am
              <strong className="text-lime-600"> Kidus Mikael</strong>
            </h1>
            <div className="text-2xl text-lime-600">
              <Type />
            </div>
          </div>
          <div className="w-[50%] flex mx-auto mb-28">
            <img src={me2} className="rounded-full" alt="me" />
          </div>
          <div className="pb-10">
            <h1 className="text-white mx-10 text-4xl pb-6">
              <span className="text-lime-600">Somethings</span> you should Know
              about me
            </h1>
            <p className="text-white text-xl mx-8 text-left">
              I'm in love with the process of learning and figuring things out.
              Tech enthusiast!!! <br />
              <br />
              I started my programming journey In my third year of studying
              computer engineering with C++. Then continued to learn python
              eventually As my interest in web development grew mastered
              JavaScript. <br />
              <br />
              My learning journey underwent a significant shift during my
              internship at NID, where I had the privilege of learning from some
              of the best in the field. <br />
              <br />
              I'm highly interested in Machine Learning and Computer vision.
              Want to continue my learning journey and figure more things out
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
