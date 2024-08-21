import Link from "next/link";
import React from "react";

const Project = () => {
  const data = [
    {
      id: 1,
      Name: "PG Life",
      description:
        "PG Life is a Full-Stack Web Application. This is a project that I was assigned to make during my Internshala Full Stack Web Development Internship Training. got the guidance, and following that I made this web application with my own understanding and knowledge. It is customized according to what I thought would be better functionalities in this app, from the user perspective",
      button: "https://github.com/ErJahangir/PG-LIfe-Application-",
    },
    {
      id: 2,
      Name: "Grochouse Application",
      description:
        "The Grochouse Mobile Application, developed with React Native, enhances the grocery shopping experience through seamless navigation, efficient FlatList rendering, and custom modals. Utilizing library stylesheets for consistent design and robust API integration for real-time updates, the app ensures fresh and relevant content. Comprehensive API testing guarantees reliable and secure data transactions.",
    },
    {
      id: 3,
      Name: "viracore.launchmysite.in",
      description:
        "Viracore is inter-linked network of individuals, groups, and societies around the world. Viracore provides the platform to communicate and know more about groups in the world. I used next js, javascript and tailwind CSS for developing this site. You can also check live project on click project name or can type to check.",

      live: "https://viracore.launchmysite.in/",
    },
    {
      id: 4,
      Name: "navniketan.launchmysite.in",
      description:
        "Shri nav niketan is higher secondary school. I worked on that site. I used next js, javascript and Tailwind CSS. And also connected it to CMS for backend or for API integration. You can also check live project on click project name or can type to check.",
      live: "https://navniketan.launchmysite.in/",
    },
    {
      id: 5,
      Name: "drumang.launchmysite.in",
      description:
        "Shri nav niketan is higher secondary school. I worked on that site. I used next js, javascript and Tailwind CSS. And also connected it to CMS for backend or for API integration. You can also check live project on click project name or can type to check.",
      live: "https://drumang.launchmysite.in/",
    },
  ];

  return (
    <div id="Project" className="w-[95%] mx-auto flex flex-col items-center">
      <h2 className="text-3xl uppercase">My Recent Works</h2>
      <h4 className="text-3xl uppercase border-b-2 mb-6">Projects</h4>
      <div className="flex flex-wrap gap-2 mx-auto w-full">
        {data.map((item) => (
          <Link
            href="/"
            key={item.id}
            className="w-[95%] md:w-[400px] mx-auto flex flex-col items-center justify-center hover:shadow-lg rounded-3xl p-5 bg-[#44447c] duration-[1500ms] hover:border  hover:bg-transparent"
          >
            <h3 className=" text-xl md:text-3xl mb-5">{item.Name}</h3>
            <p className="text-[15px] md:text-[20px] text-justify mb-5">
              {item.description}
            </p>
            <div className="flex flex-row gap-2">
              {item.button ? (
                <Link
                  href={item.button}
                  className="border p-2 px-3 rounded-lg bg-[#172d33] font-serif hover:bg-transparent duration-1000  hover:shadow-md hover:border-green-800"
                >
                  GitHub
                </Link>
              ) : null}
              {item.live ? (
                <Link
                  href={item.live}
                  className="border p-2 px-3 rounded-lg bg-[#172d33] font-serif hover:bg-transparent duration-1000  hover:shadow-md hover:border-green-800"
                >
                  Go Live
                </Link>
              ) : null}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Project;
