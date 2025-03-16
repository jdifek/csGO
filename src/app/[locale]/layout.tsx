// src/app/[locale]/layout.tsx
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import '../globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const locales = ['en', 'ru', 'es'];

export const metadata: Metadata = {
  title: 'CS2 Stats',
  description: 'Track your CS2 stats in Competitive and Premier matchmaking',
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // params теперь Promise
}) {
  const resolvedParams = await params; // Ждём разрешения Promise
  const { locale } = resolvedParams;

  console.log('RootLayout params after await:', resolvedParams);
  console.log('Current locale in layout:', locale);

  if (!locale) {
    console.error('Locale is undefined in layout');
    notFound();
  }

  if (!locales.includes(locale)) {
    console.log(`Invalid locale: ${locale}. Redirecting to 404.`);
    notFound();
  }

  // Загружаем сообщения для текущей локали
  let messages;
  try {
    messages = (await import(`../../locales/${locale}.json`)).default;
  } catch (error) {
    console.error('Failed to load messages:', error);
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}