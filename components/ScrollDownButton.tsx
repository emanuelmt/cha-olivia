"use client";
import React, { useEffect, useState } from "react";

type Props = { className?: string };

export default function ScrollDownButton({ className = "" }: Props) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const container = document.querySelector("#main-container");
    if (!container) return;

    const handleScroll = () => {
      const sections = Array.from(container.querySelectorAll("section"));
      if (!sections.length) return;

      const lastSection = sections[sections.length - 1] as HTMLElement;
      const containerBottom = container.scrollTop + container.clientHeight;
      const lastSectionTop = lastSection.offsetTop;

      // esconde o botão se a última seção estiver visível
      setVisible(containerBottom < lastSectionTop + lastSection.offsetHeight);
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll(); // verifica no load

    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    const container = document.querySelector("#main-container");
    if (!container) return;

    const sections = Array.from(container.querySelectorAll("section"));
    const nextSection = sections.find((sec) => sec.offsetTop > container.scrollTop + 10);
    if (!nextSection) return;

    const lastSection = sections[sections.length - 1] as HTMLElement;

    setVisible(nextSection !== lastSection);

    container.scrollTo({
      top: (nextSection as HTMLElement).offsetTop,
      behavior: "smooth",
    });

    setTimeout(() => {
      const containerBottom = container.scrollTop + container.clientHeight;
      const lastSectionTop = lastSection.offsetTop;
      setVisible(containerBottom < lastSectionTop + lastSection.offsetHeight);
    }, 200);
  };

  if (!visible) return null;

  return (
    <button
      aria-label="Descer"
      onClick={handleClick}
      className={`flex items-center justify-center w-12 h-12 rounded-full bg-primary animate-bounce ${className}`}
    >
      <svg
        className="w-6 h-6 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );
}
