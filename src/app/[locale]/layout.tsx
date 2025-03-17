import type { Metadata } from 'next'
import { Cairo, Geist, Geist_Mono } from 'next/font/google'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { getMessages } from 'next-intl/server'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import '../globals.css'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

const cairo = Cairo({
	weight: ['400', '500', '600', '700'],
	variable: '--font-cairo',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'CS2 Stats',
	description: 'Track your CS2 stats in Competitive and Premier matchmaking',
}

interface RootLayoutProps {
	children: React.ReactNode
	params: Promise<{ locale: string }>
}

export default async function RootLayout({
	children,
	params,
}: RootLayoutProps) {
	const { locale } = await params
	if (!hasLocale(routing.locales, locale)) {
		notFound()
	}

	return (
		<html lang={locale}>
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${cairo.variable} antialiased`}
			>
				<NextIntlClientProvider>{children}</NextIntlClientProvider>
			</body>
		</html>
	)
}
