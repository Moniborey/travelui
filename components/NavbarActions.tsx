'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
    { href: '/', key: 'home', label: 'Home' },
    { href: '/how', key: 'how_hilink_work', label: 'How Hilink Work?' },
    { href: '/services', key: 'services', label: 'Services' },
    { href: '/pricing', key: 'pricing ', label: 'Pricing ' },
    { href: '/contact', key: 'contact_us', label: 'Contact Us' },
  ];

export default function NavbarActions() {
    const pathname = usePathname()
  return (
    <>
    <ul className="lg:flex gap-10 hidden">
      {NAV_LINKS.map(link=>(
        <Link 
        href={link.href}
        key={link.key}
        className={`text-gray-400 pb-1 ${pathname === link.href && 'activePage'}  hover:text-black transition-all duration-200 text-sm`}
        >
        {link.label}
        </Link>
      ))}
    </ul>
    </>
  )
}
