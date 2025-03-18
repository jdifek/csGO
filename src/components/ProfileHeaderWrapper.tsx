
"use client";

import { useState } from "react";
import ProfileHeader from "./ProfileHeader";

interface ProfileHeaderWrapperProps {
  nickname: string;
  avatarUrl: string;
}

export function ProfileHeaderWrapper({ nickname, avatarUrl }: ProfileHeaderWrapperProps) {
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