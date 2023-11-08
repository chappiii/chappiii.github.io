import { useMediaQuery } from "react-responsive";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  return (
    <>
      {isDesktopOrLaptop ? (
        <footer className="bg-slate-950 text-3xl text-lime-600 py-4 text-center">
          <div className="container mx-auto flex flex-col items-center justify-center">
            <p className="mb-4">Copyright &copy; 2023 Kidus Mikael</p>
            <div className="inline-flex space-x-4">
              <FaInstagram className="text-4xl" />
              <FaLinkedin className="text-4xl" />
              <FaGithub className="text-4xl" />
            </div>
          </div>
        </footer>
      ) : (
        <footer className="bg-slate-950 text-lime-600 py-4 text-center">
          <div className="container mx-auto flex flex-col items-center justify-center">
            <p className="mb-4">Copyright &copy; 2023 Kidus Mikael</p>
            <div className="inline-flex space-x-4">
              <a href="">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="">
                <FaLinkedin className="text-3xl" />
              </a>
              <a href="">
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
