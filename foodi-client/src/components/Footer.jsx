import React from "react";


const Footer = () => {

    

  return (
    <div>
      <footer className="footer xl:px-24 py-10 px-4 text-base-content">
        <aside>
          <img src="/logo.png" alt="" />
          <p className="my-3 md:w-40">
            Savor the artistry where every dish is a culinary masterpiece
          </p>
        </aside>
        
        <nav>
          <header className="footer-title">Main Menu</header>
          <a className="link link-hover" href="/">Home</a>
          <a className="link link-hover" href="/menu">Menu</a>
        </nav>
        <nav>
          <header className="footer-title">Contact Us</header>
          <a className="link link-hover">hotelsanjwara@email.com</a>
          <a className="link link-hover">+91 9689300093</a>
          <a className="link link-hover" >Social media</a>
        </nav>
      </footer>
        <hr />
      
    </div>
  );
};

export default Footer;
