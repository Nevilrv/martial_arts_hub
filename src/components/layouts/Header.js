import React, { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Link, useLocation } from "react-router-dom";
import { Routing } from "../shared/Routing";
import { IoMdClose } from "react-icons/io";
import { FaBars } from "react-icons/fa6";

const Header = () => {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Categories", href: "/categories" },
  ];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();
  const currentLocation = location.pathname;

  return (
    <>
      <header className="bg-transparent">
        <nav
          aria-label="Global"
          className="mx-auto flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
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
              {/* <Bars3Icon aria-hidden="true" className="h-6 w-6" /> */}
              <FaBars />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm leading-6 hover:text-black ${
                  currentLocation === item.href
                    ? "font-semibold text-black relative after:absolute after:bg-black after:h-[2px] after:w-[20px] after:bottom-2 after:left-0"
                    : "text-black/50 font-normal"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to={Routing.Login}
              className="text-sm border border-black rounded-full py-[5px] px-[13px]"
            >
              Login
            </Link>
          </div>
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
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
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
                  <a
                    href="/"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </>
  );
};

export default Header;
