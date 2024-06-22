import Image from "next/image";

import { FaStar } from "react-icons/fa";
import { CardProps } from '../../types';
 

export const Card = ({id, title, poster, vote_average, description,}: CardProps) => {
    const src = `https://image.tmdb.org/t/p/w500${poster}`;

    return(
        <main className="flex flex-col gap-5" >
            <section className="flex flex-col rounded-md shadow-lg pb-2 gap-2 cursor-pointer lg:flex-row-reverse lg:gap-5">
                <section className="min-w-[355px] min-h-[275px] relative lg:w-[335px] lg:max-w-[355px] lg:max-h-[355px]">
                    <Image loader={() => src} src={src} alt={title} fill className="rounded-t-md object-cover lg:rounded-r-md lg:rounded-rl-none"/>                
                    
                    <div className="absolute bottom-[5px] right-1 gap-2 lg:bottom-[10px] lg:left-[-95px] flex items-center">
                        <p className="text-2xl text-guros-white leading-8  font-bold right-8 lg:text-guros-gray500 ">{ Math.round(vote_average * 100) / 100}</p>
                        <FaStar className="text-guros-pink500" size={24}/>
                    </div>
                </section>
                <section className="px-2 lg:flex lg:flex-col lg:w-full">
                    <div>
                        <h1 className="text-guros-gray950 font-bold text-xl">{title}</h1>
                        <h3 className="text-guros-gray500 font-normal text-sm leading-6	">{id}</h3>
                    </div>
                    <div className="hidden lg:flex mt-4 lg:flex-col lg:gap-2">
                        <h3 className="text-guros-gray950 font-bold text-sm">¿De qué trata?</h3>
                        <p className="text-guros-gray500 font-normal text-base">{description}</p>  
                    </div>
                    <div className="flex mb-4 justify-end gap-2 lg:justify-start lg:mt-40 ">
                      <p className="text-guros-blue500 text-[10px] leading-4 rounded-full border-solid border border-guros-blue500 py-1 px-3"></p>
                    </div>
                </section>  
            </section>            
        </main>

    )
}