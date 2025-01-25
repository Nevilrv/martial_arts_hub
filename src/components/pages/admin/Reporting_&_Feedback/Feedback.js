import React from 'react'
import AdminHeadding from '../../common/AdminHeadding'

const Feedback = () => {
    return (
        <>
            <div>
                <AdminHeadding Headding={"Platform Feedback"} />
            </div>
            <div className="mt-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-3 gap-x-2.5">
                {/* {Discipline_data.map((discipline) => ( */}
                    <div className="p-5 bg-primary shadow-BoxShadow rounded-xl">
                        <div className="flex items-start gap-2">
                            <img
                                // src={discipline.userProfile || User}
                                className="h-[44px] w-[44px] rounded-full object-cover object-top grayscale"
                                alt=""
                                srcset=""
                            />
                            <div>
                                <h2 className="text-xl text-Dark_black font-semibold">
                                    {/* {discipline.userName} */}
                                </h2>
                                <p className="text-[14px] text-gay-300">
                                    {/* {discipline.userRole} • Added on{" "} */}
                                    {/* {dayjs(discipline.createdAt).format("DD MMM, YYYY")} */}
                                </p>
                            </div>
                        </div>
                        <div className="mt-6">
                            <h2 className="text-xs text-Dark_black font-medium">
                                Discipline Name
                            </h2>
                            <h2 className="text-xs text-gay-300 mt-0.5 font-medium">
                                {/* {discipline.disciplineName} */}
                            </h2>
                        </div>
                        <div className="mt-4">
                            <h2 className="text-xs text-Dark_black font-medium">
                                Discipline Description
                            </h2>
                            <p className="text-[13px] text-gay-300 mt-0.5 font-medium text-justify">
                                {/* {discipline.description} */}
                            </p>
                        </div>
                    </div>
                {/* ))} */}
            </div>
        </>
    )
}


export default Feedback
