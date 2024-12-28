import Link from "next/link";
import { Button } from "../button";
import Image from 'next/image'

export const HomeHeroSection: React.FC = () => {
    return (
        <section className=' bg-hero-pattern bg-no-repeat mt-5 xl:bg-left'>
        <div className=' flex flex-auto items-center  xl:flex-row'>
        <div className='flex flex-col gap-5 mt-12 pb-5 text-center xl:text-right'>
          <h3 className='text-xl mr-5 text-teal-400 font-semibold xl:text-2xl'>خوش آمدی به ... </h3>
          <h1 className='text-3xl mr-5 font-black graident lg:text-5xl xl:text-5xl'>دسترسی راحت به ....</h1>
          <p className="mr-5">طراحان معمولا از لورم ایپسوم استفاده میکنند
             تا فقط به مشتری یا کار فرما نشان دهند که قالب طراحی شده
             چگونه خواهد بود و فونت ها و اندازه ها چگونه در نظر گرفته شده است</p>
             <div className='mt-10 m-10 flex gap-4'>
              <Link href="/employer" className="flex-auto ">
              <Button variant='info' size='large' shape='full' animatedIcon={true}>عملیات1</Button>
              </Link>
              <Link className="flex-auto " href="/worker">
        <Button variant='primary' size='large' shape='full' animatedIcon={true}>عملیات 2</Button>
        </Link>
             </div>
        
        </div>
        
        <Image src="/images/banner-bg2.png"
    
         width={900} height={500} alt='نام سایت'/>
         </div>
      </section>
    )
}