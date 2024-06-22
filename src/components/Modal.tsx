"use client"
import Image from "next/image"

import { RateMovie } from "app/components/RateMovie";
import React from "react";
import { FaStar } from "react-icons/fa";
import { ModalProps } from "../../types";

export const Modal = ({genres, title, description, vote_average, id, poster, handleShowModal}:ModalProps) => {
    const src = `https://image.tmdb.org/t/p/w500${poster}`;
    
    return(
        <main className="fixed inset-0 bg-guros-gray950 bg-opacity-80 lg:mb-2" onClick={handleShowModal}>
            <section className="bg-guros-white w-full absolute bottom-0 h-3/4 lg:flex" onClick={(e) => e.stopPropagation()}>
                <button  type="button" className="absolute left-3 top-2 cursor-pointer z-20" onClick={handleShowModal}>
                    <Image src="/icon-button.png" alt="close" width={32} height={32} />
                </button>
                <section className="w-full h-2/5 relative lg:w-2/5 lg:h-full">
                    <Image loader={() => src} src={src} alt={title} fill className="lg:object-cover object-cover"/>                
                        
                    <div className="absolute bottom-[5px] right-1 gap-2 lg:bottom-0 lg:left-[-80px] flex ">
                        <p className="text-2xl text-guros-white leading-8  font-bold right-8 lg:text-guros-gray500 ">{vote_average}</p>
                        <FaStar className="text-guros-pink500" size={24}/>
                    </div>
                </section>
                <section className="px-2 flex flex-col lg:w-full gap-3 pb-2 justify-around">
                    <div>
                        <h1 className="text-guros-gray950 font-bold text-xl">{title}</h1>
                        <h3 className="text-guros-gray500 font-normal text-sm leading-6	">{id}</h3>
                    </div>
                    <div className="flex flex-col mt-4">
                        <h3 className="text-guros-gray950 font-bold text-sm">¿De qué trata?</h3>
                        <p className="text-guros-gray500 font-normal text-base">{description}</p>  
                    </div>
                    <div className="flex mb-4 justify-end gap-2 ">
                        <p className="text-guros-blue500 text-[10px] leading-4 rounded-full border-solid border border-guros-blue500 py-1 px-3">{genres}</p>
                    </div>
                    <div className="lg:mt-40">
                        <RateMovie />
                    </div>
                </section>  
            </section>

        </main>
       
    )
}