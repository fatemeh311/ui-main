import Image from "next/image";
import Link from "next/link";
import { Avatar } from "../avatar";

export const Footer = () => {
  return (
    <div className="bg-footer-pattern bg-base-footer text-bold text-base-300">
      <footer className="container flex flex-col  lg:flex-row items-center gap-5 px-0  lg:px-12 xl:px-40 py-20">
        <div className="text-center flex flex-col items-center lg:me-20">
          <Image
            src="/images/logo.avif"
            width={180}
            height={30}
            alt=""
          />

          <p className="opacity-50 mt-2">
            <br />لورم ایپسوم
          </p>
        </div>
        <div className="flex flex-1 font-bold flex-col md:flex-row gap-5 md:gap-6 whitespace-nowrap">
          <div className="grid flex-1 font-bold basis-36 gap-3 place-items-center md:place-items-start">
            <Link href="/docs/install/" className="link link-hover">
              خدمات ما
            </Link>
            <Link href="/docs/customize/" className="link link-hover ">
              درباره ما
            </Link>
            <Link href="/docs/customize/" className="link link-hover">
            مشاوره 
            </Link>
          </div>

          <div className="grid flex-1 basis-36 gap-3 place-items-center md:place-items-start">
            <Link href="/docs/themes/" className="link link-hover">
              شبکه های مجازی
            </Link>
            <Link href="/docs/themes/" className="link link-hover">
                تلگرام
            </Link>
            <Link href="/docs/themes/" className="link link-hover">
                آپارات
            </Link>
          </div>
          <div className="grid flex-1 basis-36 gap-3 place-items-center md:place-items-start">
            <Link href="/docs/themes/" className="link link-hover">
              مطالب و مقالات
            </Link>
            <Link href="/docs/themes/" className="link link-hover">
              پرسش های متداول
            </Link>
            <Link href="/docs/themes/" className="link link-hover">
              شرایط استفاده و حریم خصوصی
            </Link>
          </div>
        </div>
      </footer>

      <div className="bg-base-200 text-left" lang="en" dir="ltr">
        <div className="container py-5 flex justify-between items-center">
          <div className="flex gap-5 items-center ">
            <Avatar src="/images/logo.avif"/>
            <div className="flex flex-col">
              <span className="text-base-content/50 ">Developed by: author</span>
              {/* <span className="text-lg font-bold tracking-wide">
                author
              </span> */}
            </div>
          </div>
          <span className="text-sm text-base-content/60 font-semibold">
            Copyright © 2023
            <p>All rights reserved</p>
          </span>
        </div>
      </div>
    </div>
  );
};