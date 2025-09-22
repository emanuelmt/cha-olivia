import Image from "next/image";

export default function InitialPage() {
  return (
    <section
      id="initial-page"
      className="h-screen w-screen flex justify-center snap-start m-0 p-0 z-10 relative"
    >
      <div className="flex items-center justify-center">
        <Image
          src="/LogoInicial.png"
          alt="Decoração central"
          width={2000}
          height={2000}
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
}
