import React from 'react'
import book from "../../public/book.png"
function Banner() {
    return (
        <>
            <div className='max-w-screen-2x1 container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
                <div className='w-full order-2 md:order-1 md:1/2 mt-12 md:mt-32'>
                    <div className='space-y-12'>
                        <h1 className='text-4x1 font-bold'>
                            That's the thing about books.<br />
                            They let you travel without moving your feet.”<br />
                            <span className='text-pink-600'>– Jhumpa Lahiri</span></h1>
                        <p className='text-xl'>
                            Welcome to My Book Collection Website
                            Discover, organize, and share your love for books with our MERN stack-powered book collection website.
                            Built using the robust and efficient MERN (MongoDB, Express.js, React, Node.js) stack, this platform is designed
                            to provide an intuitive and seamless experience for book enthusiasts.
                        </p>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                            <input type="text" className="grow" placeholder="Email" />
                        </label>
                        
                    </div>
                    <button className="btn mt-6 btn-secondary">Secondary</button>
                </div>
                <div className='w-full md:1/2 order-1'>
                    <img src="book.png" alt="book" className="h-92 w-92"></img>
                </div>
            </div>
        </>
    )
}

export default Banner