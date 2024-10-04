import React from "react";

const Home = () => {
  return (
    <div className="container text-white top-40">
      {/* Section one */}
      <div className="container m-4 p-4 rounded-md border-white font-sans">
        <h1 className="text-center m-2 text-7xl font-semibold subpixel-antialiased tracking-wide">
          Build <span className="text-orange-500 animate-ping">Amazing</span>{" "}
          Web Apps With MERN Stack
        </h1>
        <h1 className="text-center mt-2 text-7xl font-semibold subpixel-antialiased tracking-wide">
          An Anspiring AI/ML Engineer
        </h1>
      </div>

      {/* Section 2 */}
      <div className="container border-box flex justify-center  mt-20">
        <div className="container w-[550px] text-left text-lg font-medium animate-slidein m-4">
          👋 Hi there, I'm Karan! I'm a results-driven MERN stack developer with
          a passion for building cutting-edge web applications that make an
          impact. I've honed my skills in MongoDB, Express.js, React.js, and
          Node.js to deliver high-quality solutions tailored to meet specific
          user needs. With a strong foundation in full-stack development, I
          thrive in environments that challenge me to continuously learn and
          innovate.
        </div>
      </div>
    </div>
  );
};

export default Home;
