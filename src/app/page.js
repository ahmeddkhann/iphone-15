"use client"

import { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { appleImg, heroVideo, smallHeroVideo } from "@/utils";

export default function Home() {
  const [videoSrc, setVideoSrc] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setVideoSrc(window.innerWidth < 760 ? smallHeroVideo : heroVideo);
      const handleVideoSrcSet = () => {
        if (window.innerWidth < 760) {
          setVideoSrc(smallHeroVideo);
        } else {
          setVideoSrc(heroVideo);
        }
      };
      window.addEventListener("resize", handleVideoSrcSet);
      return () => {
        window.removeEventListener("resize", handleVideoSrcSet);
      };
    }
  }, []);

  useGSAP(() => {
    if (typeof window !== "undefined") {
      gsap.to("#hero", { opacity: 1, delay: 1.5 });
      gsap.to("#cta", { opacity: 1, y: -50, delay: 2 });
      gsap.to("#title", { opacity: 1, y: 0 });
      gsap.to(".link", { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
    }
  }, []);

  return (
    <div>
      {/* Navbar Section */}
      <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
        <nav className="flex w-full screen-max-width">
          <img src={appleImg} width={14} height={18} alt="Apple logo" />
          <div className="flex flex-1 justify-center max-sm:hidden">
            {["Store", "Mac", "iPhone", "Support"].map((nav) => (
              <div key={nav} className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">
                {nav}
              </div>
            ))}
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="w-full nav-height bg-black relative">
        <div className="h-5/6 w-full flex-center flex-col">
          <p id="hero" className="hero-title">iPhone 15 Pro</p>
          <div className="md:w-10/12 w-9/12">
            {videoSrc && (
              <video className="pointer-events-none" autoPlay muted playsInline>
                <source src={videoSrc} type="video/mp4" />
              </video>
            )}
          </div>
        </div>

        <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
          <a href="#highlights" className="btn">Buy</a>
          <p className="font-normal text-xl">From $199/month or $999</p>
        </div>
      </section>

      {/* Additional sections omitted for brevity */}
    </div>
  );
}
