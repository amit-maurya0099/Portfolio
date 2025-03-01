import React from 'react'
import Title from '../layouts/Title';
import Card from './Card';
import { ImHtmlFive } from "react-icons/im";
import { IoLogoCss3 } from "react-icons/io5";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { SiSocketdotio } from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";
import { SiMysql } from "react-icons/si";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Skills" des="What I Know" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="HTML"
          icon={<ImHtmlFive/>}
          des={"Crafting the foundation of web pages with clean, semantic markup to ensure accessibility and proper document structure."}
          
         
        />
        <Card
          title="CSS"
          des={"Designing visually appealing, responsive layouts and animations to enhance user experience across different devices and screen sizes."}
        
          icon={<IoLogoCss3 />}
        />
        <Card
          title="Javascript"
          des={"Implementing dynamic functionalities and interactivity for engaging user interfaces and improving overall web application performance."}
          icon={<SiJavascript />}
        />
        <Card
          title="React"
          des={"Developing robust, reusable UI components and efficiently managing state for scalable, high-performance single-page applications."}
          icon={<FaReact />}
        />
        <Card
          title="MongoDB"
          des="Managing large-scale, flexible data storage with NoSQL database solutions for modern, high-performance web applications"
          icon={<SiMongodb/>}
          
        />
        <Card
          title="Node.js"
          des="Building scalable server-side solutions using JavaScript for handling APIs, real-time interactions, and backend operations efficiently."
          icon={<FaNode />}
        />
        <Card
          title="Express.js"
          des=" Creating lightweight, modular web server frameworks to build RESTful APIs and backend logic with ease and scalability."
          icon={<SiExpress />}
        />
        <Card
          title="C++"
          des="Solving complex problems with a focus on performance and efficiency using object-oriented programming concepts and robust algorithms."
          icon={<TbBrandCpp/>}
        />
        <Card
          title="Tailwind CSS"
          des="Streamlining UI development with utility-first classes for creating modern, responsive, and consistent designs quickly and effectively"
          icon={<SiTailwindcss />}
        />
        <Card
          title="Websocket(Socket.io)"
          des="WebSockets enable real-time, full-duplex communication between a client and a server over a single, persistent connection."
          icon={<SiSocketdotio />}
        />
           <Card
          title="SQL"
          des="SQL (Structured Query Language) is used to manage and manipulate relational databases by performing operations like querying, updating, inserting, and deleting data."
          icon={<BsFiletypeSql />}
        />
           <Card
          title="MySQL"
          des="MySQL is an open-source relational database management system (RDBMS) known for its speed, reliability, and scalability."
          icon={<SiMysql />}
        />
      </div>
    </section>
  );
}

export default Features;