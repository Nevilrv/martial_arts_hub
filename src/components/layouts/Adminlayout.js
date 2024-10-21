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
        Navigate: "Profile Verification",
        icon: <BiChevronDown />,
        Path: "/admin/employees/all",
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
        // Path: "/admin/employees/add",
      },
      {
        Navigate: "Release Funds",
        icon: <BiChevronDown />,
        // Path: "/admin/employees/all",
      },
      {
        Navigate: "Handle Refunds",
        icon: <BiChevronDown />,
        // Path: "/admin/employees/all",
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
        // Path: "/admin/employees/add",
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
        // Path: "/admin/employees/add",
      },
      {
        Navigate: "Provide Feedback",
        icon: <BiChevronDown />,
        // Path: "/admin/employees/add",
      },
    ],
  },
  {
    Navigate: "Discipline Centre",
    icon: <BiChevronDown />,
    Starticon: <DashboardDiscipline />,
    path: "/",
  },
];

const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];

const Adminlayout = ({ children }) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState(null);
  const navigate = useNavigate();

  const { pathname } = useLocation();
  useEffect(() => {
    setExpandedItem(JSON.parse(localStorage.getItem("expandedItem")));
  }, []);

  const handleItemClick = (index, Path) => {
    if (SidbarNavigation[index]?.sub) {
      setExpandedItem((prevExpanded) => {
        if (prevExpanded === index) {
          localStorage.setItem("expandedItem", index);
          return null;
        } else {
          localStorage.setItem("expandedItem", index);
          return index;
        }
      });
    } else if (Path) {
      navigate(Path);
    }
  };

  return (
    <>
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
                      className="h-6 w-6 text-white"
                    />
                  </button>
                </div>
              </TransitionChild>
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4">
                <div className="flex h-16 shrink-0 items-center">
                  <img
                    alt="Your Company"
                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=white"
                    className="h-8 w-auto"
                  />
                </div>
                <nav className="flex flex-1 flex-col">
                  <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" className="-mx-2 space-y-1">
                        {SidbarNavigation.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? "bg-indigo-700 text-white"
                                  : "text-indigo-200 hover:bg-indigo-700 hover:text-white",
                                "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                              )}
                            >
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li className="mt-auto">
                      <a
                        href="#"
                        className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
                      >
                        Settings
                      </a>
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
            <nav className="flex flex-1 flex-col mt-2  pl-2 bg-primary">
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
                <Menu as="div" className="relative">
                  <MenuButton className="-m-1.5 flex items-center p-1.5">
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="h-8 w-8 rounded-full bg-gray-50"
                    />
                    <span className="hidden lg:flex lg:items-center">
                      <span
                        aria-hidden="true"
                        className="ml-4 text-sm font-semibold leading-6 text-gray-900"
                      >
                        Tom Cook
                      </span>
                      <BiChevronDown
                        aria-hidden="true"
                        className="ml-2 h-5 w-5 text-gray-400"
                      />
                    </span>
                  </MenuButton>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    {userNavigation.map((item) => (
                      <MenuItem key={item.name}>
                        <a
                          href={item.href}
                          className="block px-3 py-1 text-sm leading-6 text-gray-900 data-[focus]:bg-gray-50"
                        >
                          {item.name}
                        </a>
                      </MenuItem>
                    ))}
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
    </>
  );
};

export default Adminlayout;
