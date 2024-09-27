import React from 'react'
import Tab from "../../common/Tab/Index";
import { Routing } from '../../../shared/Routing';


const MyClass = () => {
    const tabs = [
        { name: "Dashboard", href: Routing.StudentDashboard },
        { name: "My Messages", href: Routing.StudentMessages },
        { name: "My Classes", href: Routing.StudentMyClass },
        { name: "My Invoices", href: Routing.StudentInvoices },
        { name: "Raise Dispute", href: Routing.StudentDispute },
      ];
  return (
    <>
       <Tab tabs={tabs} /> 
    </>
  )
}

export default MyClass
