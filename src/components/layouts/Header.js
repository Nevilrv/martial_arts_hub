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
import OutlineBtn from "../pages/common/OutlineBtn"

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
  const [loginModel, SetLoginModel] = useState(false);
  const [isOpen, SetisOpen] = useState(false);
  const [selectedMailingLists, setSelectedMailingLists] = useState("");

  const heandleLogOut = () => {
    localStorage.clear();
    SetisOpen(false)
    setSelectedMailingLists("")
    navigate(Routing.Initial);
  };

  const handleChange = (event) => {
    setSelectedMailingLists(event);
    SetLoginModel(false);
  };

  useEffect(
    () => {
      if (selectedMailingLists.title === "Login as Student") {
        navigate(Routing.StudentLogin);
        setSelectedMailingLists("")
      } else if (selectedMailingLists.title === "Login as Instructor") {
        navigate(Routing.InstructorLogin);
        setSelectedMailingLists("")
      }
    },
    // eslint-disable-next-line
    [selectedMailingLists]
  );

  const userName = JSON.parse(localStorage.getItem("email"))?.charAt(0);

  const Role = JSON.parse(localStorage.getItem("Role"));

  return (
    <>
      <header className="bg-transparent">
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
            {!loggedIn && (
              <p
                className="text-sm border border-black rounded-full py-[5px] px-[13px] cursor-pointer"
                onClick={() => SetLoginModel(true)}
              >
                Login
              </p>
            )}
          </div>
          {loggedIn && (
            <Menu as="div" className="relative ml-12">
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
                <MenuItem onClick={()=>SetisOpen(true)}>
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
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:ring-1 sm:ring-gray-900/10">
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
                      onClick={() => SetLoginModel(true)}
                    >
                      Login
                    </p>
                  )}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <Dialog
        className="relative z-10"
        open={loginModel}
        onClose={SetLoginModel}
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <RadioGroup
                value={selectedMailingLists}
                onChange={handleChange}
                className="my-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3"
              >
                {mailingLists.map((mailingList) => (
                  <Radio
                    key={mailingList.id}
                    value={mailingList}
                    aria-label={mailingList.title}
                    // ariaDescription={`${mailingList.description} to ${mailingList.users}`}
                    className="group relative flex cursor-pointer rounded-lg border border-gray-300 bg-white p-4 shadow-sm focus:outline-none data-[focus]:border-indigo-600 data-[focus]:ring-2 data-[focus]:ring-indigo-600"
                  >
                    <span className="flex flex-1">
                      <span className="flex flex-col">
                        <span className="block text-sm font-medium text-gray-900">
                          {mailingList.title}
                        </span>
                      </span>
                    </span>
                    <BiCheckCircle
                      aria-hidden="true"
                      className="h-5 w-5 text-indigo-600 [.group:not([data-checked])_&]:invisible"
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-indigo-600"
                    />
                  </Radio>
                ))}
              </RadioGroup>
            </DialogPanel>
          </div>
        </div>
      </Dialog>

      <Dialog className="relative z-10" open={isOpen} onClose={SetisOpen}>
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/60 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-primary px-6 pb-6 pt-[80px] text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full md:max-w-[575px]  data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div>
                <div className="flex items-center justify-center">
                  <Allert_Popup_Icon />
                </div>
                <h1 className="text-center mt-3 font-semibold text-3xl">
                  Are you sure?
                </h1>
                <p className="max-w-[334px] mx-auto text-center text-black/50 mt-1">
                  Are you sure you want to log out from your martial arts hub
                  account?
                </p>
                <div className="flex items-center gap-3 mt-14">
                  <OutlineBtn text={"Log Out"} className={"border-black/30 w-[260px] font-medium text-xl"} onClick={heandleLogOut} />
                  <OutlineBtn text={"Go Back"} className={"bg-black text-white w-[260px] font-medium text-xl"} onClick={()=>SetisOpen(false)} />
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default Header;
