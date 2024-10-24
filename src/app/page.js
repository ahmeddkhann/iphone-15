"use client";

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
              <div
                key={nav}
                className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
              >
                {nav}
              </div>
            ))}
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="w-full nav-height bg-black relative">
        <div className="h-5/6 w-full flex-center flex-col">
          <p id="hero" className="hero-title">
            iPhone 15 Pro
          </p>
          <div className="md:w-10/12 w-9/12">
            {videoSrc && (
              <video className="pointer-events-none" autoPlay muted playsInline>
                <source src={videoSrc} type="video/mp4" />
              </video>
            )}
          </div>
        </div>

        <div
          id="cta"
          className="flex flex-col items-center opacity-0 translate-y-20"
        >
          <a href="#highlights" className="btn">
            Buy
          </a>
          <p className="font-normal text-xl">From $199/month or $999</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-900 text-white py-16">
        <h2 className="text-3xl text-center mb-10">Features</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-5">
          {["Stunning Display", "Advanced Camera System", "A17 Chip"].map(
            (feature, index) => (
              <div
                key={index}
                className="p-5 bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:-translate-x-3 hover:shadow-lg hover:bg-gray-700"
              >
                <h3 className="text-xl font-bold mb-4">{feature}</h3>
                <p>
                  {feature === "Stunning Display"
                    ? "Experience vibrant colors and true blacks with the Super Retina XDR display."
                    : feature === "Advanced Camera System"
                    ? "Capture every moment with the best camera system ever on an iPhone."
                    : "Unmatched performance and efficiency with the latest A17 chip."}
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-600 text-white py-16">
        <h2 className="text-3xl text-center mb-10">Testimonials</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-5">
          {[
            {
              text: "The iPhone 15 Pro has changed the way I interact with technology. The performance is incredible!",
              author: "Sarah L.",
            },
            {
              text: "I love the design and features of my new iPhone. It’s worth every penny!",
              author: "James P.",
            },
            {
              text: "The camera quality is simply amazing. I can’t believe how good my photos look!",
              author: "Emily R.",
            },
            {
              text: "I've been using iPhones for years, and this one is the best yet!",
              author: "Mark T.",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="p-5 bg-gray-700 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-600 hover:-translate-y-1 hover:-translate-x-1"
            >
              <p className="text-xl">{`"${testimonial.text}"`}</p>
              <h3 className="mt-4 font-bold">{`- ${testimonial.author}`}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-gray-700 text-white py-16">
        <h2 className="text-3xl text-center mb-10">Reviews</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-5">
          {[
            {
              text: "Best iPhone yet! The performance and camera are top-notch!",
              author: "TechRadar",
            },
            {
              text: "A solid upgrade with a stunning display and great battery life.",
              author: "CNET",
            },
            {
              text: "Apple has outdone itself with the iPhone 15 Pro!",
              author: "The Verge",
            },
          ].map((review, index) => (
            <div
              key={index}
              className="p-5 bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:translate-x-3 hover:shadow-lg hover:bg-gray-600"
            >
              <p className="text-xl">{`"${review.text}"`}</p>
              <h3 className="mt-4 font-bold">{review.author}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-5">
          <div className="flex flex-col items-center md:items-start mb-5 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Stay Connected</h3>
          </div>
        </div>
        <div className="border-t border-gray-700 py-5">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-5">
            <p>&copy; 2024 Apple. All rights reserved.</p>
            <div className="flex gap-5">
              <a href="#" className="hover:text-gray-400">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gray-400">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
