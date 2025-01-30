import React, { useEffect, useState } from "react";
import Tabs from "..";
import Select from "react-select";
import {
  AccountCreate,
  AccountRegister,
  Get_account_ditails,
} from "../../../services/Instructor/banckAccountDetails/accountdetals";
import OutlineBtn from "../../common/OutlineBtn";
import Spinner from "../../../layouts/Spinner";
import Inputfild from "../../common/Inputfild";
import { toast } from "react-toastify";

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
  const [selectedTimeSlot, setselectedTimeSlot] = useState(countries[0]);
  const [Loading, setLoading] = useState(false);
  const [errormess, seterrormess] = useState("");
  const [accountDetails, setDccountDetails] = useState({});

  const handlecountriesChange = (selectedOption) => {
    setselectedTimeSlot(selectedOption);
  };

  const Account_Create = async (accountid) => {
    const result = await AccountCreate(
      accountid,
      JSON.parse(localStorage.getItem("_id"))
    );
    if (result?.success === true) {
      window.open(result.data.url, "_blank", "noopener,noreferrer");
    } else {
      seterrormess(result.message);
    }
  };

  const send_countries = async () => {
    setLoading(true);
    const body = {
      instructorId: JSON.parse(localStorage.getItem("_id")),
      country: selectedTimeSlot.value,
      currency: selectedTimeSlot.currency,
    };
    const result = await AccountRegister(body);
    if (result?.success === true) {
      Account_Create(result.data.accountId);
      setLoading(false);
    } else {
      seterrormess(result.message);
      setLoading(false);
    }
  };

  const GetAccount = async () => {
    setLoading(true);
    const result = await Get_account_ditails(
      JSON.parse(localStorage.getItem("_id"))
    );
    if (result?.success === true) {
      setDccountDetails(result.data);
      setLoading(false);
    } else {
      setLoading(false);
      //   if (result.message === "Account not found") {
      //     toast.error(
      //       "Details of the instructor's bank account are not provided."
      //     );
      //   } else {
      //     toast.error(result.message);
      //   }
      // }
    }
  };

  useEffect(() => {
    GetAccount();
  }, []);

  return (
    <>
      {Loading && <Spinner />}
      <Tabs />
      <div className="md:h-screen mt-8 px-3">
        <div className="flex flex-wrap w-full items-end justify-center gap-3">
          <div className="md:w-1/2 w-full">
            <p className="mb-2">
              Note : During KYC, please do not refresh the page or click the return link
            </p>
            {/* <p className="mb-3">
              Note 2 : On the final review and submit page, click the 'Edit' button to upload the document if the option is shown; 
              otherwise, proceed
            </p> */}
            <div className="w-full">
              <label className="text-base font-medium text-black block mt-7">
                select country
              </label>
              <div className="flex items-center justify-between gap-3">
                <div className="TimeSlot w-full">
                  <Select
                    defaultValue={selectedTimeSlot}
                    onChange={handlecountriesChange}
                    options={countries}
                    onMenuOpen={() => { }}
                  />
                </div>
                <OutlineBtn text={"Proceed"} onClick={send_countries} />
              </div>
            </div>
            <p className="mt-3">{errormess}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-9 mt-16 max-w-6xl mx-auto">
          <Inputfild
            type={"text"}
            Label={"Stripe Account Id"}
            value={accountDetails.id}
            Labelclass={"customradiusBlack mb-1.5 font-medium"}
            readOnly={true}
            className={"rounded-xl md:w-full h-[70px]"}
          />
          <Inputfild
            type={"text"}
            Label={"Country Name"}
            Labelclass={"customradiusBlack mb-1.5 font-medium"}
            readOnly={true}
            value={accountDetails.country}
            className={"rounded-xl md:w-full h-[70px]"}
          />
          <Inputfild
            type={"text"}
            Label={"Currency"}
            Labelclass={"customradiusBlack mb-1.5 font-medium"}
            readOnly={true}
            value={accountDetails.default_currency}
            className={"rounded-xl md:w-full h-[70px]"}
          />
          <Inputfild
            type={"text"}
            Label={"Your Email Id"}
            value={accountDetails.email}
            Labelclass={"customradiusBlack mb-1.5 font-medium"}
            readOnly={true}
            className={"rounded-xl md:w-full h-[70px]"}
          />
          <div className="md:col-span-2 mt-10">
            <h2 className="font-semibold text-3xl">Accout</h2>
          </div>
          <Inputfild
            type={"text"}
            Label={"Bank Account Holder Name"}
            value={
              accountDetails?.external_accounts?.data[0]
                ?.account_holder_name === null
                ? "Name is not Given"
                : accountDetails?.external_accounts?.data[0]
                  ?.account_holder_name
            }
            Labelclass={"customradiusBlack mb-1.5 font-medium"}
            readOnly={true}
            className={"rounded-xl md:w-full h-[70px]"}
          />
          <Inputfild
            type={"text"}
            Label={"Bank Name"}
            Labelclass={"customradiusBlack mb-1.5 font-medium"}
            readOnly={true}
            value={accountDetails?.external_accounts?.data[0]?.bank_name}
            className={"rounded-xl md:w-full h-[70px]"}
          />
          <Inputfild
            type={"text"}
            Label={"Bank Account Last 4 Digits"}
            value={
              accountDetails?.external_accounts?.data[0]?.last4 === undefined
                ? ""
                : `.......${accountDetails?.external_accounts?.data[0]?.last4 ===
                  undefined
                  ? ""
                  : accountDetails?.external_accounts?.data[0]?.last4
                }`
            }
            Labelclass={"customradiusBlack mb-1.5 font-medium"}
            readOnly={true}
            className={"rounded-xl md:w-full h-[70px]"}
          />
          <Inputfild
            type={"text"}
            Label={"Stripe Account Type"}
            value={accountDetails?.type}
            Labelclass={"customradiusBlack mb-1.5 font-medium"}
            readOnly={true}
            className={"rounded-xl md:w-full h-[70px]"}
          />
        </div>
      </div>
    </>
  );
};

export default BankAccountDetails;
