import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Radio,
  RadioGroup,
} from "@headlessui/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Routing } from "../shared/Routing";
import { IoMdClose } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import { BiCheckCircle } from "react-icons/bi";
import { Allert_Popup_Icon } from "../../assets/icon";
import OutlineBtn from "../pages/common/OutlineBtn";
import Popup from "../pages/common/Popup";

const Header = () => {
  const navigate = useNavigate();
  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Categories", href: "/categories" },
  ];
  const Studentnavigation = [
    { name: "Dashboard", href: Routing.StudentDashboard },
    { name: "My Profile", href: Routing.StudentProfile },
    { name: "Messages", href: Routing.StudentMessages },
  ];

  const Instructornavigation = [
    { name: "Dashboard", href: Routing.InstructorDashboard },
    { name: "My Profile", href: Routing.InstructorProfile },
    { name: "Create Class", href: Routing.InstructorCreateClass },
    { name: "Chat", href: Routing.InstructorChat },
    { name: "Message Requests", href: Routing.InstructorMessageRequests },
  ];

  const mailingLists = [
    { id: 1, title: "Login as Student" },
    { id: 2, title: "Login as Instructor" },
  ];

  const location = useLocation();
  const currentLocation = location.pathname;
  const loggedIn = localStorage.getItem("token");

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpen, SetisOpen] = useState(false);
  const [selectedMailingLists, setSelectedMailingLists] = useState("");
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });

  const heandleLogOut = () => {
    localStorage.clear();
    SetisOpen(false);
    setSelectedMailingLists("");
    navigate(Routing.Initial);
  };

  useEffect(
    () => {
      if (selectedMailingLists.title === "Login as Student") {
        navigate(Routing.StudentLogin);
        setSelectedMailingLists("");
      } else if (selectedMailingLists.title === "Login as Instructor") {
        navigate(Routing.InstructorLogin);
        setSelectedMailingLists("");
      }
    },
    // eslint-disable-next-line
    [selectedMailingLists]
  );

  const userName = JSON.parse(localStorage.getItem("email"))?.charAt(0);

  const Role = JSON.parse(localStorage.getItem("Role"));

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition({ x: window.scrollX, y: position });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClasses = `sticky top-0 left-0 z-[9] ${
    scrollPosition.y >= 50
      ? "bg-primary/6  0 backdrop-filter backdrop-blur-lg"
      : "bg-transparent"
  }`;

  return (
    <>
      <header className={headerClasses}>
        <nav
          aria-label="Global"
          className="mx-auto flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex flex-1">
            <h2 className="font-extrabold text-lg leading-[21.6px] tracking-[-1px]">
              martial arts hub.
            </h2>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <FaBars />
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item, i) => (
              <Link
                key={i}
                to={item.href}
                className={`text-sm leading-6 hover:text-black ${
                  currentLocation === item.href
                    ? "font-semibold text-black relative after:absolute after:bg-black after:h-[2px] after:w-[20px] after:bottom-0 after:left-0"
                    : "text-black/50 font-normal"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <OutlineBtn
            text={"Be Come a Instructor"}
            className={"bg-black text-white mx-12 h-[42px] sm:flex hidden "}
            onClick={() => navigate(Routing.InstructorLogin)}
          />
          {!loggedIn && (
            <p
              className="text-sm border border-black rounded-full py-[5px] px-[13px] cursor-pointer ml-3 sm:block hidden"
              onClick={() => navigate(Routing.StudentLogin)}
            >
              Login
            </p>
          )}
          {loggedIn && (
            <Menu as="div" className="relative">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  {/* <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="h-9 w-9 rounded-full border p-1"
                  /> */}
                  <p className="h-9 w-9 rounded-full border p-1 flex items-center justify-center">
                    <span className="bg-black h-6 w-6 rounded-full flex items-center justify-center text-white font-bold">
                      {userName}
                    </span>
                  </p>
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-[235px] origin-top-right rounded-md bg-primary py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                {Role === "Student" &&
                  Studentnavigation?.map((item, i) => (
                    <MenuItem>
                      <Link
                        key={i}
                        to={item.href}
                        className={`block px-4 py-2 text-lg text-black ${
                          currentLocation === item.href
                            ? "font-semibold underline"
                            : ""
                        }`}
                      >
                        {item.name}
                      </Link>
                    </MenuItem>
                  ))}
                {Role === "Instructor" &&
                  Instructornavigation?.map((item, i) => (
                    <MenuItem>
                      <Link
                        key={i}
                        to={item.href}
                        className={`block px-4 py-2 text-lg text-black ${
                          currentLocation === item.href
                            ? "font-semibold underline"
                            : ""
                        }`}
                      >
                        {item.name}
                      </Link>
                    </MenuItem>
                  ))}
                <MenuItem onClick={() => SetisOpen(true)}>
                  <p
                    className={`block px-4 py-2 text-lg text-black cursor-pointer`}
                  >
                    Log Out
                  </p>
                </MenuItem>
              </MenuItems>
            </Menu>
          )}
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 right-0 z-[999999] w-full overflow-y-auto bg-white px-6 py-6 sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <h2 className="font-extrabold text-lg leading-[21.6px] tracking-[-1px]">
                  martial arts hub.
                </h2>
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                {/* <XMarkIcon aria-hidden="true" className="h-6 w-6" /> */}
                <IoMdClose />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item, i) => (
                    <Link
                      key={i}
                      to={item.href}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-sm leading-6 hover:text-black ${
                        currentLocation === item.href
                          ? "font-semibold text-black relative after:absolute after:bg-black after:h-[2px] after:w-[20px] after:bottom-2 after:left-[13px]"
                          : "text-black/50 font-normal"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  {!loggedIn && (
                    <p
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 cursor-pointer"
                      onClick={() => {navigate(Routing.StudentLogin);setMobileMenuOpen(false)}}
                    >
                      Login
                    </p>
                  )}
                </div>
                <OutlineBtn
                  text={"Be Come a Instructor"}
                  className={
                    "bg-black text-white sm:hidden block"
                  }
                  onClick={() => {
                    navigate(Routing.InstructorLogin);
                    setMobileMenuOpen(false);
                  }}
                />
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
      <Popup
        Icons={<Allert_Popup_Icon />}
        Headding={"Are you sure?"}
        BodyText={
          "Are you sure you want to log out from your martial arts hub account?"
        }
        isOpen={isOpen}
        SetisOpen={SetisOpen}
        onClick={heandleLogOut}
        BtnText={"Log Out"}
        BtnText2={"Go Back"}
        BtnText2Click={() => SetisOpen(false)}
      />
    </>
  );
};

export default Header;
