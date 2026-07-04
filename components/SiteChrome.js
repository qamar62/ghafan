"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

/**
 * Site-wide chrome (navbar / footer / whatsapp) — hidden on /admin
 * so the billing area has a clean, app-like layout.
 */
export default function SiteChrome({ children }) {
  const isAdmin = usePathname()?.startsWith("/admin");

  if (isAdmin) return <main>{children}</main>;

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
