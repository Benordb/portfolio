"use client";
import { MainCompHi } from "@/components/main-comp-hi";
import { Container } from "../components/container";
import { MainCompAboutme } from "@/components/main-comp-aboutme";
import { MainCompSkills } from "@/components/main-comp-skills";
import { MainCompExperience } from "@/components/main-comp-experience";
import { MainCompWork } from "@/components/main-comp-works";
import { MainCompContact } from "@/components/main-comp-contact";
import { MainCompHeader } from "@/components";
import { useState } from "react";

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const handleClick = () => {
    setIsDark(!isDark);
  };
  return (
    <main className={`${isDark ? "dark" : ""}`}>
      <div className="text-center text-gray-600 dark:bg-gray-950 dark:text-gray-300">
        <MainCompHeader dark={isDark} handleClick={handleClick} />
        <MainCompHi />
        <MainCompAboutme />
        <MainCompSkills isDark={isDark} />
        <MainCompExperience />
        <MainCompWork />
        <MainCompContact />
      </div>
    </main>
  );
}
