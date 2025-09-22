import ScrollDownButton from "@/components/ScrollDownButton";
import InitialPage from "../pages/InitialPage";
import InvitePage from "../pages/InvitePage";
import GiftPage from "@/pages/GiftPage";
import RVSPPage from "@/pages/RVSPPage";

export default function Home({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const invited = Array.isArray(searchParams.nome)
    ? searchParams.nome
    : searchParams.nome
    ? [searchParams.nome]
    : [];

  return (
    <main
      className="h-screen w-screen snap-y snap-mandatory overflow-y-scroll bg-[url(/FundoXadrez.svg)] bg-center bg-repeat bg-size-[auto_750px] overflow-hidden"
      style={{
        backgroundBlendMode: "lighten",
        backgroundColor: "rgba(255,255,255,0.3)",
      }}
    >
      <div className="absolute inset-0 bg-white/80 z-0"></div>
      <ScrollDownButton className="absolute bottom-10 left-1/2 transform -translate-x-1/2  z-20" />

      <InitialPage />
      <InvitePage />
      <GiftPage invited={invited} />
      <RVSPPage invited={invited} />
    </main>
  );
}
