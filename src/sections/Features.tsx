"use client";

import ProductImage from "@/assets/product-image.png";
import {
  DotLottieCommonPlayer,
  DotLottiePlayer,
} from "@dotlottie/react-player";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  ValueAnimationTransition,
} from "framer-motion";

import { ComponentPropsWithoutRef, useEffect, useRef, useState } from "react";

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

const FeatureTab = (
  props: (typeof tabs)[number] &
    ComponentPropsWithoutRef<"div"> & { selected: boolean },
) => {
  const dotLottieRef = useRef<DotLottieCommonPlayer>(null);
  const tabRef = useRef<HTMLDivElement>(null);
  const xPercentage = useMotionValue(0);
  const yPercentage = useMotionValue(0);

  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%, black, transparent)`;

  useEffect(() => {
    if (!tabRef.current) {
      return;
    }
    xPercentage.set(0);
    yPercentage.set(0);
    const { height, width } = tabRef.current?.getBoundingClientRect();
    const circumference = height * 2 + width * 2;
    const times = [
      0,
      width / circumference,
      (width + height) / circumference,
      (width * 2 + height) / circumference,
      1,
    ];
    const options: ValueAnimationTransition = {
      duration: 4,
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop",
      times: times,
    };
    animate(xPercentage, [0, 100, 100, 0, 0], options);
    animate(yPercentage, [0, 0, 100, 100, 0], options);
  }, [props.selected]);

  const handleTabHover = (): void => {
    if (dotLottieRef.current) {
      dotLottieRef.current.seek(0);
      dotLottieRef.current.play();
    }
  };
  return (
    <motion.div
      whileHover={{
        scale: 1.01,
        transition: {
          duration: 0.3,
        },
      }}
      whileTap={{
        scale: 0.9,
      }}
      ref={tabRef}
      onClick={props.onClick}
      onMouseEnter={handleTabHover}
      className="relative flex cursor-pointer items-center gap-2.5 rounded-xl border border-white/15 p-2.5 lg:flex-1"
      key={props.title}
    >
      {props.selected && (
        <motion.div
          style={{
            maskImage: maskImage,
          }}
          className="absolute inset-0 -m-px rounded-xl border border-[#A369FF]"
        />
      )}

      {/* Icon */}
      <span className="inline-flex size-12 items-center justify-center rounded-lg border border-white/15">
        <DotLottiePlayer
          autoplay
          ref={dotLottieRef}
          src={props.icon}
          className="size-5"
        />
      </span>
      {/* Title */}
      <span className="text-center text-base font-medium tracking-tight">
        {props.title}
      </span>
      {/* New tab */}
      {props.isNew && (
        <span className="rounded-full bg-[#8c44ff] px-2 py-0.5 text-xs font-semibold text-black">
          new
        </span>
      )}
    </motion.div>
  );
};

export const Features = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const backgroundPositionX = useMotionValue(tabs[0].backgroundPositionX);
  const backgroundPositionY = useMotionValue(tabs[0].backgroundPositionY);
  const backgroundSizeX = useMotionValue(tabs[0].backgroundSizeX);

  const backgroundSize = useMotionTemplate`${backgroundSizeX}% auto`;
  const backgroundPosition = useMotionTemplate`${backgroundPositionX}% ${backgroundPositionY}%`;

  const handleSelectTab = (index: number) => {
    setSelectedTab(index);
    const animateOptions: ValueAnimationTransition = {
      duration: 2,
      ease: "easeInOut",
    };
    animate(
      backgroundSizeX,
      [backgroundSizeX.get(), 100, tabs[index].backgroundSizeX],
      animateOptions,
    );
    animate(
      backgroundPositionX,
      [backgroundPositionX.get(), tabs[index].backgroundPositionX],
      animateOptions,
    );
    animate(
      backgroundPositionY,
      [backgroundPositionY.get(), tabs[index].backgroundPositionY],
      animateOptions,
    );
  };

  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="section-title">Elevate your SEO efforts.</h2>
        <p className="section-description">
          From small startups to large enterprises, our AI-driven tool has
          revolutionized the way businesses approach SEO.
        </p>
        <div className="mt-10 flex flex-col gap-3 lg:flex-row">
          {tabs.map((tab, tabIndex) => (
            <FeatureTab
              selected={selectedTab === tabIndex}
              onClick={() => handleSelectTab(tabIndex)}
              {...tab}
              key={tab.title}
            />
          ))}
        </div>
        <div className="mt-3 rounded-xl border border-white/20 p-2.5">
          <motion.div
            className="aspect-video rounded-lg border border-white/20 bg-cover"
            style={{
              backgroundImage: `url(${ProductImage.src})`,
              backgroundPosition,
              backgroundSize,
            }}
          ></motion.div>
        </div>
      </div>
    </section>
  );
};
