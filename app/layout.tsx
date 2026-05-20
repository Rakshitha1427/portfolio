import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "D Rakshitha | Generative AI Developer Portfolio",
  description:
    "Premium futuristic portfolio website for D Rakshitha, AI/ML Engineer and Generative AI Developer.",
  keywords: [
    "D Rakshitha",
    "Generative AI Developer",
    "AI ML Engineer",
    "Portfolio",
    "Next.js",
    "Tailwind CSS",
  ],
  authors: [{ name: "D Rakshitha" }],
  openGraph: {
    title: "D Rakshitha | Generative AI Developer Portfolio",
    description:
      "A futuristic AI/ML portfolio with premium visuals, animations, and recruiter-friendly sections.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} bg-[rgb(var(--bg))] text-[rgb(var(--text))] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
