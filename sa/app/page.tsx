import Image from "next/image";
import Header from "@/components/header/header";
import FadeInSection from "@/components/fadeInSection/fadeInSection";
import Top from "@/components/top/top";
import About from "@/components/about/about";
import Skills from "@/components/skills/skills";
import Production from "@/components/production/production";
import End from "@/components/end/end";

export default function Home() {
  return (
    <div>
        <Top/>
        <About/>
        <Skills/>
        <Production/>
        <End/>
    </div>
  );
}
