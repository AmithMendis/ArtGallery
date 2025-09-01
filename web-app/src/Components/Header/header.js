import React, { useState, useEffect } from "react";
import "./header.css";

const Header = () => {
  const [menuItems, setMenuItems] = useState([
    { Title: "HOME", RouteURLPart: "#", ClassName: "selected" },
    { Title: "SHOP", RouteURLPart: "#", ClassName: "not-selected" },
    { Title: "LEARN", RouteURLPart: "#", ClassName: "not-selected" },
    { Title: "ARTISTS", RouteURLPart: "#", ClassName: "not-selected" }
  ]);

  const selectMenuItem = (menuItemName) => {
    setMenuItems((items) =>
      items.map((item) =>
        item.Title === menuItemName
          ? { ...item, ClassName: "selected" }
          : { ...item, ClassName: "not-selected" }
      )
    );
  };

  useEffect(() => {
    const showHeaderAt = 150;
    const handleScroll = () => {
      if (window.scrollY > showHeaderAt) {
        document.body.classList.add("fixed");
      } else {
        document.body.classList.remove("fixed");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header-fixed">
      <div className="header-limiter">
        <h1>
          <a href="#">
            Art<span>Gallery</span>
          </a>
        </h1>
        <nav>
          {menuItems.map((item) => (
            <a
              key={item.Title}
              href={item.RouteURLPart}
              className={item.ClassName}
              onClick={() => selectMenuItem(item.Title)}
            >
              {item.Title}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
