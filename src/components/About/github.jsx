import GitHubCalendar from "react-github-calendar";
import { useMediaQuery } from "react-responsive";

function Github() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return (
    <>
      {isDesktopOrLaptop ? (
        <div className="bg-slate-950 text-white flex flex-col items-center justify-center pb-12 p-5">
          <h1 className="text-5xl pb-5 text-center">
            Days I <strong className="text-lime-600">Code</strong>
          </h1>
          <GitHubCalendar
            username="chappiii"
            blockSize={15}
            blockMargin={5}
            fontSize={16}
          />
        </div>
      ) : (
        <div className="bg-slate-950 text-white flex flex-col items-center justify-center pb-12 p-5">
          <h1 className="text-3xl pb-5 text-center">
            Days I <strong className="text-lime-600">Code</strong>
          </h1>
          <div className="max-w-xs">
            <GitHubCalendar
              username="chappiii"
              blockSize={9}
              blockMargin={2}
              fontSize={14}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Github;
