"use client";

import ScrollDownButton from "@/components/ScrollDownButton";
import InitialPage from "../pages/InitialPage";
import InvitePage from "../pages/InvitePage";
import GiftPage from "@/pages/GiftPage";
import RVSPPage from "@/pages/RVSPPage";
import { motion } from "framer-motion";

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const invited = Array.isArray(searchParams.nome)
    ? searchParams.nome
    : searchParams.nome
    ? [searchParams.nome]
    : [];

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
