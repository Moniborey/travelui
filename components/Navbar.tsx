import Image from "next/image";
import NavbarActions from "./NavbarActions";
import LoginButton from "./LoginButton";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <div className="lg:container py-2 lg:px-0 px-4 flex items-center justify-between">
      <Image 
      src={'hilink-logo.svg'}
      alt="logo"
      width={10000}
      height={1000}
      className="lg:w-[7rem] w-[4rem] p-2 bg-cover"
      />
      <NavbarActions/>
      <LoginButton/>
      <Menu width={30} height={30} className="cursor-pointer lg:hidden"/>
    </div>
  )
}
