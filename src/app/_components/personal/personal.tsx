import Image from "next/image";
import Link from "next/link";


export const Personal : React.FC = () => {
    return (
        <section className="  wow fadeInUp -p-36">
    
            <div className="flex  flex-col-reverse items-center  xl:flex-row">
              <div className="flex container flex-col gap-5 ml-5 mt-12 pb-5 text-center ">
                <h3 className="text-3xl mr-5 font-black graident lg:text-5xl xl:text-5xl">Ready to get started?</h3>
                <p className="mr-5">
                  It only takes a few minutes to register
        
                </p>
        
              
              <Link href="/register" className="cmn-btn">
                Open an Account
              </Link>
          
              </div>
             
              <Image className="container" src="/images/get-start.png" width={400} height={400} alt="get start" />
           
            </div>
    
    </section>
    )
}