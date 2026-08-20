import type { Metadata } from "next";
import "./globals.css";
import "./verification.css";

export const metadata: Metadata = { title: "CoalVision | Command Center", description: "Multi-modal coal transportation intelligence" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
