"use client"

import React, { useState } from "react";

import { FaStar } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

export const RateMovie = () => {
    const [ratingSelect, setRatingSelect]= useState(0);
    const [hover, setHover]= useState(0);
    const [sendScore, setSendScore]= useState(false);

    const handleSendScore = () => {
        setSendScore(!sendScore)
    }

    return(
        <main className="w-full flex justify-center  flex-col gap-1 mb-0 lg:gap-5 md:gap-5 lg:place-items-center relative">
            {sendScore && (
                <section className="w-full lg:w-1/3 lg:top-4 z-20 top-0 right-0 flex place-content-evenly px-2 py-4 lg:py-2 items-center bg-guros-gray950 fixed border-solid border-b-4 border-guros-success">
                    <CiCircleCheck className="text-guros-success" size={24}/>
                    <h2 className="text-guros-white font-normal text-base leading-6">Tu calificación se registró correctamente</h2>
                    <IoMdClose onClick={handleSendScore} className="text-guros-white cursor-pointer" size={16}/>
                </section>
            )}
            <h2 className="text-sm font-bold text-guros-gray950 leading-5">Cuéntanos ¿te gustó?</h2>
            <section className="flex gap-4 items-center justify-center">
                {[... new Array(5)].map((star, index) => {
                    const currentRating = index + 1;
                    return (
                        <label key={index+1}>
                            <input
                                type="radio"
                                name="rating"
                                value={currentRating}
                                onClick={()=>setRatingSelect(currentRating)}
                                className="hidden"
                                />
                            <FaStar 
                                size={24} 
                                className="cursor-pointer" 
                                color={currentRating <= (hover || ratingSelect) ? "#E5004D":"#B9BFC6"}
                                onMouseEnter={()=> setHover(currentRating)}
                                onMouseLeave={()=> setHover(0)}                                
                                />
                        </label>
                )           
                })}
                
            </section>
            <button onClick={handleSendScore} className={`${sendScore ? "bg-guros-gray300" : "bg-guros-pink500"} text-base font-medium text-guros-white lg:max-w-[357px] h-[59px] px-28 py-5 cursor-pointer rounded-md`}>
                Enviar calificación
            </button>
        </main>
    )
}