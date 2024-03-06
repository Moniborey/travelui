import Image from 'next/image'
import React from 'react'

export default function Download() {
    return (
        <section className='lg:container lg:px-0 p-4'>
            <div className='flex flex-col md:flex-row justify-center items-center p-8 gap-4 overflow-hidden rounded-2xl lg:h-[25rem] downloadBg'>
                <div className='flex flex-1 w-full flex-col gap-8 text-white'>
                    <h1 className='text-6xl font-bold'>Get For Free Now!</h1>
                    <p>Available on IOS and android, download now!</p>
                    <div className='flex flex-col lg:flex-row gap-2'>
                        <button className='bg-white whitespace-nowrap text-[#30AF5B] py-3 px-8 rounded-full flex w-full lg:w-auto items-center gap-2 justify-center'>
                            <Image src={'/apple.svg'} alt='apple' width={20} height={20} />
                            <h4>Download App</h4>
                        </button>
                        <button className='border w-full lg:w-auto flex items-center gap-2 whitespace-nowrap py-3 px-8 rounded-full justify-center'>
                            <Image src={'/android.svg'} alt='android' width={20} height={20} />
                            <h4>Download App</h4>
                        </button>
                    </div>
                </div>
                <div className='flex flex-1 justify-center'>
                    <Image
                        src={'/phones.png'}
                        alt='phones'
                        width={10000}
                        height={1000}
                        className=' lg:w-1/2 w-2/3'
                    />
                </div>
            </div>
        </section>
    )
}
