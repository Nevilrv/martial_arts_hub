import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import React, { useState } from 'react'
import { TfiAngleDown } from 'react-icons/tfi';
import { Link, useLocation } from 'react-router-dom';

const Index = ({tabs,children}) => {
      const { pathname } = useLocation();
      const [selectedTimeSlot, setselectedTimeSlot] = useState("");

  return (
    <>
        <div className="pt-6 sm:pb-0 pb-6 flex items-center bg-black px-3 lg:px-8 w-full overflow-x-auto overflow-y-hidden">
        <div className="w-full">
          {/* <div className="sm:hidden"> */}
            {/* <label htmlFor="tabs" className="sr-only">
              Select a tab
            </label>
            <select
              id="tabs"
              name="tabs"
              className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              {tabs.map((tab) => (
                <option key={tab.name}>
                  <Link to={tab.href}>{tab.name}</Link>
                </option>
              ))}
            </select> */}
            {/* <Listbox
                  value={selectedTimeSlot}
                  onChange={setselectedTimeSlot}
                >
                 
                  <div className="relative mt-2">
                    <ListboxButton className="relative w-full cursor-pointer bg-[#DAD8D0] focus:outline-none placeholder:text-black/50 text-lg px-6 h-[80px] rounded-2xl">
                      <span className="block truncate text-left">
                        {selectedTimeSlot.name}
                      </span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <TfiAngleDown
                          aria-hidden="true"
                          className="h-5 w-5 text-gray-400"
                        />
                      </span>
                    </ListboxButton>

                    <ListboxOptions
                      transition
                      className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg"
                    >
                      {tabs.map((person, i) => (
                        // console.log(person)
                        
                        <ListboxOption
                          key={i}
                          value={person}
                          className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900"
                        >
                          <span className="block truncate font-normal group-data-[selected]:font-semibold cursor-pointer">
                            {person.name}
                          </span>
                        </ListboxOption>
                      ))}
                    </ListboxOptions>
                  </div>
                </Listbox> */}
          {/* </div> */}
          <div className="block">
            <nav aria-label="Tabs" className="flex space-x-8">
              {tabs.map((tab) => (
                <Link
                  key={tab.name}
                  to={tab.href}
                  className={`whitespace-nowrap pb-6 text-lg ${tab.href===pathname?"font-bold text-white border-b-4":"text-white/50"}`}
                >
                  {tab.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
      {children}
    </>
  )
}

export default Index
