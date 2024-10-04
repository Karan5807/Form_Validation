import React from "react";

const Footer = () => {
  return (
    <footer className="bg-violet-300 text-white">
      <div className="container m-2 p-2">
        <div className="text-center">
          <h4 className="p-1 font-sans font-medium text-xl">
            Made with &#10084; by Karan Singh
          </h4>
          <p className="text-sm font-medium">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
