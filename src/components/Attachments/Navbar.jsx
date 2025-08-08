import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowDropdown } from "react-icons/io";
import { RiMenuFold2Line } from "react-icons/ri";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import NavbarItem from "../Navbar/NavbarItem";
import NavButton from "./NavButton";
import NavModal from "../Navbar/NavModal";
import Button from "../Button";
import { Link } from "react-router";

export const navbarList = [
  {
    id: 1,
    title: "welcome",
    imageUrl: null,
    link: "/",
    tooltip: "welcome to mom pharmacy",
  },
  {
    id: 2,
    title: "about us",
    imageUrl: null,
    link: "/about",
    tooltip: "explore this page to know more about us",
  },
  {
    id: 3,
    title: "our team",
    imageUrl: null,
    link: "/ourteams",
    tooltip: "meet our incredible team",
  },
  { id: 4, title: "", imageUrl: "/Navbar/logo.png", link: "/", tooltip: "mom" },
  {
    id: 5,
    title: "careers",
    imageUrl: null,
    link: "/career",
    tooltip: "make your career grow with us",
  },
  {
    id: 6,
    title: "for investors",
    imageUrl: null,
    link: "/investors",
    tooltip: "for investors who love business",
  },
  {
    id: 7,
    title: "contact us",
    imageUrl: null,
    link: "/contactus",
    tooltip: "contact us for any feedback suggestions or grievances",
  },
];

const languageList = [
  { id: 1, title: "english" },
  { id: 2, title: "hindi" },
  { id: 3, title: "telugu" },
  { id: 4, title: "tamil" },
  { id: 5, title: "urdu" },
];

function RenderLanguage({ language, setActiveLanguage, setShowLanguages }) {
  const handleChangeLanguage = () => {
    setActiveLanguage(language);
    setShowLanguages(false);
  };

  return (
    <li className="flex flex-col justify-stretch">
      <Button title={language.title} onClick={handleChangeLanguage} />
    </li>
  );
}

export function RenderLink({ showLink, setShowLink }) {

  return (
    <Link to="/momp">  <div
      className="bg-white text-black py-2 px-3 rounded-full font-semibold flex flex-col items-center cursor-pointer"
      onMouseEnter={() => setShowLink(true)}
      onMouseLeave={() => setShowLink(false)}
    >
      <p>momp.in</p>
      <AnimatePresence>
        {showLink && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute mt-8 text-white"
          >
            <p>mompharmacy.in</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </Link>
  );
}

function Navbar() {
  const [showLink, setShowLink] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState(languageList[0]);
  const [inactiveLanguages, setInactiveLanguages] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const scriptId = 'google-translate-script';

    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    }

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: 'en' },
        'google_translate_element'
      );
    };
  }, []);


  useEffect(() => {
    const remainingLanguages = languageList.filter(
      (item) => item.id !== activeLanguage.id
    );
    setInactiveLanguages(remainingLanguages);
  }, [activeLanguage]);

  return (
    <div className="fixed top-0 left-0 w-full z-40">
      {/* Desktop/Large screens */}
      <div className="hidden md:block">
        <div className="bg-[#00A79B] px-2 md:px-10 py-2 flex justify-between items-center w-full h-[80px]">
          {/* Left: Home link */}
          <RenderLink setShowLink={setShowLink} showLink={showLink} />

          <div className="items-center flex gap-8">
            <ul className="flex items-center gap-10 border-3 border-white  rounded-full  px-4 py-1 font-[32px]">
              {navbarList.slice(0, 3).map((item) => (
                <NavbarItem
                  key={item.id}
                  title={item.title}
                  image={item.imageUrl}
                  link={item.link}
                  tooltip={item.tooltip}
                />
              ))}
            </ul>
            <div className="mx-2 ">
              <img
                src="/Home/appicon.png"
                alt="mom pharmacy"
                className="w-20 object-contain"
              />
            </div>
            <ul className="flex item-center gap-10 border-3 border-white rounded-full px-4 py-1 font-[32px]">
              {navbarList.slice(4).map((item) => (
                <NavbarItem
                  key={item.id}
                  title={item.title}
                  image={item.imageUrl}
                  link={item.link}
                  tooltip={item.tooltip}
                />
              ))}
            </ul>

            <Tooltip id="react-tooltip" />
          </div>

          {/* Right: Language selection */}
          <div className="flex items-center justify-center">
            <div
              id="google_translate_element"
              className="inline-block align-middle mt-12 text-[0px] w-[100px]"
            ></div>
          </div>


        </div>
      </div>

      {/* Mobile/Small screens */}
      <div className="block md:hidden mt-0">
        <div className="bg-[#00A79B] px-1 py-1 flex justify-between items-center">
          <NavButton onClick={() => setShowModal(true)}>
            <div className="flex items-center gap-1 ">
              <p>menu</p>
              <span className="mt-1">
                <RiMenuFold2Line />
              </span>
            </div>
          </NavButton>
          <img
            src="/Home/appicon.png"
            alt="mom pharmacy"
            className="w-15 h-15"
          />
          <div className="flex flex-col items-center">
            <button
              className="bg-white text-black px-4 py-2 rounded-full font-semibold flex items-center gap-1 hover:bg-amber-300 ease-in-out duration-100 min-w-28 justify-center"
              onClick={() => setShowLanguages(!showLanguages)}
            >
              {activeLanguage.title}
              <IoIosArrowDropdown className="mt-1" />
            </button>
            {showLanguages && (
              <div className="absolute mt-10 bg-black/75 text-white p-1 rounded-2xl">
                <ul className="flex flex-col gap-5">
                  {inactiveLanguages.map((item) => (
                    <RenderLanguage
                      key={item.id}
                      setShowLanguages={setShowLanguages}
                      language={item}
                      setActiveLanguage={setActiveLanguage}
                    />
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Modal for mobile menu */}
        <AnimatePresence mode="wait">
          {showModal && (
            <NavModal
              setShowModal={setShowModal}
              showLink={showLink}
              setShowLink={setShowLink}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Navbar;