"use client"
import Image from "next/image";

import { Card } from "app/components/Card";
import { Modal } from "app/components/Modal";
import { useState } from "react";


export default function Home() {
  const [modalActive, setModalActive] = useState(false);

  const handleShowModal = () => {
    setModalActive(!modalActive)
  };



  return (
    <section className="flex flex-col gap-10 px-8 lg:px10 w-full" onClick={handleShowModal}>
      <div  className="w-14 h-10 lg:w-32 lg:h-20 relative ">
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
      <div className="flex flex-col gap-5">
        <Card />
        <Card />
        <Card />
      </div>
      <section className="flex gap-4 lg:justify-end lg:place-items-end">
        <button className=" text-guros-blue500 border border-solid border-guros-blue500 p-1 rounded-lg w-1/2 lg:w-[170px]">Anterior</button>
        <button className=" text-guros-blue500 border border-solid border-guros-blue500 p-1 rounded-lg w-1/2 lg:w-[170px]">Siguiente</button>
      </section>
      {modalActive && <Modal handleShowModal={handleShowModal} /> }
    </section>
  );
}
