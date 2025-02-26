import { useMediaQuery } from "react-responsive";
import { FaTelegram, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  return (
    <>
      {isDesktopOrLaptop ? (
        <footer className="bg-slate-950 text-3xl text-lime-600 py-4 text-center">
          <div className="container mx-auto flex flex-col items-center justify-center">
            <p className="mb-4">Copyright &copy; 2025 Kidus Mikael</p>
            <div className="inline-flex space-x-4">
              <a
                href="https://t.me/Chappi_mikael"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegram className="text-4xl" />
              </a>
              <a href="https://www.linkedin.com/in/kidus-mikael-877b63235/">
                <FaLinkedin className="text-4xl" />
              </a>
              <a
                href="https://github.com/chappiii"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-4xl" />
              </a>
            </div>
          </div>
        </footer>
      ) : (
        <footer className="bg-slate-950 text-lime-600 py-4 text-center">
          <div className="container mx-auto flex flex-col items-center justify-center">
            <p className="mb-4">Copyright &copy; 2025 Kidus Mikael</p>
            <div className="inline-flex space-x-4">
              <a href="https://t.me/Chappi_mikael">
                <FaTelegram className="text-3xl" />
              </a>
              <a href="https://www.linkedin.com/in/chapp%C3%AC-mikael-877b63235">
                <FaLinkedin className="text-3xl" />
              </a>
              <a href="https://github.com/chappiii">
                <FaGithub className="text-3xl" />
              </a>
            </div>
          </div>
        </footer>
      )}
    </>
  );
}

export default Footer;
