import Image from "next/image";
import Header from "../components/Header";
import RecentMatches from "../components/RecentMatches";

export default function Home() {
  return (
    <>
      <Header />
      <div
        className="w-full h-[70vh] relative flex justify-between px-24 py-16"
        style={{
          backgroundImage:
            "url('https://static.csstats.gg/images/header-bg-image.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=" flex flex-col text-white  gap-10">
          <h1 className="text-4xl">CS2 Stats</h1>
          <h3 className="text-lg ">
            Track your CS2 stats in Competitive and Premier matchmaking
          </h3>
        </div>

        <div>
          <h2>
            Introducing Steam{" "}
            <span className="bg-blue-500 px-1.5 py-1 rounded-s-lg">
              BotBeta!
            </span>
          </h2>

          <h4>Faster Tracking & Match Notifications</h4>

          <Image
            src="https://static.csstats.gg/images/steam-bot.png"
            alt="sasa"
            height={150}
            width={350}
          ></Image>

          <p className="text-[11px] text-end mt-2">91 slots remaining</p>

          <button></button>
        </div>
      </div>

      <div className="w-full h-[70vh] relative bg-[#1F2336]">
        <div className="absolute inset-0 flex  items-center justify-center text-center text-white px-4 py-16 gap-10">
          <div className="px-[86px] flex gap-24 justify-between items-center">
            <div className="w-[30%] text-start">
              <p className="text-[17px] mb-4">Post Match Advanced Stats</p>
              <p className="text-[#ffffff99] text-[16px]">
                Once your match has been processed you can check out all of our
                advanced CS2 stats on the scoreboard. We've got all of the base
                stats, but you can see who was getting those entry frags, who
                was trading more than just skins and who was the clutch king!
              </p>
            </div>
            <Image
              src="https://static.csstats.gg/images/donk-profile.png"
              alt="sas"
              width={550}
              height={350}
            ></Image>
          </div>
        </div>
      </div>
      <div className="w-full h-[340px] relative bg-[#181A26]">
        <div className="absolute inset-0 flex  items-center justify-center text-center text-white px-4 py-16 gap-10">
          <div className="px-[86px] flex gap-24 justify-between items-center">
            <Image
              src="https://static.csstats.gg/images/features/round-breakdown.png"
              alt="sas"
              width={550}
              height={350}
            ></Image>
            <div className="w-[30%] text-start">
              <p className="text-[17px] mb-4">Post Match Advanced Stats</p>
              <p className="text-[#ffffff99] text-[16px]">
                Once your match has been processed you can check out all of our
                advanced CS2 stats on the scoreboard. We've got all of the base
                stats, but you can see who was getting those entry frags, who
                was trading more than just skins and who was the clutch king!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[280px] relative bg-[#1F2336]">
        <div className="absolute inset-0 flex  items-center justify-center text-center text-white px-4 py-8 gap-10">
          <RecentMatches />
        </div>
      </div>

      <div className="w-full h-[70vh] relative bg-[#181A26]">
        <div className="absolute inset-0 flex items-start justify-betnween text-center text-white px-4 py-8 ">
          <div className="px-[86px] flex-1 flex flex-col items-center">
            <p className="text-[17px] mb-4">Round By Round Match Breakdown</p>
            <p className="text-[#ffffff99] mb-4 text-[16px]">
              {" "}
              Offering detailed round details, such as how the round was won, if
              there was a clutch and full kill feeds. It's perfect for helping
              you find that round your friend died in the first 10 seconds!
            </p>

            <Image
              src="https://static.csstats.gg/images/features/round-breakdown.png"
              alt="sas"
              width={550}
              height={350}
            ></Image>
          </div>
          <div className="px-[86px] flex-1 flex flex-col items-center">
            <p className="text-[17px] mb-4">Automatic match tracking</p>
            <p className="text-[#ffffff99] mb-4 text-[16px]">
              {" "}
              No longer do you need to add games individually after they are
              over! All you have to do is login with Steam, add your game
              authentication code, maybe add a match if you don't already have
              one and then we will automatically add all of your new CS2
              matches, helping you track your progress to Global Elite.
            </p>
            <Image
              src="https://static.csstats.gg/images/features/match-history.png"
              alt="sas"
              width={550}
              height={350}
            ></Image>
          </div>
        </div>
      </div>
      <div className="w-full h-[280px] relative bg-[#22222f]">
        <div className="absolute inset-0 flex  items-center justify-center text-center text-white px-4 py-8 gap-10">
          <div className="px-[86px]">
            <p className="text-[17px] mb-4">Detailed Match History</p>
            <p className="text-[#ffffff99] text-[16px]">
              {" "}
              CS2 is great, but in-game you're only able to see your past 8
              matches unless you downloaded the demo, that's not so great. We
              let you track your full match history.
            </p>
          </div>

          <div className="px-[86px]">
            <p className="text-[17px] mb-4">VAC Ban Tracking</p>
            <p className="text-[#ffffff99] text-[16px]">
              {" "}
              VAC Ban Tracking We're constantly checking our full database for
              both VAC and Overwatch bans. When players get banned you'll be
              able to see them on your played with tab in your profile. There's
              even a special filter to show only players you've played with who
              have been banned.
            </p>
          </div>
          <div className="px-[86px]">
            <p className="text-[17px] mb-4">Track Personal Progress</p>
            <p className="text-[#ffffff99] text-[16px]">
              Track Personal Progress After 1000 hours, sometimes you just want
              to see how much you've improved. You can check out the graphs on
              your profile to see just that. Remember tho as you rank up
              sometimes your stats will drop, but as they start rising again,
              you might just be ready to rank up again!
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-[220px] relative bg-[#0e0e0f]">
        <div className="absolute inset-0 flex  items-center justify-center text-center text-white px-4 py-8">
          <Image
            src="https://static.csstats.gg/images/esea.png"
            alt="ds"
            width={230}
            height={220}
          ></Image>
          <div className="w-full sm:w-1/2">
            <div className="csgostats-partnership">
              <span className="font-bold">csgostats</span>
              <span className="mx-2">→</span>
              <a
                href="https://play.esea.net/subscribe/?r=1227721"
                rel="nofollow noopener noreferrer"
                target="_blank"
                className="text-blue-600 underline"
              >
                ESEA
              </a>
              <p className="text-gray-600">
                If you want to play vs less cheaters but love our statistics, we
                now power the ESEA match pages!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full relative">
        <Image
          src="https://static.csstats.gg/images/cs-background.png"
          alt="asa"
          layout="responsive"
          width={100}
          height={50}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 py-8">
          <h4 className="font-normal text-4xl mb-4">Get Started Now</h4>
          <div className="max-w-[700px] mx-auto text-white/70 pb-[32px]">
            <p>
              Start tracking your CS2 stats now, all you've got to do is sign in
              with Steam below and we'll guide you on the next steps after that!
            </p>
          </div>
          <a
            href="https://csstats.gg/login"
            className=" flex gap-2 transition-all duration-400 ease-in-out rounded-[24px] bg-[#7ead1d] text-white py-[12px] px-[28px] relative"
          >
            Sign in with Steam
            <Image
              src="https://static.csstats.gg/images/steam.png"
              width={22}
              height={22}
              alt="Official CS:GO Matchmaking"
            />
          </a>
        </div>
      </div>

      <div className="w-full h-[320px] relative bg-[#141621]">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 py-4">
          <h4 className="font-normal text-sm mb-4">Follow Us!</h4>
          <h4 className="font-normal text-sm mb-2">
            Copyright © 2016-2025 ESL Gaming Online, Inc.
          </h4>
          <h4 className="font-normal text-gray-500 text-[12px] mb-4">
            csstats.gg is an online service for CS2 stat tracking. Time to start
            tracking your competitive CS2 match history.
          </h4>
          <ul className="flex gap-3.5 text-blue-600 text-[13px] mb-2">
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Privacy Settings</li>
            <li>DMCA Policy</li>
            <li>CS2 Stats</li>
          </ul>
          <h4 className="font-normal text-gray-500 text-[12px] mb-4">
            For feedback contact me at: support(at)csstats(dot)gg.
          </h4>
          <h4 className="font-normal text-gray-500 text-[12px] mb-4">
            <span className="text-blue-50">Powered by Steam.</span> This site is
            not affiliated with Valve.
          </h4>
        </div>
      </div>
    </>
  );
}
