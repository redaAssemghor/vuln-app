"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Categories = () => {
  return (
    <section className="overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-center items-center py-8 px-4 bg-gray-100 gap-6">
        <Image
          width={100}
          height={100}
          src={"/assets/categories01.webp"}
          alt="Cat Gear"
          className="rounded-lg shadow-md"
        />
        <div className="flex flex-col items-center justify-center gap-4 w-full lg:w-1/2 text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            PREPARE YOUR CAT FOR BATTLE WITH STEALTHY WHISKERS
          </h1>
          <p className="text-gray-600">
            At Stealthy Whiskers, we're more than just a store that sells cat
            gear. We're passionate cat owners and military enthusiasts who want
            to help other cat owners train their furry friends to become skilled
            and prepared warriors. Learn more about our story and how we got
            started on our mission to help cats become the best they can be.
          </p>
          <div className="flex gap-4 mt-6">
            <button className="bg-black text-white px-6 py-2 rounded-full tracking-widest">
              Show All
            </button>
            <button className="bg-transparent text-black px-6 py-2 rounded-full shadow-sm tracking-widest">
              Our Story →
            </button>
          </div>
        </div>
        <Image
          width={100}
          height={100}
          src={"/assets/categories02.png"}
          alt="Cat Gear"
          className="rounded-lg shadow-md"
        />
      </div>
      <ImageSlider />
    </section>
  );
};

const sliderImages = [
  {
    url: "/assets/slide1.webp",
    description: "JOIN THE RANKS OF ELITE FELINE SOLDIERS",
  },
  {
    url: "/assets/slide2.webp",
    description: "JOIN THE RANKS OF ELITE FELINE SOLDIERS",
  },
  {
    url: "/assets/slide3.webp",
    description: "JOIN THE RANKS OF ELITE FELINE SOLDIERS",
  },
  {
    url: "/assets/slide4.webp",
    description: "JOIN THE RANKS OF ELITE FELINE SOLDIERS",
  },
];

const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (imagesRef.current) {
      gsap.to(imagesRef.current, {
        x: `-${currentIndex * 89}%`,
        duration: 1,
        ease: "power2.inOut",
      });
    }
  }, [currentIndex]);

  useGSAP(() => {
    const tl = gsap.timeline({ paused: true });
    const container = containerRef.current;

    tl.from(".btn-left", { opacity: 0, x: 20, scale: 0.5, duration: 0.5 }, 0)
      .from(".btn-right", { opacity: 0, x: -20, scale: 0.2, duration: 0.5 }, 0)
      .from(".arrow-left", { x: 20, duration: 0.5, scale: 0.5 }, 0)
      .from(".arrow-right", { x: -20, duration: 0.2, scale: 0.5 }, 0);

    const handleMouseEnter = () => tl.restart();
    const handleMouseLeave = () => tl.reverse();
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
    }
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      ref={containerRef}
      className="relative w-screen h-screen overflow-hidden"
    >
      <div ref={imagesRef} className="flex w-full h-full gap-2">
        {sliderImages.map((image, index) => (
          <div key={index} className="min-w-[90%] h-full relative">
            <Image
              width={1000}
              height={1000}
              src={image.url}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 text-white p-10">
              <p>{image.description}</p>
              <button className="px-4 py-2 tracking-widest backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
                <span>Shop Now →</span>
                <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handlePrev}
        className="btn-left flex items-center justify-center absolute left-5 text-sm top-1/2 transform -translate-y-1/2 p-2 rounded-full h-10 w-10 font-bold bg-black bg-opacity-50 text-white"
      >
        <span className="arrow-left">←</span>
      </button>
      <button
        onClick={handleNext}
        className="btn-right flex items-center justify-center absolute right-5 text-sm top-1/2 transform -translate-y-1/2 p-2 rounded-full h-10 w-10 font-bold bg-black bg-opacity-50 text-white"
      >
        <span className="arrow-right">→</span>
      </button>
    </div>
  );
};

export default Categories;
