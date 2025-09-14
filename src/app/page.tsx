"use client";

import Image from "next/image";
import { MapPin, Calendar, ArrowRight, Mail, Download, Info, PanelsTopLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInDown, fadeInV1, fadeInV2, fadeUpHeaderBTN1, fadeUpHeaderBTN2, fadeUpHeaderBTN3 } from "../../utils/animations";

export default function Home() {
  const headerName = "Cris Justine K. Oracion";
  const headerNameWords = headerName.split(" ");

  const addressName = "Tanjay City, Philippines";
  const addressNameWords = addressName.split(" ");

  const titleName = "Senior Software Engineer";
  const titleNameWords = titleName.split(" ");

  const info1 = "I'm a senior software engineer specializing in developing solutions with JavaScript, Python, and PHP. I work on projects including building modern websites, web applications, mobile apps, search engine optimization, digital marketing, and making code tutorials.";
  const info2 = "I have a passion for creating efficient and scalable software solutions that meet the needs of users and businesses alike.";
  const info3 = "Lately, I've been diving deeper into the world of artificial intelligence, focusing on integrating AI tools and techniques into modern applications. My work now includes developing AI-powered solutions scroll down to know about me, what I can do, what are my projects, and how to contact me.";

  const info1Words = info1.split(" ");
  const info2Words = info2.split(" ");
  const info3Words = info3.split(" ");

  return (
    <main className="min-h-screen flex justify-center px-3">
      {/* Main content card with fixed height and scroll */}
      {/* w-[95vw] sm:w-[95%] md:w-full max-w-[460px] sm:max-w-[660px] md:max-w-[860px] lg:max-w-[980px] */}
      <div className="max-w-4xl mx-auto px-1.5 sm:px-4 pt-4 pb-2 sm:pt-5 md:pt-8 md:pb-2">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full mb-6 sm:mb-9">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate="visible"
          >
            <Image
              src="/images/profile3.jpg"
              alt="Profile Image"
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-md object-cover mx-auto sm:mx-0"
              width={160}
              height={160}
            />
          </motion.div>
          {/* Header main */}
          <div className="flex flex-col items-start gap-[2px] flex-1 w-full sm:w-auto">
            {/* Header name and icon */}
            <div className="flex items-center w-full flex-wrap">
              <div className="flex items-center gap-2 flex-wrap">
                {headerNameWords.map((name, index) => 
                  <motion.h1
                    key={index}
                    variants={fadeInDown}
                    initial="hidden"
                    animate="visible"
                    custom={index}
                    className="text-xl sm:text-2xl font-bold"
                  >
                    {name}
                  </motion.h1>
                )}
                <Image
                  src="/images/Vector.png"
                  alt="Icon"
                  className="w-4 h-4"
                  width={16}
                  height={16}
                />
              </div>
              {/* Online status */}
              <div className="flex h-6 items-center ml-auto">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
              </div>
            </div>
            {/* Header Address */}
            <div className="flex items-center gap-1 relative">
              <motion.div
                variants={fadeInV1}
                initial="hidden"
                animate="visible"
              >
                <MapPin className="w-[14px] h-[14px]" />
              </motion.div>

              <div className="flex flex-row flex-wrap gap-x-[3px]">
                {addressNameWords.map((address, index) => 
                  <motion.span
                    key={index}
                    variants={fadeInV2}
                    initial="hidden"
                    animate="visible"
                    custom={index}
                    className="text-[14px] font-normal"
                  >
                    {address}
                  </motion.span>
                )}
              </div>
            </div>
            {/* Header title */}
            <div className="flex flex-row flex-wrap gap-x-1">
              {titleNameWords.map((title, index) => 
                <motion.p
                  key={index}
                  variants={fadeInV2}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                  className="text-[16px] pt-[6px] font-normal"
                >
                  {title}
                </motion.p>
              )}
            </div>
            {/* Header buttons */}
            <div className="flex flex-wrap pt-[14px] items-start gap-[8px] w-full">
              <motion.div
                variants={fadeUpHeaderBTN1}
                initial="hidden"
                animate="visible"
              >
                <Button className="flex h-9 px-3 sm:px-4 items-center gap-[6px] rounded-md bg-black text-white text-[12px] cursor-pointer font-medium hover:bg-gray-900 transition">
                  <Calendar className="w-4 h-4 text-white" />
                  <span>Schedule a Call</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </Button>
              </motion.div>

              <motion.div
                variants={fadeUpHeaderBTN2}
                initial="hidden"
                animate="visible"
              >
                <Button className="flex h-9 px-3 sm:px-4 items-center gap-[6px] rounded-md bg-white text-black text-[12px] cursor-pointer font-medium border border-gray-300 hover:bg-gray-100 transition">
                  <Mail className="w-4 h-4 text-black" />
                  <span>Send Email</span>
                </Button>
              </motion.div>

              <motion.div
                variants={fadeUpHeaderBTN3}
                initial="hidden"
                animate="visible"
              >
                <Button className="flex h-9 px-3 sm:px-4 items-center gap-[6px] rounded-md bg-white text-black text-[12px] cursor-pointer font-medium border border-gray-300 hover:bg-gray-100 transition">
                  <Download className="w-4 h-4 text-black" />
                  <span>Download Resume</span>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              ease: "easeInOut",
              duration: 0.5,
              delay: 1.0  // Increased from 0.8
            }}
            className="absolute inset-0 border border-gray-200 rounded-md"
          />
          <div className="flex w-full p-[16px] sm:p-[18px] flex-col items-start gap-2 relative z-10 rounded-md transition-shadow hover:shadow-sm">
            {/* info icon and h3 */}
            <div className="flex items-center gap-[8px] w-full">
              <motion.div
                initial={{ filter: "blur(6px)", opacity: 0, y: -8 }}
                animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                transition={{ 
                  type: "spring",
                  duration: 0.7,
                  delay: 1.5  // Increased from 1.3
                }}
              >
                <Info className="w-[16px] h-[16px] text-gray-500" />
              </motion.div>
              <motion.h3
                initial={{ filter: "blur(6px)", opacity: 0, y: -8 }}
                animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                transition={{ 
                  type: "spring",
                  duration: 0.7,
                  delay: 1.6  // Increased from 1.4
                }}
                className="text-[16px] sm:text-[18px] font-semibold"
              >
                Intro
              </motion.h3>
            </div>
            {/* info details */}
            <div className="flex flex-col items-start gap-[16px] sm:gap-[22.4px] w-full">
              <div className="flex flex-row flex-wrap gap-x-1">
                {info1Words.map((infoWord, index) => 
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, filter: "blur(3px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ 
                      type: "spring",
                      duration: 0.7,
                      delay: 1.7 + (index * 0.04)  // Increased from 1.5
                    }}
                    className="text-[14px] sm:text-sm font-normal text-black"
                  >
                    {infoWord}
                  </motion.p>
                )}
              </div>
              <div className="flex flex-row flex-wrap gap-x-1">
                {info2Words.map((infoWord, index) => 
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, filter: "blur(3px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ 
                      type: "spring",
                      duration: 0.7,
                      delay: 1.7 + (info1Words.length * 0.04) + (index * 0.04)  // Increased from 1.5
                    }}
                    className="text-[14px] sm:text-sm font-normal text-black"
                  >
                    {infoWord}
                  </motion.p>
                )}
              </div>
              <div className="flex flex-row flex-wrap gap-x-1">
                {info3Words.map((infoWord, index) => 
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, filter: "blur(3px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ 
                      type: "spring",
                      duration: 0.7,
                      delay: 1.7 + (info1Words.length * 0.04) + (info2Words.length * 0.04) + (index * 0.04)  // Increased from 1.5
                    }}
                    className="text-[14px] sm:text-sm font-normal text-black"
                  >
                    {infoWord}
                  </motion.p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* About, services, projects, and contact */}
        <div className="relative mt-6 sm:mt-9">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              ease: "easeInOut",
              duration: 0.5,
              delay: 2.2  // Added animation to Overview section
            }}
            className="absolute inset-0 border border-gray-200 rounded-md"
          />
          <div className="flex w-full p-[16px] sm:p-[18px] flex-col items-start gap-2 relative z-10 rounded-md transition-shadow hover:shadow-sm">
            <div className="flex items-center gap-[8px] w-full">
              <PanelsTopLeft className="w-[16px] h-[16px] text-gray-500" />
              <h3 className="text-[16px] sm:text-[18px] font-semibold">Overview</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full">
              <Button 
                variant="outline" 
                className="flex flex-col cursor-pointer justify-center items-center text-center gap-2 h-36 sm:h-40 border border-gray-300 rounded-md bg-white hover:shadow-md transition-shadow p-4 font-normal overflow-hidden"
                onClick={() => {/* Modal logic will go here */}}
              >
                <h4 className="text-[16px] font-semibold w-full">About Me</h4>
                <p className="text-[14px] text-black overflow-hidden line-clamp-3 w-full max-w-full">
                  Click me!!!
                </p>
              </Button>
              
              <Button 
                variant="outline" 
                className="flex flex-col cursor-pointer justify-center items-center text-center gap-2 h-36 sm:h-40 border border-gray-300 rounded-md bg-white hover:shadow-md transition-shadow p-4 font-normal overflow-hidden"
                onClick={() => {/* Modal logic will go here */}}
              >
                <h4 className="text-[16px] font-semibold w-full">Services</h4>
                <p className="text-[14px] text-black overflow-hidden line-clamp-3 w-full max-w-full">
                  Click me!!!
                </p>
              </Button>
              
              <Button
                variant="outline"
                className="flex flex-col cursor-pointer justify-center items-center text-center gap-2 h-36 sm:h-40 border border-gray-300 rounded-md bg-white hover:shadow-md transition-shadow p-4 font-normal overflow-hidden"
                onClick={() => {/* Modal logic will go here */}}
              >
                <h4 className="text-[16px] font-semibold">Projects</h4>
                <p className="text-[14px] text-black overflow-hidden line-clamp-3">
                  Click me!!!
                </p>
              </Button>
              
              <Button
                variant="outline"
                className="flex flex-col cursor-pointer justify-center items-center text-center gap-2 h-36 sm:h-40 border border-gray-300 rounded-md bg-white hover:shadow-md transition-shadow p-4 font-normal overflow-hidden"
                onClick={() => {/* Modal logic will go here */}}
              >
                <h4 className="text-[16px] font-semibold">Contact</h4>
                <p className="text-[14px] text-black overflow-hidden line-clamp-3">
                  Click me!!!
                </p>
              </Button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="flex w-full flex-col px-4 py-4 sm:py-6 mt-6 sm:mt-12 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-2 sm:gap-0">
            <p className="text-[14px] font-normal text-black text-center sm:text-left">
              © 2025 Cris Justine K. Oracion. All rights reserved.
            </p>
            <a href="#" className="text-[14px] font-normal text-black">
              Feedback
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
