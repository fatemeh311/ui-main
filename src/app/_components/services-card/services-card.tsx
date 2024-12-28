import { ServicesSummary } from "@/types/services-summary.interface";
import Image from "next/image";
import { Card } from "./card";

type ServicesListProps = {
    singleBusiness: ServicesSummary[]
}

export const ServicesCard : React.FC<ServicesListProps> = ({
    singleBusiness}: 
    ServicesListProps) => {
    return (
        <div className=" flex items-center content-center justify-center flex-wrap gap-10  mb-5 ">
        {
            singleBusiness.map((single) => (
                <div key={single.id}
            //  <div key={`single-${single.id}`} {...single} 
             className="pt-5 mx-2 col-lg-4 col-md-6 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-400 hover:border-teal-400 duration-300">
            <Card key={`single-${single.id}`} {...single} />
          </div>
        ))}
      </div>
    )
}