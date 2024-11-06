import Auth from "./Auth"
import Subcribers from "@/Components/Subcribers"
export default function Subcribe() {
    return (
        <Auth>
             <div className="py-20 flex flex-col items-center">
                <div className="text-black font-semibold text-[26px] mb-3">
                    Pricing for Everyone
                </div>
                <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                    Invest your little money to get a whole new experiences from movies.
                </p>

            
                <div className="flex justify-center gap-10 mt-[70px]">
                 
                    <Subcribers
                    name="Basic" price={50000} duractions={5} features={['Coba1', 'Coba2', 'COba3']}/>
                    <Subcribers isPremium/>

               
                 
                </div>
              
            </div>
        </Auth>
    )
}