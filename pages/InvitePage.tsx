"use client";

import Section from "@/components/Section";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function InvitePage() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.25,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Section ref={ref} id="invite-page" className="flex-col items-center">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="absolute top-0 left-0 z-0 w-[35%]"
      >
        <Image
          src="/DecoracaoTopoEsq.png"
          alt="Effect"
          width={500}
          height={500}
          className="w-full h-auto"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="absolute top-0 right-0 z-0 w-[30%]"
      >
        <Image
          src="/DecoracaoTopoDir.png"
          alt="Effect"
          width={500}
          height={500}
          className="w-full h-auto"
        />
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="mt-10"
      >
        <motion.p
          variants={item}
          className="text-primary font-questrial text-xl text-shadow-sm mt-4"
        >
          você está convidado para o
        </motion.p>
        <motion.div variants={item}>
          <h3 className="text-secondary font-questrial text-5xl my-4 text-shadow-sm">
            chá da
          </h3>
          <h2 className="text-primary font-parisienne text-8xl text-shadow-lg">
            Olívia
          </h2>
        </motion.div>
        <motion.p
          variants={item}
          className="text-secondary font-questrial px-10 text-center text-xl my-4 text-shadow-sm"
        >
          Os meses estão passando e queremos comemorar com você a vinda da nossa
          princesa
        </motion.p>
        <motion.div
          variants={item}
          className="flex items-center flex-col justify-center w-full mt-4"
        >
          <Image
            src="/FundoData.png"
            alt="Data"
            width={2000}
            height={2000}
            className="w-[90%] h-auto object-contain z-10"
          />
          <div className="text-primary font-questrial absolute text-xl text-center align-middle mb-4  z-10">
            <p>
              <span className="text-2xl">08</span> de novembro às 14 horas
              <br />
              na casa da Vovó Diana
            </p>
          </div>
          <Image
            src="/EfeitoFundo.png"
            alt="Effect"
            width={800}
            height={800}
            className="w-full h-auto absolute z-0 scale-140"
          />
        </motion.div>
      </motion.div>
    </Section>
  );
}
