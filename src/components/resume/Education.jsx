import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007-2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.tech in Electronics & Communication Engineering"
            subTitle="Madan Mohan Malaviya University of Technology (2021-25)"
            result="8.05/10"
            des="MMMUT is renowned for academic excellence, innovation, and vibrant campus life. Offering diverse programs and fostering holistic development, it provided me with theoretical knowledge, practical skills, and leadership opportunities, shaping my professional and personal growth."
          />
          <ResumeCard
            title="Intermediate"
            subTitle="ABS International School"
            result="93.2%"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="High School"
            subTitle="ABS International School"
            result="88%"
            des="During my high school years, I developed strong analytical and problem-solving skills while actively participating in cultural and sports events. The disciplined and supportive environment helped shape my values and build a strong foundation for my higher education and career goals."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2024-current</p>
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full Stack Developer (Virtual internship program)"
            subTitle="SmartInternz (july 2024 - Sept 2024)"
            result={<a href="https://drive.google.com/file/d/1ukadcOOpd9CtaHTaz3gXq6yuoIymKQRV/view">Virtual</a>}
            des="Engineered and sustained full-stack web applications leveraging Node.js, React, and MongoDB; completed feature-rich projects within tight deadlines while collaborating closely in a fast-paced agile environment under expert mentorship"
          />
         
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
