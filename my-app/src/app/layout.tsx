import type { Metadata } from "next";
import Navbar from './components/Navbar/Navbar';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from 'next/head';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  
  title: "Babako",
  description: "Medi App is a secure platform for managing patient records, assigning doctors, tracking prescriptions with ease.",
};
<Head>
  <link rel="icon" href="/favicon.ico" />
</Head>

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col`}
      >
        
       <div className=" fixed top-0 left-0 w-full h-2/5 "      
       >
        <Navbar />
        </div>
        

        


        {
        children
        }
        <footer
        style = {{
          position: "fixed",
          bottom: "0",
          width: "100%",          
          textAlign: "center",
          padding: "10px",
          fontSize: "12px",
          color: "#333",
        }}
        >
          <p> Your health is our concern</p>
        </footer>
      </body>
    </html>
    
  );
}
