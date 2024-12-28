
import Image from "next/image";
import Link from "next/link";

export default async function AuthTemplate({
    children,
}: {
    children: React.ReactNode
}) {
      return (
        <div className="fade-in container pl-0 flex max-w-6xl bg-base-services mt-16 rounded-lg border border-base-content border-opacity-10 shadow-md bg-opacity-20">
              <section className="flex-1 p-10  flex flex-col"> {children}</section>
              <section className="flex-1 p-10">
                  <div className="bg-primary-focus rounded-lg shadow-lg text-white flex flex-col items-center justify-around text-center p-6">
                      <h5 className="text-xl">
                          
                      </h5>
                      <div className="bg-primary bg-opacity-50 p-2 rounded-full w-80 h-80 my-8 flex justify-center items-center">
                          <div className="bg-primary bg-opacity-90 p-2 rounded-full w-72 h-72 my-6 flex justify-center border-white border border-opacity-10 relative">
                          <Image src="/images/draw2.webp"
                          className=''
                          alt='نام سایت'
                          fill
                          />
        
                          </div>
                      </div>
                      <div>
                          <h4 className="text-xl">
                              
                          </h4>
                          <h6 className="mt-3">
                             
                          </h6>
                      </div>
                  </div>
              </section>
          </div>
      )
}