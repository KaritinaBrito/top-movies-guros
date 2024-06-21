"use client"

import Image from "next/image"
import React, { useState } from "react"


import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

export const RateMovie = () => {
    const [ratingSelect, setRatingSelect]= useState(0);
    const [hover, setHover]= useState(0);

    return(
        <main className="w-full flex justify-center  flex-col gap-5 mb-0 lg:place-items-center">
            <h2 className="text-sm font-bold text-guros-gray950 leading-5">Cuéntanos ¿te gustó?</h2>
            <section className="flex gap-4 items-center justify-center">
                {[... new Array(5)].map((star, index) => {
                    return (
                        <label>
                            <input
                                type="radio"
                                name="rating"
                            />
                            <FaRegStar size={24} />
                        </label>
                )           
                })}
                
            </section>
            <button className="bg-guros-pink500 text-base font-medium text-guros-white lg:max-w-[357px] h-[59px] px-28 py-5 cursor-pointer rounded-md">
                Enviar calificación
            </button>
        </main>
    )
}