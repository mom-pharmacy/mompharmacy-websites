import React, { useEffect, useState } from 'react';
import CancelIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';

const Profilecard = ({ setActiveProfile, activeProfile }) => {
    const [employeeprofile, setEmployeeProfile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function employeeDetails() {
            try {
                setLoading(true);
                const res = await fetch(`http://localhost:3000/employee/employee/${activeProfile}`);
                setLoading(false);
                if (!res.ok) {
                    setError(true);
                    return;
                }
                const data = await res.json();
                console.log('Employee details loaded successfully:', data.employee);
                setEmployeeProfile(data.employee);
            } catch (error) {
                console.error("Error loading employee data:", error);
                setError(true);
                setLoading(false);
            }
        }

        if (activeProfile) {
            employeeDetails();
        }
    }, [activeProfile]);

    const handleClose = () => {
        setActiveProfile(null);
    };

    return (
        <>
            {employeeprofile && (
                <div className="fixed top-0 left-0 bg-black/75 w-full h-full z-40 flex justify-center items-center">
                    <div className="bg-white p-10 h-110 rounded-3xl z-50 m-auto w-1/2 relative"> 
                        <div className='ml-165 t-45'>
                            <IconButton
                                onClick={handleClose}
                                className="absolute text-black-600 hover:text-black">
                                <CancelIcon />
                            </IconButton>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className='justify-center items-center'>
                                <img
                                    src={employeeprofile.employeeUrl}
                                    className="lg:w-[160px] h-30 w-40 rounded-full" />
                            </div>
                            <div>
                                <div className="font-bold text-2xl text-black text-center p-3">{employeeprofile.employeeName}</div>
                                <div className="text-center font-medium text-lg text-black-600 p-2">{employeeprofile.employeedesignation}</div>
                                <div className="text-base text-black-500 p-2 text-center">{employeeprofile.Aboutemployee}</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Profilecard;
