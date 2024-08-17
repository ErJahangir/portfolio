import Link from "next/link";
import React from "react";

const Project = () => {
  const data = [
    {
      id: 1,
      Name: "PG Life",
      description:
        "PG Life is a Full-Stack Web Application. This is a project that I was assigned to make during my Internshala Full Stack Web Development Internship Training. got the guidance, and following that I made this web application with my own understanding and knowledge. It is customized according to what I thought would be better functionalities in this app, from the user perspective",
      button: "GitHub",
    },
    {
      id: 2,
      Name: "Grochouse Application",
      description:
        "The Grochouse Mobile Application, developed with React Native, enhances the grocery shopping experience through seamless navigation, efficient FlatList rendering, and custom modals. Utilizing library stylesheets for consistent design and robust API integration for real-time updates, the app ensures fresh and relevant content. Comprehensive API testing guarantees reliable and secure data transactions.",
      button: "GitHub",
    },
    {
      id: 1,
      Name: "PG Life",
      description:
        "PG Life is a Full-Stack Web Application. This is a project that I was assigned to make during my Internshala Full Stack Web Development Internship Training. got the guidance, and following that I made this web application with my own understanding and knowledge. It is customized according to what I thought would be better functionalities in this app, from the user perspective",
      button: "GitHub",
    },
    {
      id: 2,
      Name: "Grochouse Application",
      description:
        "The Grochouse Mobile Application, developed with React Native, enhances the grocery shopping experience through seamless navigation, efficient FlatList rendering, and custom modals. Utilizing library stylesheets for consistent design and robust API integration for real-time updates, the app ensures fresh and relevant content. Comprehensive API testing guarantees reliable and secure data transactions.",
      button: "GitHub",
    },
  ];

  return (
    <div id="Project" className="w-[95%] mx-auto flex flex-col items-center">
      <h2>My Recent Works</h2>
      <h4>Projects</h4>
      <div className="flex flex-wrap gap-2 mx-auto w-full">
        {data.map((item) => (
          <Link
            href="/"
            key={item.id}
            className="w-[400px] mx-auto hover:shadow-lg rounded-3xl p-5 bg-[#228192] border duration-1000  hover:bg-transparent"
          >
            <h3>{item.Name}</h3>
            <p className="text-justify mb-5">{item.description}</p>
            <Link
              href="/"
              className="border p-2 px-3 rounded-lg bg-[#172d33] font-serif hover:bg-transparent duration-1000  hover:shadow-md hover:border-green-800"
            >
              {item.button}
            </Link>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Project;
