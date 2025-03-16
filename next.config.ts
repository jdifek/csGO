// next.config.js
import withNextIntl from 'next-intl/plugin';

const withNextIntlPlugin = withNextIntl('./src/i18n/request.ts');

const nextConfig = {
  images: {
    domains: ['static.csstats.gg'],
  },
};

export default withNextIntlPlugin(nextConfig);