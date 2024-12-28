import Image from 'next/image'
import { Colors } from './_components/colors/colors'
import { relative } from 'path'
import { Button } from './_components/button'


import { HomeHeroSection } from './_components/home-hero-section/home-hero-section'
import { ServicesCard } from './_components/services-card/services-card'

import {IconClock} from './_components/icons/icons'
import { Personal } from './_components/personal/personal'


const business_solutions_data = [
  {
    id: 1,
    title: "Checking",
    icon: "/images/icon/checking.png",
    desc: "لورم ایپسوم.",
    link: "/register",
  },
  // {
  //   id: 2,
  //   title: "Savings",
  //   icon: '/images/icon/savings.png',
  //   desc: "لورم ایپسوم.",
  //   link: "/register",
  // },
  {
    id: 3,
    title: "Business",
    icon: '/images/icon/business.png',
    desc: "لورم ایپسوم.",
    link: "/register",
  },
];

export default function Home() {
  return (
  <>
   <HomeHeroSection/>
   <section className='pt-5 pb-5 bg-base-services'>
  
    <div className="overlay pt-120 pb-120">
        <div className=" wow fadeInUp">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="mb-12 text-center">
                <h2 className="text-2xl mt-10 mb-4 font-bold">خدمات ما</h2>
              </div>
            </div>
          </div>
          <ServicesCard singleBusiness={business_solutions_data} />
          <Personal/>
      
        </div>
      </div>
   </section>
    </>
  )
}
