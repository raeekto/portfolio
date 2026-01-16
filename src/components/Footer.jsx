import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="bg-sky-300 flex flex-col items-center gap-y-1.5 m-1 p-40 px-2 border-b-8 border-indigo-950">
          <div className="">
            <h1 className="heading-style text-black sm:text-2xl">work in Tech fiels since 2022</h1>
            <ul className="flex flex-col items-center">
                <li className=""><a href="/" className="anchor-style underline">Home</a></li>
                <li className=""><a href="/" className="anchor-style underline">Details</a></li>
                <li className=""><a href="/" className="anchor-style underline">Ref</a></li>
            </ul>
          </div>
          <p className="text-sm">
            <FontAwesomeIcon icon={faCopyright} className="text-[14px]" />
            copyright-{new Date().getFullYear()}, Company <span className="underline hover:font-bold"><a href="/">miniWorld</a></span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
