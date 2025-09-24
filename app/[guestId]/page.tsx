"use client";

import ScrollDownButton from "@/components/ScrollDownButton";
import InitialPage from "@/pages/InitialPage";
import InvitePage from "@/pages/InvitePage";
import GiftPage from "@/pages/GiftPage";
import RVSPPage from "@/pages/RVSPPage";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";

const guests: Record<string, string[]> = {
  "vovo-diana": ["Vovó Diana", "Vovô Evandro", "Tia Lelê"],
  "vovo-eliana": ["Vovó Eliana", "Vovô Nené"],
  "tia-preta":  ["Tia Preta", "Tio Lô"],
  "tia-deda":  ["Tia Deda", "Tio Tamiro", "Juju"],
};

export default function Home() {
  const { guestId } = useParams<{ guestId: string }>() ?? {};
  const invited = guestId && guests[guestId] ? guests[guestId] : [];

  return (
    <motion.div
      id="main-container"
      className="h-screen w-screen snap-y snap-mandatory overflow-y-scroll bg-[url(/FundoXadrez.png)] bg-center bg-repeat bg-size-[auto_750px] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.5 }}
    >
      <InitialPage />
      <InvitePage />
      <GiftPage invited={invited} />
      <RVSPPage invited={invited} />
      <ScrollDownButton className="absolute bottom-5 left-1/2 transform -translate-x-1/2  z-40" />
    </motion.div>
  );
}
