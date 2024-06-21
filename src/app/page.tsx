"use client"
import Image from "next/image";

import { Card } from "app/components/Card";
import { RateMovie } from "app/components/RateMovie";
import { useState } from "react";


export default function Home() {
  const [modalActive, setModalActive] = useState(false);

  const handleModal = () => setModalActive(!modalActive);

  return (
    <section className="flex flex-col gap-10 px-8 lg:px10" onClick={handleModal}>
      <div className="w-14 h-10 lg:w-32 lg:h-20 relative ">
        <Image
          src="/header.png"
          alt="Logo"
          fill
          className="object-cover"
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
      <div>
        <Card />
      </div>
      <RateMovie/>
    </section>
  );
}
