"use client"
import React from 'react'

const ToggleButton = () => {
    const handleToggle = () => {
        const htmlElement = document.documentElement;
        if (htmlElement.classList.contains('navbar-vertical-collapsed')) {
            htmlElement.classList.remove('navbar-vertical-collapsed');
            // setIsCollapsed(false);
        } else {
            htmlElement.classList.add('navbar-vertical-collapsed');
            // setIsCollapsed(true);
        }
        console.log('toggle clicked');
        // toggle the menu open or closed
    }
    return (
        <div className="toggle-icon-wrapper">
            <button
                className="btn navbar-toggler-humburger-icon navbar-vertical-toggle"
                data-bs-toggle="tooltip"
                data-bs-placement="left"
                aria-label="Toggle Navigation"
                onClick={handleToggle}
                data-bs-original-title="Toggle Navigation"
            >
                <span className="navbar-toggle-icon">
                    <span className="toggle-line" />
                </span>
            </button>
        </div>
    )
}

export default ToggleButton