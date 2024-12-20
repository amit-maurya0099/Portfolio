import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Certifications = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-3xl md:text-4xl font-bold">Certificates</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Enhance reactive application with advanced react"
            subTitle="Infosys-(june-2024)"
            result={<a href="https://drive.google.com/file/d/1udgxF7V60K95RY_r8W8mlnPjck5C7Rrt/view">Link</a>}
            des="This course helped me in gaining in-depth knowledge of advanced React concepts like hooks, context API, performance optimization, and state management. This has enhanced my ability to build scalable and responsive web applications efficiently."
          />
          <ResumeCard
            title="MongoDB Node.js Developer Path for SmartBridge"
            subTitle="MongoDB-(August,2024)"
            result={<a href="https://drive.google.com/file/d/1oofhHv6Gp2o78RN_QhQluxp5w2-Z4jFg/view">Link</a>}
            des=" This course enhanced my skills in using MongoDB with Node.js, covering database modeling, querying, and integration, enabling me to develop robust backend solutions for modern web applications."
          />
          <ResumeCard
            title="Full Stack Development Virtual Internship"
            subTitle="SmartInternz(july-Sept, 2024)"
            result={<a href="https://drive.google.com/file/d/1ukadcOOpd9CtaHTaz3gXq6yuoIymKQRV/view">Link</a>}
            des="This internship enhanced my skills in front-end and back-end development, database management, and deploying full-stack solutions, preparing me for real-world projects."
          />
        </div>
      </div>
     
    </motion.div>
  );
};

export default Certifications;
