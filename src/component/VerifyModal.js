import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

const VerifyModal = ({ isModalOpen, setIsModalOpen }) => {



    const dispatch = useDispatch();

    // const handleOk = () => {
    //     setIsModalOpen(false);
    // };

    //verify user by otp
    const handleOTP = (e) => {
        e.preventDefault();
        const form = e.target;
        const otp = form.otp.value;

        fetch('https://staging-be-ecom.techserve4u.com/api/user/verifyotp', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: "mdhasan8064@gmail.com", otp: otp })

        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success("Account Verified");
                    const restToken = data.token.split(" ")[1]
                    localStorage.setItem("token", restToken);
                    dispatch({ type: "token", payload: restToken });
                    dispatch({ type: "userVerifyed", payload: true });
                }
            })
        console.log(otp)
    }

    return (
        <>
            <Modal title="Verify Modal" open={isModalOpen} onCancel={() => setIsModalOpen(false)}>
                <p className='text-2xl font-semibold mb-5'>Please Check your email to get otp</p>
                <form onSubmit={handleOTP}>
                    <div className="form-control mb-5">
                        <label className="label pb-0">
                            <span className="label-text text-lg font-semibold">OTP</span>
                        </label>
                        <div>
                            <input type="number" name="otp" placeholder="214586" className="p-3 border-2 font-medium text-lg w-full" required />
                        </div>
                    </div>
                    <button className="text-white w-full p-4 border-none rounded-full bg-gradient-to-bl from-indigo-500 to-teal-800 text-lg font-semibold">Sumbit</button>
                </form>
            </Modal>
        </>
    );
};

export default VerifyModal;