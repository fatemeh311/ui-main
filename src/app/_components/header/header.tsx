"use client"
import Image from "next/image"
import { TopNavigation } from "./top-navigation"
import { Button } from "../button"
import Link from "next/link"
import { useQuery } from "@tanstack/react-query"

export const Header: React.FC = () => {
    const {data, error, isLoading}= useQuery({
        queryKey: ["get-user"],
        queryFn: getUserProfile,
        retry: false,
        refetchOnWindowFocus: true
    });
    return (
        <header className={`border-b border-base-content border-opacity-5 sticky top-0 transition-all
        duration-200 ${isLoading ? "blur-sm opacity-70" :"opacity-100 blur-0"}`}>
           <div className=" container flex items-center justify-between ">
           <Image
           src="/images/logo.avif"
           width={100}
           height={50}
        
           alt="کارگر"/>
           <TopNavigation/>
           <Link  href="/signin">
            {data ? <span>{data}</span> :
            <Button variant='primary' size='normal' shape='default'>ورود/ثبت نام</Button> }
           
           </Link>
           </div>
           
        </header>
    )
}

export function getUserProfile() {
    // get data
}