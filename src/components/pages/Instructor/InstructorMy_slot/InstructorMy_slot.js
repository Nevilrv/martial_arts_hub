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
                        classdate
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-gay-900 text-sm font-semibold text-gray-900"
                      >
                        classType
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-gay-900 text-sm font-semibold text-gray-900"
                      >
                        classRate
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-gay-900 text-sm font-semibold text-gray-900"
                      >
                        Created timeSlot
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
                        <td className="px-3 py-3.5 text-left text-gay-900 text-sm font-semibold text-gray-900 max-w-[200px]">
                          <div className="grid md:grid-cols-3 sm:grid-cols-2 items-center gap-2 flex-wrap">
                            {item?.timeSlot?.map((item) => (
                              <span className="bg-primary_dark mx-2 px-2 py-1.5 text-center">
                                {item}
                              </span>
                            ))}
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
