import Image from "next/image"

import { RateMovie } from "app/components/RateMovie";

export const Modal = () => {
    return(
        <main>
            <button className="">
                <Image src="/icon-button.svg" alt="title" fill className="rounded-t-md object-cover lg:rounded-r-md lg:rounded-rl-none" />
            </button>
            <section>
                <Image src="/Rectangle_1.png" alt="title" fill className="rounded-t-md object-cover lg:rounded-r-md lg:rounded-rl-none"/>                
                    
                <div className="absolute bottom-[5px] right-1 gap-2 lg:bottom-0 lg:left-[-80px] flex ">
                    <p className="text-2xl text-guros-white leading-8  font-bold right-8 lg:text-guros-gray500 ">6.7</p>
                    <Image src="star.svg" alt="Rank" className="" width={24} height={24}/>
                </div>
            </section>
            <section className="px-2 lg:flex lg:flex-col lg:w-full">
                    <div>
                        <h1 className="text-guros-gray950 font-bold text-xl">pelicula simple</h1>
                        <h3 className="text-guros-gray500 font-normal text-sm leading-6	">Subtitulo</h3>
                    </div>
                    <div className="hidden lg:flex mt-4">
                        <h3 className="text-guros-gray950 font-bold text-sm">¿De qué trata?</h3>
                        <p className="text-guros-gray500 font-normal text-base">Description</p>  
                    </div>
                    <div className="flex mb-4 justify-end gap-2 lg:justify-start lg:mt-40 ">
                        <p className="text-guros-blue500 text-[10px] leading-4 rounded-full border-solid border border-guros-blue500 py-1 px-3">Genero 1</p>
                        <p className="text-guros-blue500 text-[10px] leading-4 rounded-full border-solid border border-guros-blue500 py-1 px-3">Genero 2</p>
                        <p className="text-guros-blue500 text-[10px] leading-4 rounded-full border-solid border border-guros-blue500 py-1 px-3">Genero 3</p>
                    </div>
                </section>  
                <section>
                    <RateMovie />
                </section>
        </main>
    )
}