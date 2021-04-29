import React from "react";

import "./Welcome.css";

export default function Index() {
  return (
    <div id="banner" className="banner full-screen-mode parallax">
      <div className="container1">
        <div className="">
          <div className="banner-static">
            <div className="banner-text">
              <div className="banner-cell">
                <h1>Cook with us!</h1>

                <h2>Was Coincidence </h2>
                <a href="#about">
                  <div className=""></div>
                  <div className="book-btn">
                    <a href="/home" className="">
                      Let's start
                    </a>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
