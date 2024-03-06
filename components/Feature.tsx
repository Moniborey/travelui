import Image from "next/image"

export default function Feature() {
  return (
    <div className="bg-feature lg:my-20 my-10 lg:container lg:px-0 px-4">
      <div className="flex justify-center my-10">
        <h1 className="font-bold lg:text-6xl relative text-5xl">Our Features
          <Image
            src={'/camp.svg'}
            alt="camp"
            width={40}
            height={40}
            className="absolute -top-8 left-0"
          /></h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[600px,1fr]">
        <Image
          src={'/phone.png'}
          alt=""
          width={10000}
          height={10000}
          className="hidden h-[800px] w-auto rotate-[15deg] ml-20 lg:block"
        />
        <div className="grid grid-cols-2 lg:py-10 gap-8">
          <div className="flex flex-col gap-5">
            <div className="rounded-full w-fit p-5 bg-[#30AF5B]">
              <Image
                src={'/map.svg'}
                alt=""
                width={40}
                height={40}
                className="w-[2rem] lg:w-10"
              />
            </div>
            <div className="lg:w-3/4 w-full">
              <h1 className="font-bold lg:text-3xl text-xl">Real Map Can Be Offline</h1>
              <p className="pt-2 text-gray-500 text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur dolores qui ex maxime praesentium, enim, reiciendis veritatis commodi perspiciatis repellendus tempora ducimus?
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="rounded-full w-fit p-5 bg-[#30AF5B]">
              <Image
                src={'/calendar.svg'}
                alt=""
                width={40}
                height={40}
                className="w-[2rem] lg:w-10"
              />
            </div>
            <div className="lg:w-2/3 w-full">
              <h1 className="font-bold lg:text-3xl text-xl">Set An Adventure Schedule</h1>
              <p className="pt-2 text-gray-500 text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur dolores qui ex maxime praesentium, enim, reiciendis veritatis commodi perspiciatis repellendus tempora ducimus?
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="rounded-full w-fit p-5 bg-[#30AF5B]">
              <Image
                src={'/tech.svg'}
                alt=""
                width={40}
                height={40}
                className="w-[2rem] lg:w-10"
              />
            </div>
            <div className="lg:w-3/4 w-full">
              <h1 className="font-bold lg:text-3xl text-xl">Technology Using Augment Reality</h1>
              <p className="pt-2 text-gray-500 text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur dolores qui ex maxime praesentium, enim, reiciendis veritatis commodi perspiciatis repellendus tempora ducimus?
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="rounded-full w-fit p-5 bg-[#FF814C]">
              <Image
                src={'/location.svg'}
                alt=""
                width={40}
                height={40}
                className="w-[2rem] lg:w-10"
              />
            </div>
            <div className="lg:w-3/4 w-full">
              <h1 className="font-bold lg:text-3xl text-xl">Many New Locations Every Month</h1>
              <p className="pt-2 text-gray-500 text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur dolores qui ex maxime praesentium, enim, reiciendis veritatis commodi perspiciatis repellendus tempora ducimus?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
