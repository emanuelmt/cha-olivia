"use client";

import Section from "@/components/Section";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Props = { invited: string[] };

export default function GiftPage({ invited = [] }: Props) {
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

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const title =
    invited.length > 0
      ? invited.join(", ").replace(/,([^,]*)$/, " e$1")
      : "Visitante";

  return (
    <Section
      ref={ref}
      id="gift-page"
      className="flex-col items-center justify-items-center px-5 pt-10"
    >
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="absolute bottom-0 right-0 z-0 w-[35%]"
      >
        <Image
          src="/DecoracaoTopoEsq.png"
          alt="Effect"
          width={500}
          height={500}
          className="w-full h-auto"
          style={{ transform: "rotate(180deg)" }}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="absolute top-0 left-0 z-0 w-[30%]"
      >
        <Image
          src="/EfeitoFundo.png"
          alt="Data"
          width={300}
          height={300}
          className="absolute z-0"
          style={{ transform: "scale(2.5)" }}
        />
        <Image
          src="/DecoracaoTopoDir.png"
          alt="Effect"
          width={500}
          height={500}
          className="w-full h-auto z-1"
          style={{ transform: "scaleX(-1)" }}
        />
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2
          variants={item}
          className="text-secondary font-questrial text-2xl text-shadow-sm mx-18 z-10"
        >
          {title}
        </motion.h2>
        <motion.p
          variants={item}
          className="text-primary font-questrial my-2 text-shadow-sm"
        >
          A presença de vocês é essencial e já nos enche de alegria! De qualquer
          maneira, se ainda assim desejarem presentear a nossa pequena,
          preparamos uma lista de compra online com muito carinho.
          <br />
          Para acessar, basta clicar no botão abaixo:
        </motion.p>
        <motion.a
          variants={item}
          href="https://www.mercadolivre.com.br/presentes/cha-da-olivia-jc9lw"
          target="_blank"
          rel="noopener noreferrer"
          className="
        relative 
        inline-block 
        w-[70%] 
        h-[60px] 
        bg-[url('/Botao.svg')] 
        bg-contain 
        bg-no-repeat 
        bg-center 
        cursor-pointer
        z-40
      "
        >
          <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">
            Lista de Presentes
          </span>
        </motion.a>
        <motion.p
          variants={item}
          className="text-primary font-questrial px-3 text-sm text-center text-shadow-sm"
        >
          Caso vocês tenham alguma dúvida de onde fica a casa da vovó, a
          localização é essa:
          <br />
          Rua Deck Ruschi, nº 143, Vila Nova - Santa Teresa
        </motion.p>
        <motion.div
          variants={item}
          className="flex h-[250px] items-center flex-col justify-center w-full mt-2 z-10"
        >
          <iframe
            className="z-10"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d267.6888655881141!2d-40.602194321093876!3d-19.937192819290313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb7824f0465365f%3A0x228b5861a180d8a!2sR.%20Decki%20Ruschi%2C%20143%20-%20Eco%2C%20Santa%20Teresa%20-%20ES%2C%2029650-000!5e1!3m2!1spt-BR!2sbr!4v1758393373988!5m2!1spt-BR!2sbr"
            width="85%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <Image
            src="/EfeitoFundo.png"
            alt="Data"
            width={300}
            height={300}
            className="w-[150%] h-auto absolute z-0"
            style={{ transform: "translateY(20%) translateX(20%)" }}
          />
        </motion.div>
      </motion.div>
    </Section>
  );
}
