import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiWindows11,
  SiJupyter
} from "react-icons/si";
import { useMediaQuery } from "react-responsive";

function Toolstack() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return (
    <>
      {isDesktopOrLaptop ? (
        <div className="flex bg-slate-950 text-white justify-center flex-wrap pb-12">
          <div className="p-4 mx-4 px-5 border border-white rounded tech-icons">
            <SiLinux className="text-7xl" />
          </div>
          <div className="p-4 mx-4 px-5 border border-white rounded tech-icons">
            <SiVisualstudiocode className="text-7xl" />
          </div>
          <div className="p-4 mx-4 px-5 border border-white rounded tech-icons">
            <SiPostman className="text-7xl" />
          </div>
          <div className="p-4 mx-4 px-5 border border-white rounded tech-icons">
            <SiWindows11 className="text-7xl" />
          </div>
          <div className="p-4 mx-4 px-5 border border-white rounded tech-icons">
            <SiJupyter className="text-7xl" />
        </div>
        </div>
      ) : (
        <div className="flex bg-slate-950 text-white justify-center flex-wrap pb-12">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 mx-1 px-5 border border-white rounded tech-icons">
              <SiLinux className="text-7xl" />
            </div>
            <div className="p-4 mx-1 px-5 border border-white rounded tech-icons">
              <SiVisualstudiocode className="text-7xl" />
            </div>
            <div className="p-4 mx-1 px-5 border border-white rounded tech-icons">
              <SiPostman className="text-7xl" />
            </div>
            <div className="p-4 mx-1 px-5 border border-white rounded tech-icons">
              <SiWindows11 className="text-7xl" />
            </div>
            <div className="col-span-2 flex justify-center">
              <div className="p-4 mx-4 px-5 border border-white rounded tech-icons">
                <SiJupyter className="text-7xl" />
              </div>
            </div>
          </div>
        </div>
      )}{" "}
    </>
  );
}
export default Toolstack;
