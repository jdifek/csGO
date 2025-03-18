import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, Settings } from "lucide-react";

interface ProfileHeaderProps {
  nickname: string;
  avatarUrl: string;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  nickname,
  avatarUrl,
  activeTab,
  onTabChange,
}) => {
  const [gameMode, setGameMode] = useState("CS2");
  const [matchType, setMatchType] = useState("5v5");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const tabs = ["STATS", "GRAPHS", "WEAPONS", "MAPS", "MATCHES", "PLAYED WITH"];

  const handleTabClick = (tab: string) => {
    onTabChange(tab);
  };

  return (
    <div className="w-full bg-[#1a1d29] text-white">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-16 px-4 py-3">
        {/* Left side - Avatar and Nickname */}
        <div className="flex items-center gap-4">
          <div className="relative border-2 border-pink-500 rounded-md overflow-hidden">
            <Image
              src={avatarUrl}
              alt={nickname}
              width={72}
              height={72}
              className="object-cover"
            />
          </div>

          <div className="flex flex-col">
            <h1 className="text-xl font-medium">{nickname}</h1>
            <div className="flex items-center gap-2 mt-1">
              <button className="bg-[#12151f] rounded p-1">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M20 5h-3V3a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-2h2a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3zm-5 16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v18zm6-5a1 1 0 0 1-1 1h-3V8a1 1 0 0 0-1-1H9V5h11a1 1 0 0 1 1 1v10z" />
                </svg>
              </button>
              <button className="bg-[#12151f] rounded p-1">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#ff5722">
                  <path d="M12 0L4 8h6v16h4V8h6L12 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-2 flex-col justify-start">
          <div className="flex items-center  gap-2 mt-4 md:mt-0">
            <div className="flex items-center bg-[#12151f] rounded px-3 py-1.5 cursor-pointer">
              <span className="font-medium text-sm">{gameMode}</span>
              <ChevronDown size={14} className="ml-1" />
            </div>

            <div className="flex items-center bg-[#12151f] rounded px-3 py-1.5 cursor-pointer">
              <span className="font-medium text-sm">{matchType}</span>
              <ChevronDown size={14} className="ml-1" />
            </div>

            <div
              className="flex items-center bg-[#12151f] rounded px-3 py-1.5 cursor-pointer"
              onClick={() => setFiltersOpen(!filtersOpen)}
            >
              <span className="font-medium text-sm mr-1">Filters</span>
              <Settings size={14} />
            </div>
          </div>
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <div
                key={tab}
                className={`px-4 py-3 font-medium text-sm cursor-pointer whitespace-nowrap ${
                  activeTab === tab
                    ? "border-b-2 border-blue-500 text-white"
                    : "text-gray-400 hover:text-gray-200"
                }`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
