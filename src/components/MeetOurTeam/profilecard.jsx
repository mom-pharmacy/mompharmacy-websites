import React, { useEffect, useState } from 'react';


const Profilecard = ({ setActiveProfile  , activeProfile}) => {
    const [employeeprofile, setemployeeprofile] = useState(null)
    const [loading , setLoading] = useState(false)
    const [Error , setError] = useState(false)

    useEffect(() => {
        async function employeeDetails() {

            try {
                setLoading(true)
                const res = await fetch(`http://localhost:3000/employee/employee/${activeProfile}`);
                setLoading(false)
                if(!res.ok){
                    setError(true)
                    return 
                }

                const data = await res.json()
                console.log('employee details added successfull,', data.employee);
                setemployeeprofile(data.employee)
                
            } catch (error) {
                console.log("error data not added", error);
            }

        }
        employeeDetails()
    }, [])


    return (
        <>
            <div className="fixed top-0 left-0 bg-black/75 w-full h-full z-40 flex justify-center item-center">
               {employeeprofile && <div className='bg-white p-10 h-120 rounded-3xl z-50 m-auto w-1/2'>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='justify-center items-center'>
                            <img
                                src={employeeprofile.employeeUrl}
                                className="lg:w-[100px] h-30 rounded-full" />
                        </div>
                        <div>
                        <div className='font-bold text-2xl text-black-800 text-center'>{employeeprofile.employeeName}</div>
                        <div className='text-center font-medium text-1xl text-black-600 p-2'>{employeeprofile.employeedesignation}</div>
                        <div className='text-1xl text-black-400 p-2'>{employeeprofile.Aboutemployee}</div>
                        </div>
                    </div>
                </div>} 
            </div>



        </>
    )
}
export default Profilecard