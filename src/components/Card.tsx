import Image from "next/image";

import { getMovies } from "app/data/api";


export const Card = () => {

  
    return(
        <main className="flex flex-col gap-5">
            <section className="flex flex-col rounded-md shadow-lg pb-2 gap-2 cursor-pointer lg:flex-row-reverse lg:gap-5">
                <section className="min-w-[355px] min-h-[275px] relative lg:w-[335px] lg:max-w-[355px] lg:max-h-[355px]">
                    <Image src="/Rectangle_1.png" alt="title" fill className="rounded-t-md object-cover lg:rounded-r-md lg:rounded-rl-none"/>                
                    
                    <div className="absolute bottom-[5px] right-1 gap-2 lg:bottom-[10px] lg:left-[-95px] flex ">
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
            </section>
            <section className="flex gap-4 lg:justify-end lg:place-items-end">
                <button className=" text-guros-blue500 border border-solid border-guros-blue500 p-1 rounded-lg w-1/2 lg:w-[170px]">Anterior</button>
                <button className=" text-guros-blue500 border border-solid border-guros-blue500 p-1 rounded-lg w-1/2 lg:w-[170px]">Siguiente</button>
            </section>
        </main>

    )
}