import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Albert_Sans , Montserrat_Alternates } from "next/font/google";
import Link from "next/link";
const albertSans = Albert_Sans({ subsets: ["latin"] , display: "swap" });
const montserratAlternates = Montserrat_Alternates({ subsets: ["latin"] , display: "swap" ,
   weight:["100", "200", "300", "400", "500", "600", "700", "800", "900"] , variable: "--font-montserratAlternates" });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">    
      <head>
      </head>
      <body className={`${albertSans.className} ${montserratAlternates.variable} min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-slate-100`}>
        <header className="bg-white shadow-md border-b-4 border-blue-500">
          <nav className="max-w-7xl mx-auto px-6 py-4">
            <ul className="flex flex-row justify-between items-center gap-16">
              <li className="font-bold text-xl text-blue-600"><Link href="/3d-models">3D Models</Link></li>
              <div className="flex gap-12">
                <li className="m-10"><Link href="/about" className="text-gray-700 hover:text-blue-600 transition font-medium text-lg">About</Link></li>
              </div>
            </ul>
          </nav>
        </header> 
        <main className="flex-1">
          {children}
        </main>
        <footer className="bg-gray-800 text-white text-center py-6 mt-12">
          <p>&copy; 2026 3D Printing Models. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
