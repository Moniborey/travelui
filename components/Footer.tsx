import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <div className='lg:container mt-24 lg:px-0 px-4'>
      <div className='grid lg:grid-cols-5 lg:items-baseline items-center grid-cols-2 gap-5 py-5'>
         <div className='flex flex-col gap-4 text-gray-400'>
            <Image 
            src={'hilink-logo.svg'}
            alt="logo"
            width={10000}
            height={1000}
            className="lg:w-[7rem] -mt-2 w-full lg:p-0 p-2 bg-cover"
            />
         </div>
         <div className='flex flex-col text-sm gap-4 text-gray-400'>
            <h1 className='font-bold text-lg text-black'>Learn More</h1>
            <h4>About Hilink</h4>
            <h4>Press Releases</h4>
            <h4>Environment</h4>
            <h4>Jobs</h4>
            <h4>Privacy Policy</h4>
            <h4>Contact Us</h4>
         </div>
         <div className='flex text-sm flex-col gap-4 text-gray-400'>
            <h1 className='font-bold text-lg text-black'>Our Community</h1>
            <h4>Climbing xixixi</h4>
            <h4>Hiking hilink</h4>
            <h4>Hilink kinthill</h4>
         </div>
         <div className='flex text-sm flex-col gap-4 text-gray-400'>
            <h1 className='font-bold text-lg text-black'>Contact Us</h1>
            <div className='flex gap-2'>
                <h4>Admin Officer:</h4>
                <h5 className='text-black font-semibold'>123-456-7890</h5>
            </div>
            <div className='flex gap-2'>
                <h4>Email Officer:</h4>
                <h5 className='text-black font-semibold'>Hilink@gmail.com</h5>
            </div>
         </div>
         <div className='flex flex-col gap-4 text-gray-400'>
            <h1 className='font-bold text-black text-lg'>Social</h1>
            <div className='flex gap-3'>
                <Image src={'/facebook.svg'} alt='logo' width={20} height={20}/>
                <Image src={'/instagram.svg'} alt='logo' width={20} height={20}/>
                <Image src={'/twitter.svg'} alt='logo' width={20} height={20}/>
                <Image src={'/youtube.svg'} alt='logo' width={20} height={20}/>
                <Image src={'/wordpress.svg'} alt='logo' width={20} height={20}/>
            </div>
         </div>
      </div>
    </div>
  )
}
