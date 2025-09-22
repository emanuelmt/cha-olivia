import Section from "@/components/Section";
import Image from "next/image";

export default function InvitePage() {
  return (
    <Section id="invite-page" className="flex-col items-center">
      <p className="text-primary font-questrial text-xl text-shadow-sm">
        você está convidado para o
      </p>
      <h3 className="text-secondary font-questrial text-5xl my-4 text-shadow-sm">
        chá da
      </h3>
      <h2 className="text-primary font-parisienne text-8xl text-shadow-lg">
        Olívia
      </h2>
      <p className="text-secondary font-questrial px-3 text-center text-xl my-4 text-shadow-sm">
        Os meses estão passando e queremos comemorar com você a vinda da nossa
        princesa
      </p>
      <div className="flex items-center flex-col justify-center w-full mt-4">
        <Image
          src="/FundoData.png"
          alt="Data"
          width={2000}
          height={2000}
          className="w-[90%] h-auto object-contain z-10"
        />
        <Image
          src="/EfeitoFundo.png"
          alt="Data"
          width={2000}
          height={2000}
          className="w-[150%] h-auto absolute z-0"
        />
        <div className="text-primary font-questrial absolute text-xl text-center align-middle mb-4  z-10">
          <p>
            <span className="text-2xl">08</span> de novembro às 14 horas
            <br />
            na casa da Vovó Diana
          </p>
        </div>
      </div>
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
