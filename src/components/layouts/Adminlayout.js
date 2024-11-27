import React, { Children, useEffect } from "react";
import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
} from "@headlessui/react";
import { FaBars, FaMagnifyingGlass, FaXmark } from "react-icons/fa6";
import { BsBell } from "react-icons/bs";
import { BiChevronDown, BiSolidDashboard } from "react-icons/bi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Routing } from "../shared/Routing";
import {
  DashboardDiscipline,
  DashboardDispute,
  DashboardFinanceManagement,
  DashboardReporting,
  DashboardUser,
  DashboardUserIcon,
} from "../../assets/icon";
import { LuLogOut } from "react-icons/lu";

const SidbarNavigation = [
  {
    Navigate: "Dashboard",
    icon: <BiChevronDown />,
    Starticon: <BiSolidDashboard />,
    Path: Routing.AdminDashboard,
  },
  {
    Navigate: "Instructor Management",
    icon: <BiChevronDown />,
    Starticon: <DashboardUserIcon />,
    sub: [
      {
        Navigate: "New Requests",
        icon: <BiChevronDown />,
        Path: Routing.Admin_Instructor_Managementnew_Requests,
      },
      {
        Navigate: "View Instructors",
        icon: <BiChevronDown />,
        Path: Routing.Admin_View_Instructors,
      },
      {
        Navigate: "Blocked Instructors",
        icon: <BiChevronDown />,
        Path: Routing.Admin_Blocked_Instructors,
      },
    ],
  },
  {
    Navigate: "Student Management",
    icon: <BiChevronDown />,
    Starticon: <DashboardUser />,
    sub: [
      {
        Navigate: "View Students",
        icon: <BiChevronDown />,
        Path: Routing.Admin_View_Students,
      },
      {
        Navigate: "Blocked Students",
        icon: <BiChevronDown />,
        Path: Routing.Admin_Blocked_Students,
      },
    ],
  },
  {
    Navigate: "Finance Management",
    icon: <BiChevronDown />,
    Starticon: <DashboardFinanceManagement />,
    sub: [
      {
        Navigate: "Finance Dashboard",
        icon: <BiChevronDown />,
        Path: Routing.Admin_Finance_Dashboard,
      },
      {
        Navigate: "Monitor Payments",
        icon: <BiChevronDown />,
        Path: Routing.Admin_Monitor_Payments,
      },
      {
        Navigate: "Release Funds",
        icon: <BiChevronDown />,
        Path: Routing.Admin_Release_Funds,
      },
      {
        Navigate: "Handle Refunds",
        icon: <BiChevronDown />,
        Path: Routing.Admin_Refunds,
      },
    ],
  },
  {
    Navigate: "Dispute Center",
    icon: <BiChevronDown />,
    Starticon: <DashboardDispute />,
    sub: [
      {
        Navigate: "Dispute Requests",
        icon: <BiChevronDown />,
        Path: Routing.Admin_Dispute_Requests,
      },
    ],
  },
  {
    Navigate: "Reporting & Feedback",
    icon: <BiChevronDown />,
    Starticon: <DashboardReporting />,
    sub: [
      {
        Navigate: "Generate Reports",
        icon: <BiChevronDown />,
        Path: Routing.Admin_Generate_Reports,
      },
    ],
  },
  {
    Navigate: "Discipline Centre",
    icon: <BiChevronDown />,
    Starticon: <DashboardDiscipline />,
    sub: [
      {
        Navigate: "Discipline Dashboard",
        icon: <BiChevronDown />,
        Path: Routing.Admin_Discipline_Centre,
      },
    ],
  },
];

const Adminlayout = ({ children }) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isOpen, SetisOpen] = useState(false);

  const [expandedItem, setExpandedItem] = useState(null);
  const navigate = useNavigate();

  const { pathname } = useLocation();
  const currentLocation = pathname;
  useEffect(() => {
    setExpandedItem(JSON.parse(localStorage.getItem("expandedItem")));
  }, []);

  const handleItemClick = (index, Path) => {
    if (SidbarNavigation[index]?.sub) {
      setExpandedItem((prevExpanded) => {
        if (prevExpanded === index) {
          localStorage.setItem("expandedItem", index);
          return index;
        } else {
          localStorage.setItem("expandedItem", index);
          return index;
        }
      });
    } else if (Path) {
      navigate(Path);
    }
  };
  const heandleLogout = () => {
    localStorage.clear();
    navigate(Routing.Initial);
  };

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
  const userName = JSON.parse(localStorage.getItem("email"))?.charAt(0);

  return (
    <>
      {pathname !== Routing.AdminLogin ? (
        <div>
          <Dialog
            open={sidebarOpen}
            onClose={setSidebarOpen}
            className="relative z-50 lg:hidden"
          >
            <DialogBackdrop
              transition
              className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
            />

            <div className="fixed inset-0 flex">
              <DialogPanel
                transition
                className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
              >
                <TransitionChild>
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                    <button
                      type="button"
                      onClick={() => setSidebarOpen(false)}
                      className="-m-2.5 p-2.5"
                    >
                      <span className="sr-only">Close sidebar</span>
                      <FaXmark
                        aria-hidden="true"
                        className="h-6 w-6 text-black"
                      />
                    </button>
                  </div>
                </TransitionChild>
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-primary  pb-4">
                  <div className="flex h-16 shrink-0 items-center pl-6">
                    <h2 className="font-extrabold text-xl leading-[21.6px] tracking-[-1px]">
                      martial arts hub.
                    </h2>
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col mt-3">
                      <li>
                        <ul role="list" className="">
                          {SidbarNavigation.map((item, index) => (
                            <li
                              key={item.name}
                              onClick={() => handleItemClick(index, item.Path)}
                            >
                              <Link
                                to={item.Path}
                                className={classNames(
                                  item.Path === pathname ||
                                    expandedItem === index
                                    ? "bg-gay-300 text-white"
                                    : "text-indigo-200 hover:bg-indigo-700 hover:text-white hover:bg-gay-300",
                                  "group flex gap-x-3 p-2 text-lg font-semibold leading-6 h-[70px] items-center pl-6 justify-between"
                                )}
                              >
                                <span className="flex items-center gap-3">
                                  <span
                                    className={`text-gay-300 group-hover:text-white ${
                                      item.Path === pathname
                                        ? "text-white"
                                        : expandedItem === index
                                        ? "text-white"
                                        : null
                                    }`}
                                  >
                                    {item.Starticon}
                                  </span>
                                  <span
                                    className={`text-[15px] ${
                                      item.Path === pathname
                                        ? "text-white"
                                        : null
                                    }`}
                                  >
                                    {item.Navigate}
                                  </span>
                                </span>
                                {item?.sub?.length > 0 && item.icon}
                              </Link>

                              {/* Submenu */}
                              {item?.sub?.length > 0 &&
                                expandedItem === index && (
                                  <ul>
                                    {item.sub.map((submenu, subIndex) => (
                                      <li key={subIndex}>
                                        <Link
                                          to={submenu.Path}
                                          className={classNames(
                                            "group flex gap-x-3 p-2 text-base leading-6 h-[50px] items-center pl-10 justify-between",
                                            submenu.Path === pathname
                                              ? "text-black font-bold underline"
                                              : "text-gay-400 font-normal"
                                          )}
                                        >
                                          {submenu.Navigate}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li
                        className="mt-auto cursor-pointer"
                        onClick={heandleLogout}
                      >
                        <p
                          className={
                            "text-indigo-200 hover:bg-indigo-700 hover:text-white hover:bg-gay-300 group flex gap-x-3 p-2 text-lg font-semibold leading-6 h-[70px] items-center pl-6 justify-between"
                          }
                        >
                          <span className="flex items-center gap-3">
                            <span
                              className={`text-gay-300 group-hover:text-white`}
                            >
                              <LuLogOut className="text-lg" />{" "}
                            </span>
                            <span className={`text-[15px]`}>LogOut</span>
                          </span>
                        </p>
                      </li>
                    </ul>
                  </nav>
                </div>
              </DialogPanel>
            </div>
          </Dialog>

          {/* Static sidebar for desktop */}
          <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-[300px] lg:flex-col">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex grow flex-col overflow-y-auto overflow-x-hidden px-0 pb-0">
              <div className="flex shrink-0 items-center bg-primary px-2 h-[90px] justify-center">
                <h2 className="font-extrabold text-xl leading-[21.6px] tracking-[-1px]">
                  martial arts hub.
                </h2>
              </div>
              <nav className="flex flex-1 flex-col mt-2  pl-0 bg-primary">
                <ul role="list" className="flex flex-1 flex-col mt-3">
                  <li>
                    <ul role="list" className="">
                      {SidbarNavigation.map((item, index) => (
                        <li
                          key={item.name}
                          onClick={() => handleItemClick(index, item.Path)}
                        >
                          <Link
                            to={item.Path}
                            className={classNames(
                              item.Path === pathname || expandedItem === index
                                ? "bg-gay-300 text-white"
                                : "text-indigo-200 hover:bg-indigo-700 hover:text-white hover:bg-gay-300",
                              "group flex gap-x-3 p-2 text-lg font-semibold leading-6 h-[70px] items-center pl-6 justify-between"
                            )}
                          >
                            <span className="flex items-center gap-3">
                              <span
                                className={`text-gay-300 group-hover:text-white ${
                                  item.Path === pathname
                                    ? "text-white"
                                    : expandedItem === index
                                    ? "text-white"
                                    : null
                                }`}
                              >
                                {item.Starticon}
                              </span>
                              <span
                                className={`text-[15px] ${
                                  item.Path === pathname ? "text-white" : null
                                }`}
                              >
                                {item.Navigate}
                              </span>
                            </span>
                            {item?.sub?.length > 0 && item.icon}
                          </Link>

                          {/* Submenu */}
                          {item?.sub?.length > 0 && expandedItem === index && (
                            <ul>
                              {item.sub.map((submenu, subIndex) => (
                                <li key={subIndex}>
                                  <Link
                                    to={submenu.Path}
                                    className={classNames(
                                      "group flex gap-x-3 p-2 text-base leading-6 h-[50px] items-center pl-10 justify-between",
                                      submenu.Path === pathname
                                        ? "text-black font-bold underline"
                                        : "text-gay-400 font-normal"
                                    )}
                                  >
                                    {submenu.Navigate}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li
                    className="mt-auto cursor-pointer"
                    onClick={heandleLogout}
                  >
                    <p
                      className={
                        "text-indigo-200 hover:bg-indigo-700 hover:text-white hover:bg-gay-300 group flex gap-x-3 p-2 text-lg font-semibold leading-6 h-[70px] items-center pl-6 justify-between"
                      }
                    >
                      <span className="flex items-center gap-3">
                        <span className={`text-gay-300 group-hover:text-white`}>
                          <LuLogOut className="text-lg" />{" "}
                        </span>
                        <span className={`text-[15px]`}>LogOut</span>
                      </span>
                    </p>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="lg:pl-[310px] bg-gay-600">
            <div className="sticky h-[90px] top-0 z-40 flex shrink-0 items-center gap-x-4 bg-primary px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
              <button
                type="button"
                onClick={() => setSidebarOpen(true)}
                className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
              >
                <span className="sr-only">Open sidebar</span>
                <FaBars aria-hidden="true" className="h-6 w-6" />
              </button>
              {/* Separator */}
              <div
                aria-hidden="true"
                className="h-6 w-px bg-gray-900/10 lg:hidden"
              />

              <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6 justify-center items-center">
                <div className="relative flex flex-1 lg:w-[483px]">
                  <FaMagnifyingGlass
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 left-4 h-full w-4 text-gray-400"
                  />
                  <input
                    id="search-field"
                    name="search"
                    type="search"
                    placeholder="Search anything here"
                    className="block h-[50px] max-w-[573px] w-full border-0 py-0 pl-[45px] pr-4 focus:outline-none  bg-gay-600 rounded-full text-gray-900 placeholder:text-black/50 focus:ring-0 sm:text-sm"
                  />
                </div>
                <div className="flex items-center gap-x-4 lg:gap-x-6 ml-auto">
                  <button
                    type="button"
                    className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">View notifications</span>
                    <BsBell aria-hidden="true" className="h-6 w-6" />
                  </button>
                  <div
                    aria-hidden="true"
                    className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
                  />

                  {/* Profile dropdown */}
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
                      {Adminnavigation?.map((item, i) => (
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
                </div>
              </div>
            </div>
            <div className="px-4 sm:px-6 lg:px-8 bg-gay-600 min-h-screen pt-[34px]">
              {children}
            </div>
          </div>
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default Adminlayout;
