import { Poppins, Raleway, Roboto_Serif } from "next/font/google";

// Fuente para headings y títulos
export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["500", "600", "700", "800"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

export const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

export const serif = Roboto_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

export const fontConfig = {
  body: raleway.className,
  heading: poppins.className,
  serif: serif.className
} as const;

export const fontVariables = [raleway.variable, poppins.variable, serif.variable].join(" ");
