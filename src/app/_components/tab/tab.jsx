import React from 'react'

export default function tab({
    stepNo,
    title,
    message,
    state,
}) 
{
    return (
    <div className="relative flex items-start mb-5 gap-5 space-x-4">
        <div>
            <div className={
                state == 'active' ? 'absolute inline-flex w-12 h-12 rounded-full opacity-30 animate-ping bg-primary-lightBlue lg:w-9 lg:h-9 font-bold' : ''}>
            </div>
            <div className={
                state == 'active' ? 
                'flex items-center justify-center mb-2 border-none rounded-full  h-12 w-12 lg:w-9 font-bold lg:h-9 text-primary-marineBlue bg-primary-lightBlue myFontMediu z-40' 
                : 
                'flex items-center justify-center mb-2 text-white border-[1.5px] font-bold border-white rounded-full h-12 w-12 lg:w-9 lg:h-9 bg-trasparent myFontMedium'
            }>
                {stepNo}
            </div>
        </div>
        
        <div className="">
        {title && 
            <h3 className="text-xs font-bold text-neutral-lightGray "></h3>
        }
        {message && 
            <h4 className="text-sm font-bold mt-2 text-white ">{message}</h4>
        }
        </div>
    </div>
    )
}