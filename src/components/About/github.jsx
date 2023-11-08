import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <div className="bg-slate-950 text-white flex flex-col items-center justify-center pb-12 p-5">
      <h1 className="text-5xl pb-5 text-center">
        Days I <strong className="text-lime-600">Code</strong>
      </h1>
      <GitHubCalendar
        username="chappiii"
        blockSize={15}
        blockMargin={5}
        // color="#709df0"
        fontSize={16}
      />
    </div>
  );
}

export default Github;
