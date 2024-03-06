import Image from "next/image";

export default function Guide() {
    return (
        <div className="lg:container lg:px-0 p-4">
            <div className="flex flex-col">
                <Image
                    src={'/camp.svg'}
                    alt=""
                    width={60}
                    height={60}
                />
                <span className="text-[#679748] uppercase">We are here for you</span>
                <div className="py-4 flex flex-col gap-6 lg:flex-row justify-between">
                    <div className="xl:w-1/4 w-full">
                        <h1 className="font-bold text-5xl xl:text-6xl">Guide You To Easy Path </h1>
                    </div>
                    <div className="lg:w-1/3 text-gray-400">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem illum similique dolorem iste quod eum quas aliquam maiores, aspernatur reprehenderit delectus excepturi accusamus ipsum ab nam, quisquam velit ut dolore!</p>
                    </div>
                </div>
                <div className="rounded-2xl relative my-8 xl:my-14 w-full overflow-clip min-h-[10rem]">
                    <Image
                        src={'/boat.png'}
                        alt=""
                        width={10000}
                        height={1000}
                        className="w-full bg-cover min-h-[10rem]"
                    />
                    <div className="rounded-2xl md:ml-10 md:mt-10 ml-2 mt-3  z-10 top-0 left-0 absolute text-xs md:text-md lg:text-lg text-black font-semibold bg-white flex flex-col p-5">
                       <div className="flex gap-2">
                            <Image
                            src={'/meter.svg'}
                            alt=""
                            width={1000}
                            height={1000}
                            className="lg:w-[25px] w-[15px]"
                            />
                        <div className="flex flex-col justify-between">
                            <div>
                                <div className="flex text-gray-300 justify-between">
                                    <h3>Destination</h3>
                                    <h3 className="text-green-500">48mn</h3>
                                </div>
                                <h1>Aguas Calientes</h1>
                            </div>
                            <div>
                                <h3 className=" text-gray-300">Start track</h3>
                                <h1>Wonorejo Pasuruan</h1>
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
