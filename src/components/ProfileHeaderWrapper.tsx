
"use client";

import { useState } from "react";
import ProfileHeader from "./ProfileHeader";

export function ProfileHeaderWrapper({ nickname, avatarUrl }) {
  const [activeTab, setActiveTab] = useState("STATS");
  
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };
  
  return (
    <ProfileHeader
      nickname={nickname}
      avatarUrl={avatarUrl}
      activeTab={activeTab}
      onTabChange={handleTabChange}
    />
  );
}