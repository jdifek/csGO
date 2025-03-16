// components/Header.tsx
import Link from "next/link";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Header: React.FC = () => {
  const t = useTranslations("Home");

  return (
    <header className="flex flex-row items-center justify-between h-16 w-full bg-[#1D202F] px-4">
      <div id="header-logo" className="order-first font-roboto">
        <Link
          id="logo"
          className="text-white text-lg font-bold tracking-wide hover:opacity-80 transition-opacity"
          href="https://csstats.gg"
        >
          cs<span className="text-gray-400">stats</span>.gg
        </Link>
      </div>
      <input
        type="text"
        className="w-[50%] h-[60%] px-4 bg-[#141621] rounded-lg text-white "
      />
      <Link
        href="https://csstats.gg/login"
        id="login-with-steam"
        className="flex gap-2"
      >
        <span id="signin-text">{t("signInWithSteam")}</span>
        <Image
          src="https://static.csstats.gg/images/steam.png"
          width={22}
          height={22}
          alt="Official CS:GO Matchmaking"
        />
      </Link>
    </header>
  );
};

export default Header;
