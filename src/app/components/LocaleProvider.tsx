"use client";

import { IntlProvider } from "next-intl";

export default function LocaleProvider({
  locale,
  messages,
  children,
}: {
  locale: string;
  messages: Record<string, string>;
  children: React.ReactNode;
}) {
  return (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  );
}
