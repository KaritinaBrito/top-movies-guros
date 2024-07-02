import React from "react";
import Image from "next/image";


export const Header = () => {
    return (
        <section className="flex flex-col gap-10 w-full">
            <div  className="w-1/3 h-10 lg:h-20 relative ">
                <Image
                src="/header.png"
                alt="Logo"
                fill
                className="right-0"
                />
            </div>
            <div className="flex flex-col gap-4">
                <h1 className='font-bold text-guros-gray950'>
                Top movies en Guros
                </h1>
                <p className="font-normal text-guros-gray500 tracking-wide">
                    Pirate ipsum arrgh bounty warp jack. Red keelhaul spirits on avast. Topsail chase pirate lanyard mizzen log me. Hogshead hearties brace black boom. Coast rig dead round or.
                </p>
            </div>
        </section>
    )
}