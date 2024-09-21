import React from 'react'
import { useLocation } from 'react-router-dom';

const Index = ({tabs}) => {
      const { pathname } = useLocation();

  return (
    <>
        <div className="pt-6 sm:pb-0 pb-6 flex items-center bg-black px-3 lg:px-8 w-full overflow-x-auto">
        <div className="w-full">
          <div className="sm:hidden">
            <label htmlFor="tabs" className="sr-only">
              Select a tab
            </label>
            <select
              id="tabs"
              name="tabs"
              className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              {tabs.map((tab) => (
                <option key={tab.name}>{tab.name}</option>
              ))}
            </select>
          </div>
          <div className="hidden sm:block">
            <nav aria-label="Tabs" className="-mb-px flex space-x-8">
              {tabs.map((tab) => (
                <a
                  key={tab.name}
                  href={tab.href}
                  className={`whitespace-nowrap pb-6 text-lg ${tab.href===pathname?"font-bold text-white border-b-4":"text-white/50"} `}
                >
                  {tab.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
