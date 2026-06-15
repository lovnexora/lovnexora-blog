import React from 'react';
import './globals.css';

export const metadata = {
  title: 'lovnexora',
  description: 'Self-taught programmer building in public.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
