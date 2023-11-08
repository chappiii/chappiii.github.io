import { useMediaQuery } from "react-responsive";
import me from "../../assets/me.jpg";

function Home() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  return (
    <>
      {isDesktopOrLaptop ? (
        <div className="font-barlow bg-slate-950 bg-left-top bg-cover h-fit w-full">
          <div className="flex flex-col pb-12 pt-36">
            <div className="flex">
              <div className=" justify-center w-[70%] pt-10">
                <h1 className="text-white text-6xl pb-6">
                  <span className="text-green">hello</span> hello
                </h1>
                <p className="text-white text-3xl w-[90%] pl-12">hello</p>
                <div className="flex items-center grid-cols-3 gap-5 mt-8 pl-12"></div>
              </div>

              <div className="w-[20%]">
                <img src={me} alt="" />
              </div>
            </div>
          </div>

          <div className="flex flex-col pb-12 pt-36">
            <div className="flex">
              <div className=" justify-center w-[70%] pt-10">
                <h1 className="text-white text-6xl pb-6">
                  <span className="text-green">hello</span> hello
                </h1>
                <p className="text-white text-3xl w-[90%] pl-12">hello</p>
                <div className="flex items-center grid-cols-3 gap-5 mt-8 pl-12"></div>
              </div>

              <div className="w-[20%]">
                <img src={me} alt="" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="font-barlow bg-slate-950 bg-left-top bg-cover h-fit w-full">
          {/* Use flex-col for mobile and md:flex-row for larger screens */}
          <div className="flex flex-col items-center pb-12 pt-36 md:flex-row md:items-start">
            {/* Center the content for mobile and use w-full, and adjust for larger screens */}
            <div className="flex flex-col items-center justify-center w-full pt-10 md:w-[70%] md:items-start md:justify-start">
              <h1 className="text-white text-6xl text-center pb-6 md:text-left">
                <span className="text-green">hello</span> hello
              </h1>
              {/* Center the text for mobile and adjust padding for larger screens */}
              <p className="text-white text-3xl w-[90%] md:pl-12">hello</p>
              {/* Ensure the div is centered for mobile */}
              <div className="flex items-center justify-center w-full grid-cols-3 gap-5 mt-8 md:pl-12"></div>
            </div>

            {/* Image container - Make it take full width on mobile and adjust size for larger screens */}
            <div className="w-full pb-12 md:w-[20%] md:pb-0">
              <img src={me} alt="" className="mx-auto" />{" "}
              {/* Center the image */}
            </div>
          </div>

          {/* Repeat the same structure for any other similar sections */}
          <div className="flex flex-col items-center pb-12 pt-36 md:flex-row md:items-start">
            <div className="flex flex-col items-center justify-center w-full pt-10 md:w-[70%] md:items-start md:justify-start">
              <h1 className="text-white text-6xl text-center pb-6 md:text-left">
                <span className="text-green">hello</span> hello
              </h1>
              <p className="text-white text-3xl w-[90%] md:pl-12">hello</p>
              <div className="flex items-center justify-center w-full grid-cols-3 gap-5 mt-8 md:pl-12"></div>
            </div>

            <div className="w-full pb-12 md:w-[20%] md:pb-0">
              <img src={me} alt="" className="mx-auto" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
