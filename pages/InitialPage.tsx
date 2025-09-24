"use client";

import Image from "next/image";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";

export default function InitialPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="initial-page"
      className="h-screen w-screen flex justify-center snap-start m-0 p-0 z-10 relative"
    >
      <motion.div
        className="flex items-center flex-col justify-center w-full mt-0"
        initial={{ scale: 0.65 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          bounce: 0.5,
          duration: 0.8,
          delay: 0.5,
        }}
      >
        <Image
          src="/EfeitoFundoLogoInicial.png"
          alt="Data"
          width={300}
          height={300}
          className="w-full h-auto absolute z-0 left-[-20] scale-120"
        />
        <Image
          src="/FundoLogoInicial.png"
          alt="Data"
          width={500}
          height={500}
          className="w-[90%] h-auto object-contain z-10"
          style={{
            transform: isInView ? "none" : "scale(1); rotate(45deg)",
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        />
        <div className="absolute text-center flex flex-col align-middle mb-4  z-10">
          <span className="text-secondary font-questrial text-4xl my-4 text-shadow-sm">
            chá da
          </span>
          <span className="text-primary font-parisienne text-7xl text-shadow-lg">
            Olívia
          </span>
        </div>
      </motion.div>
    </section>
  );
}
