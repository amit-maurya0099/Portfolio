import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,projectFive,projectFour } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Hospital Management System"
          des="A comprehensive web application for managing patient records, appointments, and staff details efficiently. Includes authentication, role-based access, and user-friendly dashboards for seamless hospital operations and patient care"
          src={projectOne}
          github={"https://github.com/amit-maurya0099/Hospital-Management-System"}
          deployed={"https://hospital-management-system-psi-brown.vercel.app"}
        />
        <ProjectsCard
          title="E-commerce Platform"
          des="  A feature-rich online shopping platform offering product search, secure payment gateway integration, user authentication, and a seamless shopping cart experience. Built for scalability and optimized for modern e-commerce needs"
          src={projectTwo}
          github={"https://github.com/amit-maurya0099/E-Commerce_deployed"}
          deployed={"https://e-commerce-frontend-topaz-five.vercel.app"}
        />
        <ProjectsCard
          title="Netflix-Gemini"
          des="A React-based Netflix replica featuring core functionalities, unique enhancements, responsive design, state management, and API integration for an exceptional user experience showcasing modern web development practices"
          src={projectThree}
          github={"https://github.com/amit-maurya0099/Netflix_Gemini"}
          deployed={"https://netflix-gemini-seven.vercel.app/"}
        />
        <ProjectsCard
          title="Youtube Clone"
          des=" YouTube Clone is a web application that replicates the core features of YouTube, allowing users to search, watch and share videos . This project is built using modern web technologies to provide a familiar and user-friendly experience"
          src={projectFour}
          deployed={"https://youtubeclone-ph4d-amit-mauryas-projects-4ea5de61.vercel.app"}
          github={"https://github.com/amit-maurya0099/Youtube_Clone"}
        />
        <ProjectsCard
          title="Text-Utils"
          des=" This app is basically a text modifier app developed with HTML,CSS,Javascript . It is an interactive text modifier that supports basic editing functions which can be useful in various applications."
          src={projectFive}
          github={"https://github.com/amit-maurya0099/Text_Utils"}
          deployed={"https://text-utils-five-rho.vercel.app"}
        />
        
      </div>
    </section>
  );
}

export default Projects