import React, { useEffect, useState } from "react";
import Tabs from "../";
import { Get_Instructor_Created_slot } from "../../../services/Instructor/InstructorMy_slot/InstructorMy_slot";
import Spinner from "../../../layouts/Spinner";
import { WorkOut } from "../../../../assets/icon";

const InstructorMy_slot = () => {
  const instructorId = JSON.parse(localStorage.getItem("_id"));
  const [loading, setLoading] = useState(false);
  const [Instructor_Slot, setInstructor_Slot] = useState([]);

  const Get_Instructor_slot = async () => {
    setLoading(true);
    const result = await Get_Instructor_Created_slot(instructorId);
    if (result?.success === true) {
      setInstructor_Slot(result?.data);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    Get_Instructor_slot();
  }, []);

  return (
    <>
      {loading && <Spinner />}
      <Tabs>
        <div className="px-4 sm:px-6 lg:px-8 bg-gay-600 min-h-screen pt-[34px]">
          <div className="w-full overflow-x-auto">
            <table className="min-w-[990px] w-full">
              {Instructor_Slot.length <= 0 && (
                <tr>
                  <td colspan={5}>
                    <div className="flex items-center justify-center flex-col h-[calc(100vh-409px)] w-full">
                      <WorkOut height={"110"} width={"110"} />
                      <h2 className="text-[26px] font-medium text-center mt-7">
                        Your Class list is empty!
                      </h2>
                      <p className="text-lg">
                        You haven't created any classes yet! when you create any
                        class it’s details will be shown here.
                      </p>
                    </div>
                  </td>
                </tr>
              )}
              {Instructor_Slot.length > 0 && (
                <>
                  <thead className="bg-gay-800">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-gay-900 text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        No.
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-gay-900 text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Class Date
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-gay-900 text-sm font-semibold text-gray-900"
                      >
                        Class Type
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-gay-900 text-sm font-semibold text-gray-900"
                      >
                        Class Rate
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-gay-900 text-sm font-semibold text-gray-900"
                      >
                        Created Time Slot
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#C6C6C6] bg-primary">
                    {Instructor_Slot?.map((item, index) => (
                      <tr key={index}>
                        <td className="px-4 sm:pl-6 py-3.5 text-left text-gay-900 text-sm font-semibold text-gray-900">
                          {Number(index) + 1}
                        </td>
                        <td className="px-4 sm:pl-6 py-3.5 text-left text-gay-900 text-sm font-semibold text-gray-900">
                          {item?.classdate}
                        </td>
                        <td className="px-3 py-3.5 text-left text-gay-900 text-sm font-semibold text-gray-900">
                          {item?.classType}
                        </td>
                        <td className="px-3 py-3.5 text-left text-gay-900 text-sm font-semibold text-gray-900">
                          {item?.classRate}
                        </td>
                        <td className="px-3 py-3.5 text-left text-sm font-semibold text-gay-900 max-w-[250px]">
                          <div className="lg:hidden flex flex-wrap gap-2">
                            {item?.timeSlot?.map((slot, i) => {
                              const parts = slot.split("To");
                              return (
                                <span key={i} className="bg-primary_dark px-2 py-1.5 text-nowrap block">
                                  {parts[0].trim()} To <br /> {parts[1].trim()}
                                </span>
                              );
                            })}
                          </div>
                          <div className="hidden lg:flex flex-wrap gap-2">
                            {item?.timeSlot?.map((timeslot, i) => {
                              return (
                                <span key={i} className="bg-primary_dark px-2 py-1.5 text-nowrap block">
                                  {timeslot}
                                </span>
                              );
                            })}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </>
              )}
            </table>
          </div>
        </div>
      </Tabs>
    </>
  );
};

export default InstructorMy_slot;
