"use client";
import { useEffect, useState } from "react";

export default function BrowserGuard({ children }: { children: React.ReactNode }) {
  const [blocked, setBlocked] = useState<string | null>(null);

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();

    if (ua.includes("samsungbrowser")) {
      setBlocked("Parece que você está usando o Samsung Internet 😅. Por favor, abra este convite no Chrome.");
    } else if (!/android|iphone|ipad|ipod/i.test(ua)) {
      setBlocked("Esse convite deve ser aberto no celular 📱. Tente acessar pelo seu smartphone.");
    }
  }, []);

  if (blocked) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center p-4">
        <h1 className="text-2xl font-bold mb-4">Atenção 🚫</h1>
        <p className="text-lg">{blocked}</p>
      </div>
    );
  }

  return <>{children}</>;
}
