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
    <div className="container flex flex-col items-center justify-center min-h-screen py-10 px-4 animate-slidein text-red-50">
      <div className="max-w-4xl bg-lime-900 shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <h6 className="container text-pretty text-xl sevillana-regular font-medium animate-slidein">
          A Full-Stack Developer have a exposure to building professional
          websites and front-end applications. My skills in FrontEnd
          Technologies as React.js, Redux, JavaScript, HTML, CSS, Material-UI,
          Flexbox, Grid, GitHub for web-based applications. I am a learner and
          enthusiastic to learn new tech.
        </h6>

        {/* Services Section */}
        <section className="mb-6 mt-12">
          <h2 className="text-2xl font-semibold mb-3">What We Offer</h2>
          <ul className="list-disc list-inside text-yellow-50">
            {Skills.map((data, idx) => (
              <li key={idx}>{data.content}</li>
            ))}
          </ul>
        </section>

        <h6 className="container text-yellow-50 mb-10 font-medium">
          Ability to understand business requirements and translate them into
          technical requirements.
          <br /> Familiarity with common tools such as Git, Github, VS-Code and
          Thunder-Client and Apollo Server.
        </h6>
        {/* Section for Download Resume */}
        <button className="text-xl text-teal-50 p-2 roboto-serif-font font-medium mt-10 border-2 bg-red-800 rounded-md">
          <a href="./Karan_Kumar.pdf" download="./Karan_Kumar.pdf">
            Let's connect | Resume
          </a>{" "}
        </button>
        {/* Section for Social Icon */}
        <div className="container">
          <SocialIcon />
        </div>
      </div>
    </div>
  );
};

export default Contact;
