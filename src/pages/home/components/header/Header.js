import React from "react";

export default function Header() {
  return (
    <div>
      <header id="main-navigation">
        <div id="navigation" data-spy="affix" data-offset-top="20">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <nav className="navbar navbar-default">
                  <div className="navbar-header">
                    <button
                      type="button"
                      className="navbar-toggle collapsed"
                      data-toggle="collapse"
                      data-target="#fixed-collapse-navbar"
                      aria-expanded="false"
                    >
                      <span className="icon-bar top-bar"></span>{" "}
                      <span className="icon-bar middle-bar"></span>{" "}
                      <span className="icon-bar bottom-bar"></span>
                    </button>
                    <a className="navbar-brand" href="index.html">
                      <img
                        src="images/logo.png"
                        alt="logo"
                        className="img-responsive"
                      ></img>
                    </a>
                  </div>

                  <div
                    id="fixed-collapse-navbar"
                    className="navbar-collapse collapse navbar-right"
                  >
                    <ul className="nav navbar-nav">
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li>
                        <a href="food.html">Our Food</a>
                      </li>

                      <li>
                        <a href="about.html">About Us</a>
                      </li>
                      <li>
                        <a href="faq.html">FAQ</a>
                      </li>

                      <li>
                        <a href="./account/register.php">Order Now</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
