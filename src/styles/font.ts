import { Poppins, Geist } from "next/font/google";

// Fuente para headings y títulos
export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["500", "600", "700", "800"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

export const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

export const fontConfig = {
  body: geist.className,
  heading: poppins.className,
} as const;

export const fontVariables = [geist.variable, poppins.variable].join(" ");
