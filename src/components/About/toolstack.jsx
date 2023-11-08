import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiWindows11,
} from "react-icons/si";

function Toolstack() {
  return (
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
    </div>
  );
}
export default Toolstack;
