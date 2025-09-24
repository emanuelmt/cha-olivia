"use client";

import { useState, useMemo } from "react";
import Section from "@/components/Section";
import Image from "next/image";

type Props = { invited: string[] };

export default function RVSPPage({ invited = [] }: Props) {
  const [confirmed, setConfirmed] = useState<Record<string, boolean>>(
    Object.fromEntries(invited.map((name) => [name, false]))
  );

  const toggleConfirmed = (name: string) => {
    setConfirmed((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const whatsappMessage = useMemo(() => {
    const allFalse = Object.values(confirmed).every((c) => !c);
    const isSingle = invited.length === 1;
    const check = "%E2%9C%85"; // ✅
    const cross = "%E2%9D%8C"; // ❌
    const party = "%F0%9F%8E%89"; // 🎉
    const sad = "%F0%9F%98%A2"; // 😢

    const statusList = invited
      .map(
        (name) =>
          `${name}: ${confirmed[name] ? `${check} sim` : `${cross} não`}`
      )
      .join("\n");

    let intro = "";
    if (allFalse) {
      intro = isSingle
        ? `${sad} Eiii Pati, infelizmente não conseguirei ir ao chá da Olívia! Mas estou muito ansioso(a) pela chegada dessa princesinha e poderemos viver muitos momentos juntos futuramente.`
        : `${sad} Eiii Pati, infelizmente não conseguiremos ir ao chá da Olívia! Mas estamos muito ansiosos pela chegada dessa princesinha e poderemos viver muitos momentos juntos futuramente.`;
    } else {
      intro = isSingle
        ? `${party} Eiii Pati, nós todos iremos para o chá da Olívia! Não vemos a hora dessa pequena estar no meio de nós.`
        : `${party} Eiii Pati, confira quem de nós poderá ir para o chá da Olívia:`;
    }

    return encodeURIComponent(`${intro}\n\n${statusList}`);
  }, [confirmed, invited]);

  const whatsappLink = `https://wa.me/5527999742005?text=${whatsappMessage}`;

  return (
    <Section id="rvsp-page" className="flex-col items-center px-5 pt-0">
      <div className="flex items-center flex-col justify-center w-full mt-4">
        <Image
          src="/FundoData.png"
          alt="Data"
          width={2000}
          height={2000}
          className="w-[90%] h-auto object-contain z-10"
        />
        <div className="text-primary font-questrial absolute text-xl text-center align-middle mb-4  z-10">
          <p>Confirmação de presença</p>
        </div>
      </div>
      <p className="text-primary font-questrial my-4 text-xl text-shadow-sm mx-2">
        É muito importante para nós que vocês confirmem a presença até o dia{" "}
        <span className="font-bold">15 de outubro</span>, assim poderemos nos
        organizar e preparar um momento muito especial para todos.
      </p>

      <div className="mt-2 w-full z-10">
        {invited.map((name) => (
          <div
            key={name}
            className="flex items-center justify-between p-1 rounded-xl"
          >
            <span className="text-2xl font-questrial text-primary">{name}</span>

            {/* Switch */}
            <button
              onClick={() => toggleConfirmed(name)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                confirmed[name] ? "bg-green-500" : "bg-gray-400"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  confirmed[name] ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        ))}
      </div>

      <a
        href={whatsappLink}
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
        mb-10
      "
      >
        <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">
          Enviar confirmação
        </span>
      </a>

      <Image
        src="/EfeitoFundo.png"
        alt="Data"
        width={300}
        height={300}
        className="w-full h-auto absolute z-0 scale-130 rotate-45"
      />
      <Image
        src="/EfeitoFundo.png"
        alt="Data"
        width={300}
        height={300}
        className="w-full h-auto absolute z-0 bottom-0 left-40 scale-130"
      />
    </Section>
  );
}
