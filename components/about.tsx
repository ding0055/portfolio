"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I believe in the power of technology to transform lives and businesses.
        My goal is to create solutions that not only meet technical requirements
        but also enhance <span className="font-medium">user experience</span>{" "}
        and <span className="font-medium">accessibility</span>. I am a{" "}
        <span className="font-medium">lifelong learner</span>, always eager to
        explore new technologies and methodologies to stay at the forefront of
        the industry. My core stack is{" "}
        <span className="font-medium">
          React, Next.js, Node.js and RESTful API
        </span>
        . I am also familiar with TypeScript and Azure. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        computer games, watching movies. I'm also a{" "}
        <span className="font-medium">Weekend Angler</span> and really enjoy
        spending time on the water with my family and friends.
      </p>
    </motion.section>
  );
}
