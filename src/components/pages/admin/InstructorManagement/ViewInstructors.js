import React, { useState } from "react";
import AdminHeadding from "../../common/AdminHeadding";
import Instructor_1 from "../../../../assets/images/Instructor-1.png";
import OutlineBtn from "../../common/OutlineBtn";
import Popup from "../../common/Popup";
import { Allert_Popup_Icon } from "../../../../assets/icon";

const ViewInstructors = () => {
  const [InstructorsList, setInstructorsList] = useState([
    {
      image: Instructor_1,
      name: "Keyn Mojho",
      id: "#23352",
      ClassName: "Brazilian Jiu Jitsu",
      JoinedDate: "12/07/2024",
    },
  ]);
  const [isOpen, SetisOpen] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between flex-wrap">
        <AdminHeadding Headding={"View Instructors"} />
        <div className="flex items-center gap-2 flex-wrap">
          <select
            id="ID"
            name="ID"
            defaultValue="ID"
            className="bg-transparent focus:outline-none px-3 border border-black/25 h-[35px] rounded-full"
          >
            <option>ID</option>
            <option>#23352</option>
            <option>#23352</option>
          </select>
          <select
            id="Date"
            name="Date"
            defaultValue="Date"
            className="bg-transparent focus:outline-none px-3 border border-black/25 h-[35px] rounded-full"
          >
            <option>Date</option>
            <option>06/06/2024</option>
            <option>12/07/2024</option>
            <option>05/07/2024</option>
          </select>
        </div>
      </div>
      <div className="mt-5">
        <div className="overflow-x-auto">
          <div className="py-2 align-middle min-w-[890px]">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gay-800">
                  <tr>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-gay-900 text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Instructor’s Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-gay-900 text-sm font-semibold text-gray-900"
                    >
                      Instructor ID
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-gay-900 text-sm font-semibold text-gray-900"
                    >
                      Instructor ID
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-gay-900 text-sm font-semibold text-gray-900"
                    >
                      Joined Date
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-primary">
                  {InstructorsList.map((person) => (
                    <tr key={person.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        <img
                          src={person.image}
                          alt=""
                          className="w-[45px] h-[45px] rounded-full"
                          srcset=""
                        />
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-lg text-Dark_black font-medium sm:pl-6">
                        {person.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-Dark_black font-medium">
                        {person.id}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-Dark_black font-medium">
                        {person.ClassName}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-Dark_black font-medium">
                        {person.JoinedDate}
                      </td>
                      <td className="whitespace-nowrap px-3 pr-6 py-4 text-Dark_black font-medium w-[200px]">
                        <div className="flex items-center gap-2 justify-end">
                          <OutlineBtn
                            text={"Remove"}
                            className={"text-black h-[45px]"}
                          />
                          <OutlineBtn
                            text={"Block"}
                            className={
                              "text-red-200 bg-red-100 border-red-200 h-[45px]"
                            }
                            onClick={()=>SetisOpen(true)}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Popup isOpen={isOpen} SetisOpen={SetisOpen} Icons={<Allert_Popup_Icon />} Headding={"Are You Sure To Block"} BodyText={"Are you sure you want to block this Instructor? Once blocked, they will be unable to join your platform. You can unblock them later in the Blocked Instructor section."} BtnText={"Yes, Block"} Btnclass={"text-red-200 border-red-200"} BtnText2={"No, Go Back"} BtnText2Click={()=>SetisOpen(false)} onClick={()=>SetisOpen(false)} />
    </>
  );
};

export default ViewInstructors;