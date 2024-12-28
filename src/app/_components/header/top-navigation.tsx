'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems:NavigationMenuItem[] = [
    {
        title: 'صفحه اصلی', href: '/'
    },
    {
        title: 'درباره ما', href: '/about'
    },
    {
        title: 'تماس با ما', href: '/connection'
    }
]

export const TopNavigation:React.FC = () => {
    const pathname = usePathname()
    return (
        <ul className="flex gap-x-8 mr-12">
            {
                menuItems.map((item) => {
                    const isActive = pathname === item.href
                    return(
                        <li key={`navigation-${item.href}`}>
                        <Link 
                        className= {`hover:text-primary transition-colors pb-2 ${isActive && 'transition-all text-primary border-primary/30'}`}
                         href={item.href}>{item.title}</Link>
                    </li>
                    );
            })}
        </ul>
    );
};