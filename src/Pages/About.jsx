import React from "react";
const Contact = () => {
  const Skills = [
    {
      content:
        "Strong proficiency in JavaScript and the JavaScript object model.",
    },
    {
      content: "In-depth understanding of React.js and its core principles.",
    },
    {
      content: "Experience with popular React.js workflows (Redux).",
    },
    {
      content: "Experience with React Hooks.",
    },
    {
      content: "Knowledge of server-side rendering.",
    },
    {
      content: "Familiarity with RESTful APIs and GraphQL.",
    },
    {
      content: "Knowledge of Typescript.",
    },
    {
      content: "Knowledge of Python and their libraries Pandas, MatplotLib",
    },
  ];

  const SocialIcon = () => {
    const Icons = [
      {
        icon: "./Icons/Github.svg",
        delay: 0,
        link: "https://github.com/Karan5807",
        name: "Github",
      },
      {
        icon: "./Icons/Linkedin.svg",
        delay: 0.5,
        link: "https://www.linkedin.com/in/karansingh07/",
        name: "Linkedin",
      },
      {
        icon: "./Icons/Instagram.svg",
        delay: 1,
        link: "https://www.instagram.com/__karansingh07__/",
        name: "Instagram",
      },
      {
        icon: "./Icons/Gmail.svg",
        delay: 1.5,
        link: "mailto:karancommunicate@gmail.com",
        name: "Email",
      },
      {
        icon: "./Icons/Leetcode.svg",
        delay: 1.5,
        link: "https://leetcode.com/u/Karan5807/",
        name: "Leetcode",
      },
    ];

    return (
      <div className="container text-white text-left text-lg font-medium mt-8 flex justify-center">
        <div className="container flex justify-around w-[20rem]">
          {Icons.map((icon, index) => (
            <a
              key={index}
              href={icon.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ animationDelay: `${icon.delay}s` }}
            >
              <img
                src={icon.icon}
                alt={icon.name}
                width={40}
                className="inset-0 group-hover:opacity-50"
              />
            </a>
          ))}
        </div>
      </div>
    );
  };

  return (
    <React.Fragment>
      <main className="container animate-slidein text-yellow-950">
        <h6 className="container text-pretty text-xl sevillana-regular font-semibold animate-slidein">
          A Full-Stack Developer have a exposure to building professional
          websites and front-end applications. My skills in FrontEnd
          Technologies as React.js, Redux, JavaScript, HTML, CSS, Material-UI,
          Flexbox, Grid, GitHub for web-based applications. I am a learner and
          enthusiastic to learn new tech.
        </h6>

        <div className="container mt-10">
          <div className="container">
            {Skills.map((data, idx) => (
              <p
                className="text-lg roboto-serif-font p-4 animate-slidein text-left"
                key={idx}
              >
                {data.content}
              </p>
            ))}
          </div>
        </div>

        <h6 className="text-lg roboto-serif-font font-medium mt-10">
          Ability to understand business requirements and translate them into
          technical requirements Familiarity with common tools such as Git,
          Github, VS-Code and Thunder-Client and Apollo Server.
        </h6>
        <button className="text-xl text-teal-50 p-2 roboto-serif-font font-medium mt-10 border-2 bg-red-800 rounded-md">
          <a href="./Karan_Kumar.pdf" download="./Karan_Kumar.pdf">
            Let's connect | Resume
          </a>{" "}
        </button>
        <div className="container">
          <SocialIcon />
        </div>
      </main>
    </React.Fragment>
  );
};

export default Contact;
