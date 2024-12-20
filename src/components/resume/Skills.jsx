import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { name: "HTML 5", percentage: 90 },
    { name: "CSS", percentage: 85 },
    { name: "Tailwind CSS", percentage: 85 },
    { name: "Javascript", percentage: 80 },
    { name: "React", percentage: 80 },
  ];

  const additionalSkills = [
    { name: "MongoDB", percentage: 85 },
    { name: "Express", percentage: 80 },
    { name: "Node.js", percentage: 80 },
    { name: "C++", percentage: 75 },
    { name: "Data Structures & Algorithm", percentage: 60 },
  ];

  const renderSkills = (skillsArray) => {
    return skillsArray.map((skill, index) => (
      <div className="overflow-x-hidden" key={index}>
        <p className="text-sm uppercase font-medium">{skill.name}</p>
        <div className="w-full relative">
          <span className="w-full h-2 bg-opacity-50 bg-gray-300 rounded-md inline-flex mt-2">
            <motion.span
              initial={{ width: "0%", opacity: 0 }}
              animate={{ width: `${skill.percentage}%`, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
            >
              <span className="absolute -top-7 right-0 text-sm">{skill.percentage}%</span>
            </motion.span>
          </span>
        </div>
      </div>
    ));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-10"
    >
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">Features</p>
          <h2 className="text-3xl md:text-4xl font-bold">Development Skill</h2>
        </div>
        <div className="flex flex-col gap-6">{renderSkills(skills)}</div>
      </div>

      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">Features</p>
          <h2 className="text-3xl md:text-4xl font-bold">Development Skill</h2>
        </div>
        <div className=" w-full flex flex-col gap-6">
          {renderSkills(additionalSkills)}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
