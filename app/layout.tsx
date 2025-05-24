import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { HeaderSection } from '@/components/sections/header/header-section';
import { FooterSection } from '@/components/sections/footer/footer-section';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Yoga Studio | Transform Your Life Through Yoga',
  description: 'Join our community and start your journey to wellness through yoga practice',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <HeaderSection />
            {children}
            <FooterSection />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}