"use client"
import React, { Suspense } from 'react'
import { SidemenuSection } from './SidemenuSection'

const SidebarLayout = ({ children }) => {

    const handleMouseEnter = (e) => {
        const htmlElement = document.documentElement;
        if (!htmlElement.classList.contains('navbar-vertical-collapsed')) {
            return;
        }
        if (htmlElement.classList.contains('navbar-vertical-collapsed-hover')) {
            htmlElement.classList.remove('navbar-vertical-collapsed-hover');
            // setIsCollapsed(false);
        } else {
            htmlElement.classList.add('navbar-vertical-collapsed-hover');
            // setIsCollapsed(true);
        }
    };

    const handleMouseLeave = (e) => {
        const htmlElement = document.documentElement;
        if (!htmlElement.classList.contains('navbar-vertical-collapsed')) {
            return;
        }
        if (htmlElement.classList.contains('navbar-vertical-collapsed-hover')) {
            htmlElement.classList.remove('navbar-vertical-collapsed-hover');
            // setIsCollapsed(false);
        }
    }

    return (
        <div className="collapse navbar-collapse" id="navbarVerticalCollapse" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="navbar-vertical-content scrollbar">
                <ul className="navbar-nav flex-column mb-3" id="navbarVerticalNav">
                    {children}
                </ul>
                <div className="settings my-3">
                    <div className="card shadow-none">
                        <div className="card-body alert mb-0" role="alert">
                            <div className="btn-close-falcon-container">
                                <button
                                    className="btn btn-link btn-close-falcon p-0"
                                    aria-label="Close"
                                    data-bs-dismiss="alert"
                                    fdprocessedid="0g2qof"
                                />
                            </div>
                            <div className="text-center">
                                <img
                                    src="/img/icons/spot-illustrations/navbar-vertical.png"
                                    alt=""
                                    width={80}
                                />
                                <p className="fs-11 mt-2">
                                    Loving what you see? <br />
                                    Get your copy of <a href="#!">Falcon</a>
                                </p>
                                <div className="d-grid">
                                    <a
                                        className="btn btn-sm btn-primary"
                                        href="https://themes.getbootstrap.com/product/falcon-admin-dashboard-webapp-template/"
                                        target="_blank"
                                    >
                                        Purchase
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidebarLayout