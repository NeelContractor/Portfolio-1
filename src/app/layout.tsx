import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FloatingDock } from "@/components/ui/floating-dock";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neeeel's Portfolio",
  description: "All my History and Philosophy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
        <FloatingDock
          desktopClassName="fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-5"
          items={[
            { title: "Home", icon: <Image src="/home_icon_white.png" alt="Home Icon" width={25} height={25} className="text-white" />, href: "/" },
            { title: "Blog", icon: <Image src="/blog_icon_white.png" alt="Blog Icon" width={25} height={25} />, href: "/blog" },
            { title: "Github", icon: <Image src="/github_logo.png" alt="Github Icon" width={25} height={25} />, href: "https://github.com/NeelContractor" },
            { title: "Linkedin", icon: <Image src="/linkedin_logo.png" alt="Linkedin Icon" width={25} height={25} />, href: "https://www.linkedin.com/in/neel-contractor-695400164/" },
            { title: "X", icon: <Image src="/x_logo.png" alt="X Icon" width={25} height={25} />, href: "https://x.com/100xneel" },
            { title: "Mail", icon: <Image src="/mail_logo.png" alt="Mail Icon" width={25} height={25} />, href: "mailto:neelcontractor7@gmail.com" },
          ]}
          
        />
      </body>
    </html>
  );
}
