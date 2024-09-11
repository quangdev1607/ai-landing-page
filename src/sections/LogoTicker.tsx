"use client";

import acmeLogo from "@/assets/logo-acme.png";
import apexLogo from "@/assets/logo-apex.png";
import celestialLogo from "@/assets/logo-celestial.png";
import echoLogo from "@/assets/logo-echo.png";
import pulseLogo from "@/assets/logo-pulse.png";
import quantumLogo from "@/assets/logo-quantum.png";
import { motion } from "framer-motion";
import Image from "next/image";

export const LogoTicker = () => {
  return (
    <div className="bg-black py-8 md:py-12">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_left,transparent,black,transparent)]">
          <motion.div
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
            className="flex flex-none gap-14 pr-14"
          >
            <Image className="logo-ticker" src={acmeLogo} alt="acme logo" />
            <Image
              className="logo-ticker"
              src={quantumLogo}
              alt="quantumLogo logo"
            />
            <Image className="logo-ticker" src={echoLogo} alt="echoLogo logo" />
            <Image
              className="logo-ticker"
              src={celestialLogo}
              alt="celestialLogo logo"
            />
            <Image
              className="logo-ticker"
              src={pulseLogo}
              alt="pulseLogo logo"
            />
            <Image className="logo-ticker" src={apexLogo} alt="apexLogo logo" />

            {/* Second set of logos for animation */}
            <Image className="logo-ticker" src={acmeLogo} alt="acme logo" />
            <Image
              className="logo-ticker"
              src={quantumLogo}
              alt="quantumLogo logo"
            />
            <Image className="logo-ticker" src={echoLogo} alt="echoLogo logo" />
            <Image
              className="logo-ticker"
              src={celestialLogo}
              alt="celestialLogo logo"
            />
            <Image
              className="logo-ticker"
              src={pulseLogo}
              alt="pulseLogo logo"
            />
            <Image className="logo-ticker" src={apexLogo} alt="apexLogo logo" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
