import './globals.css';
import { ReactNode } from 'react';
import Head from 'next/head';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" rel="stylesheet" />
        <title>Deep Space Tic-Tac-Toe</title>
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
}
