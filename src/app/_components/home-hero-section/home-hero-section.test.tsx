import { render } from "@testing-library/react"
import { HomeHeroSection } from "./home-hero-section"

describe('Home hero section', () => {
    test('display the home hero section', () => {
     const {container} = render(<HomeHeroSection/>)
     expect(container).toMatchSnapshot(`
     <section className=' bg-hero-pattern bg-no-repeat mt-5 xl:bg-left'>
     <div className='container flex flex-col-reverse items-center  xl:flex-row'>
     <div className='flex flex-col gap-5 mt-12 pb-5 text-center xl:text-right'>
       <h3 className='text-xl text-teal-400 font-semibold xl:text-2xl'>خوش آمدی به ... </h3>
       <h1 className='text-3xl font-black graident lg:text-5xl xl:text-5xl'>دسترسی راحت به ....</h1>
       <p>طراحان معمولا از لورم ایپسوم استفاده میکنند
          تا فقط به مشتری یا کار فرما نشان دهند که قالب طراحی شده
          چگونه خواهد بود و فونت ها و اندازه ها چگونه در نظر گرفته شده است</p>
          <div className='mt-10 flex gap-4'>
          <Button variant='info' size='large' shape='full' animatedIcon={true}>عمایات 1</Button>
     <Button variant='primary' size='large' shape='full' animatedIcon={true}>عملیات 2</Button>
 
          </div>
     
     </div>
     <Image src="/images/banner-bg2.png"
     className=''
      width={702} height={500} alt='نام سایت'/>
      </div>
   </section>
     `)
    })
})