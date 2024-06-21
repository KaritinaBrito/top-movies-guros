import Image from "next/image"
import React from "react"

export const RateMovie = () => {
    return(
        <main>
            <section className="flex gap-1 ">
                <Image src="star.svg" alt="Rank" className="" width={24} height={24} />
                <Image src="star.svg" alt="Rank" className="" width={24} height={24} />
                <Image src="star.svg" alt="Rank" className="" width={24} height={24} />
                <Image src="star.svg" alt="Rank" className="" width={24} height={24} />
                <Image src="star.svg" alt="Rank" className="" width={24} height={24} />
            </section>
            <button className="bg-guros-pink500 text-base font-medium text-guros-white max-w-[357px] h-[59px] p-5">
                Enviar
            </button>
        </main>
    )
}