"use client";
import { useEffect, useState } from "react";

export default function BrowserGuard({ children }: { children: React.ReactNode }) {
  const [blocked, setBlocked] = useState<string | null>(null);

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    const isSamsung = ua.includes("samsungbrowser");
    const isMobile = /android|iphone|ipad|ipod/i.test(ua);

    if (isSamsung && isMobile) {
      // URL que você quer abrir no Chrome
      const targetUrl = window.location.href;

      // Intent para abrir no Chrome
      const chromeIntent = `intent://${targetUrl.replace(/^https?:\/\//, "")}#Intent;scheme=https;package=com.android.chrome;end`;

      window.location.href = chromeIntent;
      setBlocked("Esse convite não pode ser aberto nesse navegador. Tente utilizar o Google Chrome.");
    } else if (!isMobile) {
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
