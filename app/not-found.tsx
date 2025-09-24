"use client";
import { useMemo } from "react";

export default function InvalidLinkPage() {
  const whatsappMessage = useMemo(() => {
    const msg = `🎉 *Olá!* 
_Recebi um convite, mas o link não funcionou._ 
Por favor, envie um novo link ✅`;
    return encodeURIComponent(msg);
  }, []);

  const whatsappLink = `https://wa.me/5527999742005?text=${whatsappMessage}`;

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-4 bg-gray-50">
      <h1 className="text-5xl font-bold text-red-500 mb-4">Ops 😕</h1>
      <h2 className="text-2xl font-semibold mb-2">
        O link do convite não funcionou
      </h2>
      <p className="text-gray-600 mb-6">
        Parece que o link está incorreto ou expirou. Para receber um novo convite,
        envie uma mensagem pelo WhatsApp clicando no botão abaixo.
      </p>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-green-500 text-white rounded-lg font-bold hover:bg-green-600 transition-colors"
      >
        Enviar mensagem no WhatsApp
      </a>
    </div>
  );
}
