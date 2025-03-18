import Header from "@/components/Header";
import { ProfileHeaderWrapper } from "@/components/ProfileHeaderWrapper";
import { TriangleAlert } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params: paramsPromise,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const params = await paramsPromise;
  const { locale, id } = params;
  const t = (await import(`/messages/${locale}.json`)).default["Second"] || {};
  return {
    title: t.title || "Steam Profile",
    description: t.description || `Profile for Steam ID ${id}`,
  };
}

export default async function Second({
  params: paramsPromise,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const params = await paramsPromise;
  const { locale, id } = params;

  const API_KEY = "F13BAFFBDD51BE5EB848937B593F699F";

  if (!API_KEY) {
    throw new Error("STEAM_API_KEY is not defined in environment variables");
  }

  if (!id || isNaN(Number(id))) {
    console.error("Invalid Steam ID:", id);
    notFound();
  }

  const apiUrl = `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${API_KEY}&steamids=${id}`;
  const res = await fetch(apiUrl, { next: { revalidate: 3600 } });

  if (!res.ok) {
    console.error(
      `HTTP error! Status: ${res.status}, Response: ${await res.text()}`
    );
    notFound();
  }

  const data = await res.json();
  console.log("API Response:", data);

  const player = data.response?.players?.[0];
  if (!player || player.communityvisibilitystate !== 3) {
    notFound();
  }

  const nickname = player.personaname;
  const avatarUrl = player.avatarfull;

  // Загружает переводы
  const translations = (await import(`/messages/${locale}.json`)).default;
  const tSecond = translations["Second"] || {};
  const tHome = translations["Home"] || {};
  const tFooter = translations["Footer"] || {};

  return (
    <>
      <Header />
      
      {/* Replace the original profile section with the new ProfileHeader */}
      <ProfileHeaderWrapper
        nickname={nickname} 
        avatarUrl={avatarUrl} 
      />
      
      <div
        className="w-[100vw] h-[70vh] relative grid grid-cols-1 md:grid-cols-3"
        style={{
          backgroundImage:
            "url('https://i.postimg.cc/zv21zTFx/photo-2025-03-18-23-06-55.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 bg-[#D04143] py-3.5 px-3 text-white text-xs flex items-center gap-3 w-[100vw] justify-center">
          <TriangleAlert width={14} height={16} />
          <p>
            {tSecond.pleaseRegister ||
              "Please register or log in to view full profile details."}
          </p>
          <a
            href="https://csstats.gg/login"
            className="flex items-center gap-2 bg-[#7ead1d] text-white py-3 px-6 rounded-full hover:bg-[#6e8c17] transition-all"
          >
            {tHome.signInWithSteam || "Sign in with Steam"}
            <Image
              src="https://static.csstats.gg/images/steam.png"
              width={22}
              height={22}
              alt="Official CS:GO Matchmaking"
            />
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full min-h-[250px] h-[340px] md:h-[320px] relative bg-[#141621]">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 py-4">
          <h4 className="font-normal text-sm mb-4">{tFooter.pleaseRegister}</h4>
          <h4 className="font-normal text-sm mb-2">
            Copyright © 2016-2025 ESL Gaming Online, Inc.
          </h4>
          <h4 className="font-normal text-gray-500 text-[12px] mb-4">
            {tFooter.description}
          </h4>
          <ul className="flex gap-3.5 text-blue-600 text-[13px] mb-2">
            <li>{tFooter.termsOfUse}</li>
            <li>{tFooter.privacyPolicy}</li>
            <li>{tFooter.privacySettings}</li>
            <li>{tFooter.dmcaPolicy}</li>
            <li>{tFooter.cs2Stats}</li>
          </ul>
          <h4 className="font-normal text-gray-500 text-[12px] mb-4">
            {tFooter.forFeedback}
          </h4>
          <h4 className="font-normal text-gray-500 text-[12px] mb-4">
            <span className="text-blue-50">{tFooter.poweredBySteam}</span>{" "}
            {tFooter.bottom}
          </h4>
        </div>
      </div>
    </>
  );
}
