import React, { useEffect, useState } from 'react'
import AdminHeadding from '../../common/AdminHeadding'
import Spinner from '../../../layouts/Spinner';
import { FeedbackReports } from '../../../services/Admin/Reporting_&_Feedback/Reporting_&_Feedback';
import { toast } from 'react-toastify';
import dayjs from 'dayjs';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const Feedback = () => {

    const [Loading, setLoading] = useState(false);
    const [Feedback_data, setFeedback_data] = useState([]);
    const [Feedback, setFeedback] = useState({
        userType: "",
        duration: "",
    });
    const heandleChange = (e) => {
        setFeedback({ ...Feedback, [e.target.name]: e.target.value });
    };

    const Get_FeedBack = async () => {
        setLoading(true);
        const result = await FeedbackReports(
            Feedback.userType,
            Feedback.duration
        );
        console.log(result.data, "============>")
        if (result?.success === true) {
            setLoading(false);
            setFeedback_data(result.data);
        } else {
            setLoading(false);
            toast.error(result?.message);
        }
    };

    const getStars = (rating) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

        return (
            <div className="flex items-center gap-0.5">
                {[...Array(fullStars)].map((_, i) => (
                    <FaStar key={`full-${i}`} className="text-yellow-100 text-lg" />
                ))}
                {hasHalfStar && (
                    <FaStarHalfAlt className="text-yellow-100 text-lg" key="half" />
                )}
                {[...Array(emptyStars)].map((_, i) => (
                    <FaStar key={`empty-${i}`} className="text-gay-500 text-lg" />
                ))}
            </div>
        );
    };


    useEffect(() => {
        Get_FeedBack();
    }, [Feedback]);

    return (
        <>
            {Loading && <Spinner />}
            <div className="flex items-center justify-between">
                <AdminHeadding Headding={"Platform Reviews"} />
                <div className="flex items-center gap-2 flex-wrap">
                    <select
                        id="userType"
                        name="userType"
                        onChange={heandleChange}
                        className="bg-transparent focus:outline-none px-3 border border-black/25 h-[35px] rounded-full"
                    >
                        <option value="">All</option>
                        <option value="Student">Student</option>
                        <option value="Instructor">Instructor</option>
                    </select>
                    <select
                        id="duration"
                        name="duration"
                        onChange={heandleChange}
                        className="bg-transparent focus:outline-none px-3 border border-black/25 h-[35px] rounded-full"
                    >
                        <option value="">All</option>
                        <option value="month">This month</option>
                        <option value="week">This week</option>
                    </select>
                </div>
            </div>
            <div className="mt-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-3 gap-x-2.5">
                {Feedback_data.map((item) => (
                    <div className="p-5 bg-primary shadow-BoxShadow rounded-xl">
                        <div className="flex items-start gap-2">
                            <img
                                src={item.student === null ? item.instructor.profile_picture : item.student.profile_picture}
                                className="h-[44px] w-[44px] rounded-full object-cover object-top grayscale"
                                alt=""
                                srcset=""
                            />
                            <div>
                                <h2 className="text-xl text-Dark_black font-semibold">
                                    {item.student === null ? item.instructor.name : item.student.name}
                                </h2>
                                <p className="text-[14px] text-gay-300">
                                    {item.userType} • Added on{" "}
                                    {dayjs(item.createdAt).format("DD MMM, YYYY")}
                                </p>
                            </div>
                        </div>
                        <div className="mt-6">
                            <h2 className="text-xs text-Dark_black font-medium">
                                Feed Back
                            </h2>
                            <h2 className="text-xs text-gay-300 mt-0.5 font-medium">
                                {item.feedback}
                            </h2>
                        </div>
                        <div className="mt-4">
                            <p className="text-[13px] text-gay-300 mt-0.5 font-medium text-justify">
                                {getStars(item.rating)}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}


export default Feedback
