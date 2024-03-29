import React, { Fragment } from "react";

const SideBar = () => {
  return (
    <Fragment>
      <div className="navbar-vertical navbar">
        <div data-simplebar="init" style={{ maxHeight: "100vh" }}>
          <div className="simplebar-wrapper" style={{ margin: "0px" }}>
            <div className="simplebar-height-auto-observer-wrapper">
              <div className="simplebar-height-auto-observer"></div>
            </div>
            <div className="simplebar-mask">
              <div className="simplebar-offset" style={{ right: "0px", bottom: "0px" }}>
                <div
                  className="simplebar-content-wrapper"
                  tabIndex="0"
                  role="region"
                  aria-label="scrollable content"
                  style={{ height: "auto", overflow: "hidden" }}
                >
                  <div className="simplebar-content" style={{ padding: "0px" }}>
                    <div className="nav-scroller">
                      <a className="navbar-brand" href="/">
                        <img src="/images/brand/logo/logo.svg" alt="" className="" />
                      </a>
                    </div>
                    <ul className="navbar-nav flex-column accordion">{/* Your list items */}</ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="simplebar-placeholder" style={{ width: "249px", height: "616px" }}></div>
          </div>
          <div className="simplebar-track simplebar-horizontal" style={{ visibility: "hidden" }}>
            <div className="simplebar-scrollbar" style={{ width: "0px", display: "none" }}></div>
          </div>
          <div className="simplebar-track simplebar-vertical" style={{ visibility: "hidden" }}>
            <div className="simplebar-scrollbar" style={{ height: "0px", display: "none" }}></div>
          </div>
        </div>
      </div>{" "}
    </Fragment>
  );
};

export default SideBar;
