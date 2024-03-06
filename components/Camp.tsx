import { PEOPLE_URL } from "@/data/data";
import Image from "next/image";

export default function Camp() {
    return (
        <section className="lg:container md:my-32 mt-48 mb-5 lg:px-0 px-4">
            <div className="flex flex-col gap-5">
                <div className="flex gap-6 overflow-x-auto h-[360px] lg:h-[400px] xl:h-[640px]">
                    <div className="campBg1 bg-no-repeat bg-cover lg:min-w-[1100px] min-w-full overflow-clip rounded-3xl">
                        <div className="flex flex-col items-start justify-between h-full w-full ">
                            <div className="gap-4 flex p-4">
                                <div className="rounded-full p-4 bg-[#30AF5B]">
                                    <Image
                                        src={'/folded-map.svg'}
                                        alt=""
                                        width={40}
                                        height={40}
                                    />
                                </div>
                                <div className="flex flex-col justify-center text-white font-bold text-lg">
                                    <h4>Putuk Truno Camp</h4>
                                    <p className="text-gray-300 text-xs">Prigen, Pasuruan</p>
                                </div>
                            </div>
                            <div className="flex p-4 items-center gap-4">
                                <span className="flex overflow-hidden  -space-x-4">
                                    {PEOPLE_URL.map((person, index) => (
                                        <Image src={person} alt="" width={40} height={40} key={index} />
                                    ))}
                                </span>
                                <span className="text-gray-300 font-bold">50+ joined</span>
                            </div>
                        </div>
                    </div>
                    <div className="campBg2 w-full bg-no-repeat bg-cover h-full lg:min-w-[1100px] min-w-full overflow-clip rounded-3xl ">
                        <div className="flex flex-col items-start justify-between h-full w-full ">
                            <div className="gap-4 flex p-4">
                                <div className="rounded-full p-4 bg-[#30AF5B]">
                                    <Image
                                        src={'/folded-map.svg'}
                                        alt=""
                                        width={40}
                                        height={40}
                                    />
                                </div>
                                <div className="flex flex-col justify-center text-white font-bold text-lg">
                                    <h4>Palak Katuk Camp</h4>
                                    <p className="text-gray-300 text-xs">Prigen, Pasuruan</p>
                                </div>
                            </div>
                            <div className="flex p-4 items-center gap-4">
                                <span className="flex overflow-hidden  -space-x-4">
                                    {PEOPLE_URL.map((person, index) => (
                                        <Image src={person} alt="" width={40} height={40} key={index} />
                                    ))}
                                </span>
                                <span className="text-gray-300 font-bold">40+ joined</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex w-full justify-center">
                    <div className="flex lg:ml-52 flex-col lg:w-3/4 xl:w-1/3   lg:-mt-40 rounded-xl text-white bg-green-500 p-8">
                        <h2 className="tracking-wide lg:text-2xl text-xl"><span className="font-bold">Feeling Lost</span> And Not Knowing The Way?</h2>
                        <p className="text-gray-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, accusantium. Eaque blanditiis explicabo, recusandae ab ipsam cum deserunt nobis obcaecati ullam iure necessitatibus doloremque possimus quod odio veritatis dolor esse?</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
