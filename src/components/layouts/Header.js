import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { Routing } from "../shared/Routing";
import { IoMdClose } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import { Allert_Popup_Icon } from "../../assets/icon";
import OutlineBtn from "../pages/common/OutlineBtn";
import Popup from "../pages/common/Popup";
import { Link, Events, animateScroll as scroll, scrollSpy } from "react-scroll";
import Socket from "../pages/common/Socket";

const Header = () => {
  const navigate = useNavigate();
  const navigation = [
    { name: "Home", href: "home" },
    { name: "About Us", href: "about" },
    { name: "Contact Us", href: "Contact_Us" },
  ];
  const Studentnavigation = [
    { name: "Dashboard", href: Routing.StudentDashboard },
    { name: "My Profile", href: Routing.StudentProfile },
    { name: "Messages", href: Routing.StudentMessages },
  ];

  const Instructornavigation = [
    { name: "Dashboard", href: Routing.InstructorDashboard },
    { name: "My Profile", href: Routing.InstructorProfile },
    { name: "Create Slot", href: Routing.InstructorCreateClass },
    { name: "Chat", href: Routing.InstructorChat },
    { name: "Message Requests", href: Routing.InstructorMessageRequests },
  ];

  const Adminnavigation = [
    { name: "Dashboard", href: Routing.AdminDashboard },
    {
      name: "Instructor Requests",
      href: Routing.Admin_Instructor_Managementnew_Requests,
    },
    { name: "View Students", href: Routing.Admin_View_Students },
    { name: "Finance Dashboard", href: Routing.Admin_Finance_Dashboard },
    { name: "Dispute Requests", href: Routing.Admin_Dispute_Requests },
    { name: "Generate Reports", href: Routing.Admin_Generate_Reports },
    { name: "Discipline Centre", href: Routing.Admin_Discipline_Centre },
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
  const [scroll_event, Setscroll_event] = useState("home");
  const [selectedMailingLists, setSelectedMailingLists] = useState("");
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });

  const heandleLogOut = () => {
    if (JSON.parse(localStorage.getItem("Role")) === "Instructor") {
      Socket.emit("InstructorActive", {
        instructorId: JSON.parse(localStorage.getItem("_id")),
        status: "logout",
      });
    }
    
    if (JSON.parse(localStorage.getItem("Role")) === "Student") {
      Socket.emit("StudentActive", {
        studentId: JSON.parse(localStorage.getItem("_id")),
        status: "logout",
      });
    }

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
    Events.scrollEvent.register("begin", (to, element) => {
      Setscroll_event(element.getAttribute("name"));
    });
    scrollSpy.update();
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition({ x: window.scrollX, y: position });
      if (position <= 1763) {
        Setscroll_event("home");
      } else if (position <= 4514) {
        Setscroll_event("about");
      } else if (position >= 5532) {
        Setscroll_event("Contact_Us");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClasses = `sticky top-0 left-0 z-[9] ${
    scrollPosition.y >= 50
      ? "bg-primary/60 backdrop-filter backdrop-blur-lg"
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
            <div
              onClick={() => navigate(Routing.Initial)}
              className="font-extrabold text-lg leading-[21.6px] tracking-[-1px] cursor-pointer"
            >
              martial arts hub.
            </div>
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
            {currentLocation === "/"
              ? navigation.map((item, i) => (
                  <Link
                    key={i}
                    activeClass="active"
                    to={item.href}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    className={`text-sm leading-6 hover:text-black cursor-pointer ${
                      scroll_event === item.href
                        ? "font-semibold text-black relative after:absolute after:bg-black after:h-[2px] after:w-[20px] after:bottom-0 after:left-0"
                        : "text-black/70 font-normal"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))
              : navigation.map((item, i) => (
                  <div
                    key={i}
                    activeClass="active"
                    onClick={() => navigate(Routing.Initial)}
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className={`text-sm leading-6 hover:text-black cursor-pointer ${
                      currentLocation === item.href
                        ? "font-semibold text-black relative after:absolute after:bg-black after:h-[2px] after:w-[20px] after:bottom-0 after:left-0"
                        : "text-black/70 font-normal"
                    }`}
                  >
                    {item.name}
                  </div>
                ))}
            <div
              activeClass="active"
              onClick={() => navigate("/instructors/all")}
              className={`text-sm leading-6 hover:text-black cursor-pointer ${
                currentLocation === "/instructors/all"
                  ? "font-semibold text-black relative after:absolute after:bg-black after:h-[2px] after:w-[20px] after:bottom-0 after:left-0"
                  : "text-black/70 font-normal"
              }`}
            >
              Instructors
            </div>
          </div>
          {!loggedIn && (
            <OutlineBtn
              text={"Become an Instructor"}
              className={"bg-black text-white mx-12 h-[42px] sm:flex hidden "}
              onClick={() => navigate(Routing.InstructorLogin)}
            />
          )}
          {!loggedIn && (
            <p
              className="text-sm border border-black rounded-full py-[5px] px-[13px] cursor-pointer ml-3 sm:block hidden"
              onClick={() => navigate(Routing.StudentLogin)}
            >
              Login
            </p>
          )}
          {loggedIn && (
            <Menu as="div" className="relative ml-12">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
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
                      <div
                        key={i}
                        onClick={() => navigate(item.href)}
                        className={`block px-4 py-2 text-lg text-black cursor-pointer ${
                          currentLocation === item.href
                            ? "font-semibold underline"
                            : ""
                        }`}
                      >
                        {item.name}
                      </div>
                    </MenuItem>
                  ))}
                {Role === "Instructor" &&
                  Instructornavigation?.map((item, i) => (
                    <MenuItem>
                      <div
                        key={i}
                        onClick={() => navigate(item.href)}
                        className={`block px-4 py-2 text-lg text-black cursor-pointer ${
                          currentLocation === item.href
                            ? "font-semibold underline"
                            : ""
                        }`}
                      >
                        {item.name}
                      </div>
                    </MenuItem>
                  ))}
                {Role === "" ||
                  Role === undefined ||
                  Role === "Admin" ||
                  (Role === null &&
                    Adminnavigation?.map((item, i) => (
                      <MenuItem>
                        <div
                          key={i}
                          onClick={() => navigate(item.href)}
                          className={`block px-4 py-2 text-lg text-black cursor-pointer ${
                            currentLocation === item.href
                              ? "font-semibold underline"
                              : ""
                          }`}
                        >
                          {item.name}
                        </div>
                      </MenuItem>
                    )))}
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
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-900/80 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          />
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 right-0 z-[999999]  w-full overflow-y-auto bg-white px-6 py-6 sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between ">
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
                <IoMdClose />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {currentLocation === "/"
                    ? navigation.map((item, i) => (
                        <Link
                          key={i}
                          activeClass="active"
                          spy={true}
                          smooth={true}
                          to={item.href}
                          offset={0}
                          duration={500}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`-mx-3 block rounded-lg px-3 py-2 text-sm leading-6 hover:text-black ${
                            scroll_event === item.href
                              ? "font-semibold text-black relative after:absolute after:bg-black after:h-[2px] after:w-[20px] after:bottom-2 after:left-[13px]"
                              : "text-black/50 font-normal after:w-[20px]"
                          }`}
                        >
                          {item.name}
                        </Link>
                      ))
                    : navigation.map((item, i) => (
                        <div
                          key={i}
                          activeClass="active"
                          onClick={() => {
                            setMobileMenuOpen(false);
                            navigate(Routing.Initial);
                          }}
                          spy={true}
                          smooth={true}
                          offset={50}
                          duration={500}
                          className={`-mx-3 block rounded-lg px-3 py-2 text-sm leading-6 hover:text-black ${
                            currentLocation === item.href
                              ? "font-semibold text-black relative after:absolute after:bg-black after:h-[2px] after:w-[20px] after:bottom-2 after:left-[13px]"
                              : "text-black/50 font-normal after:w-[0px]"
                          }`}
                        >
                          {item.name}
                        </div>
                      ))}
                  <div
                    activeClass="active"
                    onClick={() => navigate("/instructors/all")}
                    className={`text-sm leading-6 hover:text-black cursor-pointer ${
                      currentLocation === "/instructors/all"
                        ? "font-semibold text-black relative after:absolute after:bg-black after:h-[2px] after:w-[20px] after:bottom-0 after:left-0"
                        : "text-black/70 font-normal"
                    }`}
                  >
                    Instructors
                  </div>
                </div>

                <div className="py-6">
                  {!loggedIn && (
                    <p
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 cursor-pointer"
                      onClick={() => {
                        navigate(Routing.StudentLogin);
                        setMobileMenuOpen(false);
                      }}
                    >
                      Login
                    </p>
                  )}
                </div>
                {!loggedIn && (
                  <OutlineBtn
                    text={"Become an Instructor"}
                    className={"bg-black text-white sm:hidden block"}
                    onClick={() => {
                      navigate(Routing.InstructorLogin);
                      setMobileMenuOpen(false);
                    }}
                  />
                )}
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
