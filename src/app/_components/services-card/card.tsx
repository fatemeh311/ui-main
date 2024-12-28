import { ServicesSummary } from "@/types/services-summary.interface";
import React from "react";
import Image from 'next/image'

export type ServiceCardProps = ServicesSummary & {};

export const Card: React.FC<ServiceCardProps> = ({
    id,
    title,
    icon,
    desc,

}:ServiceCardProps) => {
    return(
            <div className="flex text-center">
        <div className="h-80 pt-5 w-96 bg-secondary-content rounded-3xl shadow-lg
         justify-content-center align-items-center">
        <figure className="mr-36 ml-36">
          <Image src={icon} width={90} height={90} alt="checking" className=" place-self-center bg-base-services rounded-3xl"/>
          </figure>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      </div>
    )
}