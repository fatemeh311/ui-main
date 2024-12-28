import { Button } from "@/app/_components/button";
import TextField from "@/app/_components/form/textField";
import { useState } from "react";

function GetOtp ({mobileNumber, onChange, onSubmit}) {
    
    return (
   <div className="md:w-1/3 max-w-lg ml-9">
      <form onSubmit={onSubmit}>
        {/* <div className="my-5 flex items-center before:mt-0.5 ">
          <label className="mx-4 mb-0 text-center font-semibold text-slate-500"></label>
        </div> */}
        {/* <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
         type="tel" pattern="[0-9]"  placeholder="شماره موبایل" /> */}
        
        <TextField label="شماره موبایل" name="mobileNumber" value={mobileNumber} onChange={onChange}/>
        <div className="text-center">
         <button type="submit" className="bg-primary-focus hover:bg-blue-700
          text-white font-bold py-2 my-5 px-4 rounded">ارسال کد تائید</button>
         </div>
         </form>
      </div>
    )
    }
    export default GetOtp



