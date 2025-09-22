"use client";

import Section from "@/components/Section";
import Image from "next/image";

type Props = { invited: string[] };

export default function GiftPage({ invited = [] }: Props) {
  const title =
    invited.length > 0 ? invited.join(", ").replace(/,([^,]*)$/, " e$1") : "Visitante";

  return (
    <Section id="gift-page" className="flex-col items-center px-5 pt-10">
      <h2 className="text-secondary font-questrial text-2xl text-shadow-sm mx-15 z-10">
        {title}
      </h2>
      <p className="text-primary font-questrial my-4 text-shadow-sm mx-6">
        A presença de vocês é essencial e já nos enche de alegria! De qualquer
        maneira, se ainda assim desejarem presentear a nossa pequena, preparamos
        uma lista de compra online com muito carinho.
        <br />
        Para acessar, basta clicar no botão abaixo:
      </p>
      <a
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
        hover:brightness-110 transition-all
      "
      >
        <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">
          Lista de Presentes
        </span>
      </a>
      <p className="text-primary font-questrial px-3 text-sm text-center mt-4 text-shadow-sm">
        Caso vocês tenham alguma dúvida de onde fica a casa da vovó, a
        localização é essa:
        <br />
        Rua Deck Ruschi, nº 143, Vila Nova - Santa Teresa
      </p>
      <div className="w-full h-[250px] mt-2 z-10">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d267.6888655881141!2d-40.602194321093876!3d-19.937192819290313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb7824f0465365f%3A0x228b5861a180d8a!2sR.%20Decki%20Ruschi%2C%20143%20-%20Eco%2C%20Santa%20Teresa%20-%20ES%2C%2029650-000!5e1!3m2!1spt-BR!2sbr!4v1758393373988!5m2!1spt-BR!2sbr"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

      <Image
        src="/EfeitoFundo.png"
        alt="Data"
        width={2000}
        height={2000}
        className="w-[150%] h-auto absolute z-0 top-[15] right-50"
      />
      <Image
        src="/EfeitoFundo.png"
        alt="Data"
        width={2000}
        height={2000}
        className="w-[150%] h-auto absolute z-0 bottom-0 left-40"
      />
      <Image
        src="/DecoracaoTopo1.png"
        alt="Data"
        width={2000}
        height={2000}
        className="w-[150%] h-auto absolute z-0 top-0 left-0"
      />
    </Section>
  );
}
