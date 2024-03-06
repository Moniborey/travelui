'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
    { href: '/', label: 'Home' },
    { href: '/', label: 'How Hilink Work?' },
    { href: '//', label: 'Services' },
    { href: '/', label: 'Pricing ' },
    { href: '/', label: 'Contact Us' },
  ];

export default function NavbarActions() {
    const pathname = usePathname()
  return (
    <>
    <ul className="lg:flex gap-10 hidden">
      {NAV_LINKS.map((link,index)=>(
        <Link 
        href={link.href}
        key={index}
        className={`text-gray-400 pb-1 ${pathname === link.href && 'activePage'}  hover:text-black transition-all duration-200 text-sm`}
        >
        {link.label}
        </Link>
      ))}
    </ul>
    </>
  )
}
