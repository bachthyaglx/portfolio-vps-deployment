import React from "react";

const Footer: React.FC = () => (
  // Footer
  <div className="header-footer-bg">
    <footer className="flex flex-col items-center">
      <div className="flex text-white text-center p-5">&copy; {new Date().getFullYear()} All rights reserved.</div>
    </footer>
  </div>
);

export default Footer;