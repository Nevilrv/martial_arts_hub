import React, { useEffect, useState } from 'react'
import Inputfild from '../../common/Inputfild'
import AdminHeadding from '../../common/AdminHeadding'
import OutlineBtn from '../../common/OutlineBtn'
import Spinner from '../../../layouts/Spinner'
import { toast } from 'react-toastify'
import { Add_Charges, Fetch_Charges } from '../../../services/Admin/FinanceSection/Finance'

const CommissionCharges = () => {
    const [Loading, setLoading] = useState(false);
    const [charges, setCharges] = useState({
        studentPlatfrom: "",
        instructorCommission: ""
    })

    const handleChange = (e) => {
        setCharges({
            ...charges,
            [e.target.name]: e.target.value,
        });
    };

    const handleFetchCharges = async () => {
        setLoading(true);
        const result = await Fetch_Charges();
        if (result?.success === true) {
            setLoading(false);
            setCharges({
                studentPlatfrom: result.data.StudentPlatfromFee,
                instructorCommission: result.data.InstructorCommission 
            })
        } else {
            setLoading(false);
            toast.error(result?.message);
        }
    };



    const handleSaveCharges = async () => {
        setLoading(true);
        const data = {
            studentPlatfrom: charges.studentPlatfrom || 0,
            instructorCommission: charges.instructorCommission || 0,
        };
        const result = await Add_Charges(data);
        if (result?.success === true) {
            setLoading(false);
            toast.success(result?.message);
        } else {
            setLoading(false);
            toast.error(result?.message);
        }
    };

    useEffect(() => {
        handleFetchCharges()
    }, [])


    return (
        <>
            {Loading && <Spinner />}
            <AdminHeadding Headding={"Commission And Charges"} />
            <div className='bg-primary h-full w-full px-4 mt-4'>
                <div className='grid md:grid-cols-2 pt-6 gap-4'>
                    <Inputfild
                        type={"Number"}
                        placeholder={"Student Platfrom fee %"}
                        Label={"Student Platfrom fee %"}
                        name={"studentPlatfrom"}
                        value={charges.studentPlatfrom}
                        onChange={handleChange}
                        className={`rounded-xl md:w-full h-[70px] `}
                    />
                    <Inputfild
                        type={"Number"}
                        placeholder={"Instructor Commission %"}
                        Label={"Instructor Commission %"}
                        name={"instructorCommission"}
                        value={charges.instructorCommission}
                        onChange={handleChange}
                        className={`rounded-xl md:w-full h-[70px] `}
                    />
                </div>
                <div className='flex justify-end py-4'>
                    <OutlineBtn
                        text={"Save Charges"}
                        className={"bg-black text-white w-[200px]"}
                        onClick={handleSaveCharges}
                    />
                </div>
            </div>
        </>
    )
}


export default CommissionCharges