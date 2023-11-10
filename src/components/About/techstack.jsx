import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiVuedotjs,
  SiFlutter,
  SiMysql,
  SiTensorflow,
  SiDocker,
  SiDjango,
} from "react-icons/si";

function Techstack() {
  return (
    <div className="flex items-center pb-12 justify-center bg-slate-950 text-white ">
      <div className="grid grid-cols-5 gap-4">
        <div className="m-2 p-4 border border-white rounded tech-icons">
          <DiJavascript1 className="text-7xl" />
        </div>
        <div className="m-2 p-4 border border-white rounded tech-icons">
          <DiNodejs className="text-7xl" />
        </div>
        <div className="m-2 p-4 border border-white rounded tech-icons">
          <DiReact className="text-7xl" />
        </div>
        <div className="m-2 p-4 border border-white rounded tech-icons">
          <SiVuedotjs className="text-7xl" />
        </div>
        <div className="m-2 p-4 border border-white rounded tech-icons">
          <SiFlutter className="text-7xl" />
        </div>
        <div className="m-2 p-4 border border-white rounded tech-icons">
          <DiGit className="text-7xl" />
        </div>
        <div className="m-2 p-4 border border-white rounded tech-icons">
          <DiPython className="text-7xl" />
        </div>
        <div className="m-2 p-4 border border-white rounded tech-icons">
          <SiTensorflow className="text-7xl" />
        </div>
        <div className="m-2 p-4 border border-white rounded tech-icons">
          <DiMongodb className="text-7xl" />
        </div>
        <div className="m-2 p-4 border border-white rounded tech-icons">
          <SiMysql className="text-7xl" />
        </div>
        <div className="col-span-5 flex justify-center">
          <div className="m-2 p-4 border border-white rounded tech-icons">
            <SiDjango className="text-7xl" />
          </div>
          <div className="m-2 p-4 border border-white rounded tech-icons">
            <SiDocker className="text-7xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Techstack;
