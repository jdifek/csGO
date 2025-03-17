// next.config.js
/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin'
const nextConfig = {
	images: {
		domains: ['static.csstats.gg', 'i.postimg.cc', 'flagcdn.com'],
	},
}

const withNextIntl = createNextIntlPlugin()
export default withNextIntl(nextConfig)
