import React from 'react'
import { MdCancel } from 'react-icons/md'
import { PiSealCheckFill } from 'react-icons/pi'
import OutlineBtn from '../../common/OutlineBtn'
import { BiPencil } from 'react-icons/bi'
import User from "../../../../assets/images/userProfile.jpg";

const StudentProfileView = ({ Profiledetails, handleUploadDocument, setOpen }) => {
    return (
        <>
            {/* BigScreen */}
            <div className="hidden xl:flex items-center justify-between flex-wrap gap-y-3">
                <div className="flex items-baseline gap-5">
                    <h2 className="text-Dark_black text-[40px] font-bold">
                        {Profiledetails?.profile?.studentName}
                        <span className="text-Dark_black/50 text-2xl font-normal">
                            (Student)
                        </span>
                    </h2>
                    <div className="flex gap-1">
                        {Profiledetails?.profile?.StripeVerfiy
                            ? <PiSealCheckFill className="text-green text-xl" />
                            : <MdCancel className="text-red-200 text-xl" />
                        }

                        {Profiledetails?.profile?.StripeVerfiy
                            ? <span className="text-Dark_black">Stripe Identity Verified</span>
                            : <span className="text-red-200 underline cursor-pointer" onClick={handleUploadDocument}>Stripe Identity Verified</span>
                        }
                    </div>
                </div>
                <div className="flex items-center gap-2 sm:w-auto w-full">
                    <OutlineBtn
                        text={"Edit"}
                        onClick={() => setOpen(true)}
                        className={
                            "text-black font-semibold border-[#71717194] sm:w-auto w-full h-[40px]"
                        }
                        icon={<BiPencil className="text-gay-300 text-2xl" />}
                    />
                </div>
            </div>

            {/* Mobile */}

            <div className='block lg:hidden'>
                <div className="pt-10" id='studentMyprofileMobile'>
                    <div className="flex items-center justify-center">
                        <img
                            src={Profiledetails?.profile?.profile_picture || User}
                            alt=""
                            className="w-[200px] h-[200px] rounded-full object-cover grayscale object-top"
                        />
                    </div>
                    <div>
                        <span className="text-Dark_black flex items-center justify-center text-2xl font-bold py-2" id='StdName'>
                            {Profiledetails?.profile?.studentName}
                            <span className="text-xl" id='stdrole'>(Student)</span>
                        </span>
                        <div className="flex items-center justify-center gap-1">
                            {Profiledetails?.profile?.StripeVerfiy
                                ? <PiSealCheckFill className="text-green" />
                                : <MdCancel className="text-red-200" />
                            }

                            {Profiledetails?.profile?.StripeVerfiy
                                ? <span className="text-Dark_black">Stripe Identity Verified</span>
                                : <span className="text-red-200 underline cursor-pointer" onClick={() => handleUploadDocument(Profiledetails?.profile?.studentId)}>Stripe Identity Verified</span>
                            }
                        </div>
                    </div>
                </div>
                <div className="pt-4">
                    <OutlineBtn
                        text={"Edit"}
                        onClick={() => setOpen(true)}
                        className={
                            "text-black font-semibold border-[#71717194] w-full h-[40px]"
                        }
                        icon={<BiPencil className="text-gay-300 text-2xl" />}
                    />
                </div>
            </div>
            <div className="lg:w-[120px] w-full h-[40px] sm:h-[40px] bg-gay-250 rounded-full mt-2 overflow-hidden">
                <div
                    style={{
                        width: `${Profiledetails?.profile?.profile_completion}%`,
                    }}
                    className={`h-full bg-green rounded-full flex items-center justify-center text-white`}
                >
                    {Profiledetails?.profile?.profile_completion}%
                </div>
            </div>

        </>
    )
}

export default StudentProfileView
