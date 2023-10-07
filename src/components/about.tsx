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
        After finishing Bornova Anadolu Lisesi I decided to study Computer Science at Sabancı University.
         I have always been a curious person so I had taught myself the fundamentals of coding years before university
         but I wanted to delve deeper and understand how computers work as well as learn to make my own software.
         During my university years I had the chance to take courses from the best professors in the country deepening my understanding of computers.
         Moreover, I interned at Orion Innovation which helped me convert my theoretical knowledge to practice. Currently, I am trying to improve myself
         in Web Development and I aspire to be a <span className="font-medium">Full Stack Developer</span>.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy playing
        video games, watching movies, and spending time with my family. I also enjoy reading about
        history and world politics.
      </p>
    </motion.section>
  );
}
