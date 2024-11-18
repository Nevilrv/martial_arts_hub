import React, { useState } from "react";
import Tabs from "..";
import Select from "react-select";

const BankAccountDetails = () => {
  const countries = [
    { value: "AU", label: "Australia", currency: "AUD" },
    { value: "AT", label: "Austria", currency: "EUR" },
    { value: "BE", label: "Belgium", currency: "EUR" },
    { value: "BR", label: "Brazil", currency: "BRL" },
    { value: "BG", label: "Bulgaria", currency: "BGN" },
    { value: "CA", label: "Canada", currency: "CAD" },
    { value: "HR", label: "Croatia", currency: "EUR" },
    { value: "CY", label: "Cyprus", currency: "EUR" },
    { value: "CZ", label: "Czech Republic", currency: "CZK" },
    { value: "DK", label: "Denmark", currency: "DKK" },
    { value: "EE", label: "Estonia", currency: "EUR" },
    { value: "FI", label: "Finland", currency: "EUR" },
    { value: "FR", label: "France", currency: "EUR" },
    { value: "DE", label: "Germany", currency: "EUR" },
    { value: "GH", label: "Ghana", currency: "GHS" },
    { value: "GI", label: "Gibraltar", currency: "GIP" },
    { value: "GR", label: "Greece", currency: "EUR" },
    { value: "HK", label: "Hong Kong", currency: "HKD" },
    { value: "HU", label: "Hungary", currency: "HUF" },
    { value: "IN", label: "India", currency: "INR" },
    { value: "ID", label: "Indonesia", currency: "IDR" },
    { value: "IE", label: "Ireland", currency: "EUR" },
    { value: "IT", label: "Italy", currency: "EUR" },
    { value: "JP", label: "Japan", currency: "JPY" },
    { value: "KE", label: "Kenya", currency: "KES" },
    { value: "LV", label: "Latvia", currency: "EUR" },
    { value: "LI", label: "Liechtenstein", currency: "CHF" },
    { value: "LT", label: "Lithuania", currency: "EUR" },
    { value: "LU", label: "Luxembourg", currency: "EUR" },
    { value: "MY", label: "Malaysia", currency: "MYR" },
    { value: "MT", label: "Malta", currency: "EUR" },
    { value: "MX", label: "Mexico", currency: "MXN" },
    { value: "NL", label: "Netherlands", currency: "EUR" },
    { value: "NZ", label: "New Zealand", currency: "NZD" },
    { value: "NG", label: "Nigeria", currency: "NGN" },
    { value: "NO", label: "Norway", currency: "NOK" },
    { value: "PL", label: "Poland", currency: "PLN" },
    { value: "PT", label: "Portugal", currency: "EUR" },
    { value: "RO", label: "Romania", currency: "RON" },
    { value: "SG", label: "Singapore", currency: "SGD" },
    { value: "SK", label: "Slovakia", currency: "EUR" },
    { value: "SI", label: "Slovenia", currency: "EUR" },
    { value: "ZA", label: "South Africa", currency: "ZAR" },
    { value: "ES", label: "Spain", currency: "EUR" },
    { value: "SE", label: "Sweden", currency: "SEK" },
    { value: "CH", label: "Switzerland", currency: "CHF" },
    { value: "TH", label: "Thailand", currency: "THB" },
    { value: "AE", label: "United Arab Emirates", currency: "AED" },
    { value: "GB", label: "United Kingdom", currency: "GBP" },
    { value: "US", label: "United States", currency: "USD" },
  ];
  const [selectedTimeSlot, setselectedTimeSlot] = useState(null);
  console.log("🚀 ~ BankAccountDetails ~ selectedTimeSlot:", selectedTimeSlot);

  const handlecountriesChange = (selectedOption) => {
    setselectedTimeSlot(selectedOption);
  };


//   const 

  return (
    <>
      <Tabs />
      <div className="h-screen flex items-center justify-center">
        <div className="w-1/2 mx-auto">
          <label className="text-base font-medium text-black block">
            select country
          </label>
          <div className="TimeSlot">
            <Select
              defaultValue={selectedTimeSlot}
              onChange={handlecountriesChange}
              options={countries}
              onMenuOpen={() => {}}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BankAccountDetails;
