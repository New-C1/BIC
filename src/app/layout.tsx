import 'bootstrap/dist/css/bootstrap.min.css'; // ✅ Add this
import './globals.css'; // your own custom global styles
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BIC Tunis',
  description: 'Breast Center Tunis',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr"> {/* Optional: set lang to 'fr' if you're using French */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
