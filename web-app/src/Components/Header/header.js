import React, { Component } from "react";
import $ from 'jquery';
import "./header.css";


class Header extends Component {
  state = {
    menuItems: [
      {
        Title: "HOME",RouteURLPart: "#",ClassName: "selected",
      },
      {
        Title: "SHOP",RouteURLPart: "#",ClassName: "not-selected",
      },
      {
        Title: "LEARN",RouteURLPart: "#",ClassName: "not-selected",
      },
      {
        Title: "ARTISTS",RouteURLPart: "#",ClassName: "not-selected",
      }
    ]
  };

  selectMenuItem(menuItemName) {
    var items = this.state.menuItems;
    for (var i = 0; i < items.length; i++) {
      if(items[i].Title == menuItemName){
        items[i].ClassName = "selected";
      }else{
        items[i].ClassName = "not-selected";
      }
    }
    
    this.setState({
      menuItems:items  
    })
  }

  render() {
    return (
      <header className="header-fixed">
        <div className="header-limiter">
          <h1>
            <a href="#">
              Art<span>Gallery</span>
            </a>
          </h1>
          <nav>
            {this.state.menuItems.map((item) => (
              <a
                key={item.Title}
                href={item.RouteURLPart}
                className={item.ClassName}
                onClick={() => this.selectMenuItem(item.Title)}
              >
                {item.Title}
              </a>
            ))}
          </nav>
        </div>
      </header>
    );
  }

  componentDidMount() {
    $(document).ready(function () {
      var showHeaderAt = 150;

      var win = $(window),
        body = $("body");

      // Show the fixed header only on larger screen devices
      if (win.width() > 600) {
        // When we scroll more than 150px down, we set the
        // "fixed" class on the body element.

        win.on("scroll", function (e) {
          if (win.scrollTop() > showHeaderAt) {
            body.addClass("fixed");
          } else {
            body.removeClass("fixed");
          }
        });
      }
    });
  }
}

export default Header;
