import { MotionDiv } from "@/components/Motiondiv";
import Image from "next/image";
export default function Hero() {
    return (
        <section className="lg:container lg:px-0 px-4">
            <div className="py-10 lg:py-28 grid-cols-1 grid gap-4 lg:grid-cols-2">
                <MotionDiv initial={{ opacity: 0, y: 2 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: 'easeIn' }} className=" relative w-full flex flex-col px-3">
                    <Image
                        src={'/camp.svg'}
                        width={10000}
                        height={1000}
                        alt=""
                        className="absolute w-14 -top-12 left-0"
                    />
                    <p className=" z-10 lg:text-6xl font-bold text-5xl">
                        Putuk Truno <span className="block pt-4">Camp Area</span>
                    </p>

                    <p className="text-gray-500 md:w-1/2 text-sm cursor-all-scroll pt-6">
                        We want to be on each of your journ eys seeking the satisfaction of seeing the incorruptible beausty of nature. We can help you on an adventure around the world in just one app
                    </p>
                    <div className="py-10 flex items-center gap-2">
                        {Array(5).fill(1).map((_, index) => (
                            <Image
                                src={'/icons8-star-48.png'}
                                width={20}
                                height={20}
                                key={index}
                                unoptimized={false}
                                alt=""
                            />
                        ))}
                        <p className="font-bold  mx-2">
                            198k &nbsp;
                            <span className="underline font-normal">Good Reviews</span>
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-10">
                        <button className="py-3 w-full md:w-auto text-white font-bold px-5 rounded-full bg-[#30AF5B]">
                            Download App
                        </button>
                        <div className="flex gap-3">
                            <Image
                                src={'/icons8-play-50.png'}
                                width={20}
                                height={20}
                                alt="play"
                                unoptimized={false}
                            />
                            <h3 className="font-semibold text-sm tracking-wide">How we work?</h3>
                        </div>
                    </div>
                </MotionDiv>
                <div className="absolute xl:-top-72 lg:-top-40 md:top-0 top-[28rem] -z-10 -left-10">
                    <Image
                        src={'/pattern-bg.png'}
                        width={10000}
                        height={10000}
                        alt=""
                        className=""
                    />
                </div>
                <div className="relative my-10">
                    <div className="rounded-xl z-10 lg:-top-10 left-0 absolute text-white font-semibold bg-black opacity-90 flex flex-col p-5">
                        <h3 className="text-gray-500 text-xs">Location</h3>
                        <h1>Aguas Calientes</h1>
                        <div className="flex gap-6 pt-5">
                            <div className="flex flex-col">
                                <h3 className="text-gray-500 text-xs">Distance</h3>
                                <h1>173.28mi</h1>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-gray-500 text-xs">Elevation</h3>
                                <h1>2.040km</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
