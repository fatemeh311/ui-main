'use client'
import Step1 from "@/app/_components/step/step1";
import Step2 from "@/app/_components/step/step2";
import Step3 from "@/app/_components/step/step3";
import Step4 from "@/app/_components/step/step4";
import StepFinal from "@/app/_components/step/Finish";
import desktopBgSidebar from '../../../../public/images/bg-sidebar-desktop.svg'
import mobileBgSidebar from '../../../../public//images/bg-sidebar-mobile.svg'
import { Formik } from "formik";
import {stepNavbar} from '@/types/stepNavbar'
import { useEffect, useState } from "react";
import SumbitBtn from "@/app/_components/button/sumbitBtn";
import Tab from "@/app/_components/tab/tab";



function Worker() {
    const [nextStep, setNextStep] = useState(0);

  const handleNextStep = async (data: any,actions: any) => {
    try{
      scrollToTop()
      setNextStep(prevStep => prevStep + 1);
    } catch (e) {
        alert('error')
    }
  };
  
  const handlePrevStep = async () => {
    try{
      scrollToTop()
      setNextStep(prevStep => prevStep - 1);
    } catch (e) {
        alert('error')
    }
  };

  useEffect(() => {
    localStorage.clear();
  }, []);
    return (
        <>
        <nav className="block lg:hidden">
          <div className="bg-no-repeat bg-cover h-[15rem] flex items-center justify-center " 
            style={{ backgroundImage: `url(${mobileBgSidebar.src})` }}
          >
              {stepNavbar.map((step,index) => (
                <div key={step.id}>
                  <Tab
                    stepNo={step.stepNo}
                    title=""
                    message=""
                    state={index === nextStep ? "active" : ""}
                  />
                </div>
              ))}
          </div>
        </nav>
  
        <div className="flex flex-col justify-start h-screen pt-32 lg:justify-center lg:pb-0 lg:pt-0 bg-neutral-magnolia">
          <div className="absolute pb-8 mx-4 bg-white rounded-lg shadow-lg top-[10rem]  lg:relative lg:top-0 lg:pb-0 h-[650px] md:h-[610px]">
            <div className="grid grid-cols-12 gap-8 lg:gap-6 md:gap-12">
              <nav className="hidden col-span-12 lg:col-span-4  bg-no-repeat bg-center h-[38rem] lg:block relative" 
                style={{ backgroundImage: `url(${desktopBgSidebar.src})` }}
              >
                <div className="absolute top-[4rem] left-[8rem]">
                  {stepNavbar.map((step,index) => (
                    <div key={step.id} >
                      <Tab 
                        stepNo={step.stepNo}
                        title={step.title}
                        message={step.message}
                        state={index === nextStep ? "active" : ""}
                      />
                    </div>
                  ))}
                </div>
              </nav>
              <div className="col-span-12 pl-10 py-5  lg:col-span-8">
                <Formik
                  validationSchema={""}
                  initialValues={{ 
                      name:'',
                      email:'',
                      phone:'',
                      plan:'',
                      price:'',
                      check_plan:'',
                      add_on: [],
                      price_add_on:[],
                  }}
                  onSubmit={(values,actions)=>{
                    handleNextStep(values,actions);
                  }}
              >
              {({ handleSubmit}) => (
              <>              
                {nextStep == 0 ?
                  <Step1/>
                : null}
                {nextStep == 1 ?
                  <Step2/>
                : null}
                {nextStep == 2 ?
                  <Step3/>
                : null}
                {nextStep == 3 ?
                    <Step4 
                      onClcik={() => setNextStep(prevStep => prevStep - 2)}
                    />
                : null}
                {nextStep == 4 ?
                    <StepFinal/>
                : null}
  
                <div>
                  <SumbitBtn
                    stateStep={nextStep}
                    stateHandlePrevStep={handlePrevStep}
                    stateHandleSubmit={handleSubmit}
                  />
                </div>
                </>
                )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
    
      </>
    )
}
export default Worker;
export function scrollToTop() {
  window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
  });
}