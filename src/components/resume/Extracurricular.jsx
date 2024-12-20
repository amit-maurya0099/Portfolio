import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Extracurricular = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
         
          <h2 className="text-3xl md:text-4xl font-bold">Extracurricular Activities</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Society of Automotive Engineers"
            subTitle="Executive Member "
            result="2022-2024"
            des="Led different events including academic seminars, cultural festivals, workshops and demonstrating strong organizational skills and also organized annual Technical Fest 'TechSrijan' of our University."
          />
           <ResumeCard
            title="Flipkart Grid 6.0 Participation"
            subTitle="Member(2024) "
            result={<a href="https://drive.google.com/file/d/1RuuLYcO0pXSK6cRogzox7j75Bsf7SmGw/view?usp=sharing">Link</a>}
            des="I participated in Flipkart Grid 6.0, a prestigious national-level hackathon organized by Flipkart. The competition was aimed at fostering innovation and solving real-world problems through creative and technical solutions"
          />
             <ResumeCard
            title="Tata Imagination Challenge Participation"
            subTitle="2023"
            result={<a href="https://drive.google.com/file/d/1RwwrBInbpq9kAr_tbJaMQWg-BLfBuSWZ/view?usp=sharing">Link</a>}
            des="I had the privilege of participating in the Tata Imagination Challenge, a unique competition aimed at inspiring and nurturing innovative ideas that address real-world challenges"
          />
          
        </div>
      </div>
     
    </motion.div>
  );
};

export default Extracurricular;
