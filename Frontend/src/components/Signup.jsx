import React from 'react'
import { Link } from 'react-router-dom';
import Login from './Login';

function Signup() {
    return (
        <div>
            {/* <dialog id="my_modal_2" className="modal"> */}
            <div className='flex h-screen items-center justify-center shadow-md'>
                <div id="my_modal_2" className="border-[2px] shadow-md p-5 rounded-md ">
 
                    <h3 className="font-bold text-lg">SignUp</h3>

                    {/* name */}

                    <div className='mt-4 space-y-2'>
                        <span>Name</span>
                        <br />
                        <input className="w-80 px-3 py-2 border rounded-md outline-none" type='text' placeholder='Enter your Email' />
                    </div>
                    {/* Email */}

                    <div className='mt-4 space-y-2'>
                        <span>Email</span>
                        <br />
                        <input className="w-80 px-3 py-2 border rounded-md outline-none" type='email' placeholder='Enter your Email' />
                    </div>

                    {/* Password */}
                    <div className='mt-4 space-y-2'>
                        <span>Password</span>
                        <br />
                        <input className="w-80 px-3 py-2 border rounded-md outline-none" type='password' placeholder='Enter your password' />
                    </div>

                    {/* button */}
                    <div className="flex justify-around mt-6">
                        <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                            Login
                        </button>

                        Have account?{" "}
                        <button
                            className="underline text-blue-500 cursor-pointer"
                            onClick={() =>
                                document.getElementById("my_modal_2").showModal()
                              }>
                        
                            Login
                        </button>{" "}
                        <Login />

                    </div>

                </div>



                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
                {/* </dialog> */}
            </div>
        </div>
    )
}

export default Signup