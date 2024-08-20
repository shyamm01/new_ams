"use client"
import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <nav className="navbar navbar-light navbar-glass navbar-top navbar-expand">
            <button
                className="btn navbar-toggler-humburger-icon navbar-toggler me-1 me-sm-3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarVerticalCollapse"
                aria-controls="navbarVerticalCollapse"
                aria-expanded="false"
                aria-label="Toggle Navigation"
            >
                <span className="navbar-toggle-icon">
                    <span className="toggle-line" />
                </span>
            </button>
            <a className="navbar-brand me-1 me-sm-3" href="index.html">
                <div className="d-flex align-items-center">
                    <Image
                        className="me-2"
                        src="/img/icons/spot-illustrations/falcon.png"
                        alt=""
                        height={40}
                        width={40}
                    />
                    <span className="font-sans-serif text-primary">falcon</span>
                </div>
            </a>
            <ul className="navbar-nav align-items-center d-none d-lg-block">
                <li className="nav-item">
                    <div className="search-box" data-list='{"valueNames":["title"]}'>
                        <form
                            className="position-relative"
                            data-bs-toggle="search"
                            data-bs-display="static"
                            aria-expanded="false"
                        >
                            <input
                                className="form-control search-input fuzzy-search"
                                type="search"
                                placeholder="Search..."
                                aria-label="Search"
                            />
                            <svg
                                className="svg-inline--fa fa-search fa-w-16 search-box-icon"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="search"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                data-fa-i2svg=""
                            >
                                <path
                                    fill="currentColor"
                                    d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                                />
                            </svg>
                            {/* <span class="fas fa-search search-box-icon"></span> Font Awesome fontawesome.com */}
                        </form>
                        <div
                            className="btn-close-falcon-container position-absolute end-0 top-50 translate-middle shadow-none"
                            data-bs-dismiss="search"
                        >
                            <button
                                className="btn btn-link btn-close-falcon p-0"
                                aria-label="Close"
                            />
                        </div>
                        <div className="dropdown-menu border font-base start-0 mt-2 py-0 overflow-hidden w-100">
                            <div
                                className="scrollbar list py-3"
                                style={{ maxHeight: "24rem" }}
                            >
                                <h6 className="dropdown-header fw-medium text-uppercase px-x1 fs-11 pt-0 pb-2">
                                    Recently Browsed
                                </h6>
                                <a
                                    className="dropdown-item fs-10 px-x1 py-1 hover-primary"
                                    href="app/events/event-detail.html"
                                >
                                    <div className="d-flex align-items-center">
                                        <svg
                                            className="svg-inline--fa fa-circle fa-w-16 me-2 text-300 fs-11"
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fas"
                                            data-icon="circle"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                            data-fa-i2svg=""
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"
                                            />
                                        </svg>
                                        {/* <span class="fas fa-circle me-2 text-300 fs-11"></span> Font Awesome fontawesome.com */}
                                        <div className="fw-normal title">
                                            Pages{" "}
                                            <svg
                                                className="svg-inline--fa fa-chevron-right fa-w-10 mx-1 text-500 fs-11"
                                                data-fa-transform="shrink-2"
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fas"
                                                data-icon="chevron-right"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 320 512"
                                                data-fa-i2svg=""
                                                style={{ transformOrigin: "0.3125em 0.5em" }}
                                            >
                                                <g transform="translate(160 256)">
                                                    <g transform="translate(0, 0)  scale(0.875, 0.875)  rotate(0 0 0)">
                                                        <path
                                                            fill="currentColor"
                                                            d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                                                            transform="translate(-160 -256)"
                                                        />
                                                    </g>
                                                </g>
                                            </svg>
                                            {/* <span class="fas fa-chevron-right mx-1 text-500 fs-11" data-fa-transform="shrink-2"></span> Font Awesome fontawesome.com */}{" "}
                                            Events
                                        </div>
                                    </div>
                                </a>
                                <a
                                    className="dropdown-item fs-10 px-x1 py-1 hover-primary"
                                    href="app/e-commerce/customers.html"
                                >
                                    <div className="d-flex align-items-center">
                                        <svg
                                            className="svg-inline--fa fa-circle fa-w-16 me-2 text-300 fs-11"
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fas"
                                            data-icon="circle"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                            data-fa-i2svg=""
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"
                                            />
                                        </svg>
                                        {/* <span class="fas fa-circle me-2 text-300 fs-11"></span> Font Awesome fontawesome.com */}
                                        <div className="fw-normal title">
                                            E-commerce{" "}
                                            <svg
                                                className="svg-inline--fa fa-chevron-right fa-w-10 mx-1 text-500 fs-11"
                                                data-fa-transform="shrink-2"
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fas"
                                                data-icon="chevron-right"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 320 512"
                                                data-fa-i2svg=""
                                                style={{ transformOrigin: "0.3125em 0.5em" }}
                                            >
                                                <g transform="translate(160 256)">
                                                    <g transform="translate(0, 0)  scale(0.875, 0.875)  rotate(0 0 0)">
                                                        <path
                                                            fill="currentColor"
                                                            d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                                                            transform="translate(-160 -256)"
                                                        />
                                                    </g>
                                                </g>
                                            </svg>
                                            {/* <span class="fas fa-chevron-right mx-1 text-500 fs-11" data-fa-transform="shrink-2"></span> Font Awesome fontawesome.com */}{" "}
                                            Customers
                                        </div>
                                    </div>
                                </a>
                                <hr className="text-200 dark__text-900" />
                                <h6 className="dropdown-header fw-medium text-uppercase px-x1 fs-11 pt-0 pb-2">
                                    Suggested Filter
                                </h6>
                                <a
                                    className="dropdown-item px-x1 py-1 fs-9"
                                    href="app/e-commerce/customers.html"
                                >
                                    <div className="d-flex align-items-center">
                                        <span className="badge fw-medium text-decoration-none me-2 badge-subtle-warning">
                                            customers:
                                        </span>
                                        <div className="flex-1 fs-10 title">
                                            All customers list
                                        </div>
                                    </div>
                                </a>
                                <a
                                    className="dropdown-item px-x1 py-1 fs-9"
                                    href="app/events/event-detail.html"
                                >
                                    <div className="d-flex align-items-center">
                                        <span className="badge fw-medium text-decoration-none me-2 badge-subtle-success">
                                            events:
                                        </span>
                                        <div className="flex-1 fs-10 title">
                                            Latest events in current month
                                        </div>
                                    </div>
                                </a>
                                <a
                                    className="dropdown-item px-x1 py-1 fs-9"
                                    href="app/e-commerce/product/product-grid.html"
                                >
                                    <div className="d-flex align-items-center">
                                        <span className="badge fw-medium text-decoration-none me-2 badge-subtle-info">
                                            products:
                                        </span>
                                        <div className="flex-1 fs-10 title">
                                            Most popular products
                                        </div>
                                    </div>
                                </a>
                                <hr className="text-200 dark__text-900" />
                                <h6 className="dropdown-header fw-medium text-uppercase px-x1 fs-11 pt-0 pb-2">
                                    Files
                                </h6>
                                <a className="dropdown-item px-x1 py-2" href="#!">
                                    <div className="d-flex align-items-center">
                                        <div className="file-thumbnail me-2">
                                            <Image
                                                className="border h-100 w-100 object-fit-cover rounded-3"
                                                src="/img/products/3-thumb.png"
                                                alt=""
                                                height={40}
                                                width={40}
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h6 className="mb-0 title">iPhone</h6>
                                            <p className="fs-11 mb-0 d-flex">
                                                <span className="fw-semi-bold">Antony</span>
                                                <span className="fw-medium text-600 ms-2">
                                                    27 Sep at 10:30 AM
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </a>
                                <a className="dropdown-item px-x1 py-2" href="#!">
                                    <div className="d-flex align-items-center">
                                        <div className="file-thumbnail me-2">
                                            <Image
                                                className="img-fluid"
                                                src="/img/icons/zip.png"
                                                alt=""
                                                height={40}
                                                width={40}
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h6 className="mb-0 title">Falcon v1.8.2</h6>
                                            <p className="fs-11 mb-0 d-flex">
                                                <span className="fw-semi-bold">John</span>
                                                <span className="fw-medium text-600 ms-2">
                                                    30 Sep at 12:30 PM
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </a>
                                <hr className="text-200 dark__text-900" />
                                <h6 className="dropdown-header fw-medium text-uppercase px-x1 fs-11 pt-0 pb-2">
                                    Members
                                </h6>
                                <a
                                    className="dropdown-item px-x1 py-2"
                                    href="pages/user/profile.html"
                                >
                                    <div className="d-flex align-items-center">
                                        <div className="avatar avatar-l status-online me-2">
                                            <Image
                                                className="rounded-circle"
                                                src="/img/team/1.jpg"
                                                alt=""
                                                height={40}
                                                width={40}
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h6 className="mb-0 title">Anna Karinina</h6>
                                            <p className="fs-11 mb-0 d-flex">Technext Limited</p>
                                        </div>
                                    </div>
                                </a>
                                <a
                                    className="dropdown-item px-x1 py-2"
                                    href="pages/user/profile.html"
                                >
                                    <div className="d-flex align-items-center">
                                        <div className="avatar avatar-l me-2">
                                            <Image
                                                className="rounded-circle"
                                                src="/img/team/2.jpg"
                                                alt=""
                                                height={40}
                                                width={40}
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h6 className="mb-0 title">Antony Hopkins</h6>
                                            <p className="fs-11 mb-0 d-flex">Brain Trust</p>
                                        </div>
                                    </div>
                                </a>
                                <a
                                    className="dropdown-item px-x1 py-2"
                                    href="pages/user/profile.html"
                                >
                                    <div className="d-flex align-items-center">
                                        <div className="avatar avatar-l me-2">
                                            <Image
                                                className="rounded-circle"
                                                src="/img/team/3.jpg"
                                                alt=""
                                                height={40}
                                                width={40}
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h6 className="mb-0 title">Emma Watson</h6>
                                            <p className="fs-11 mb-0 d-flex">Google</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="text-center mt-n3">
                                <p className="fallback fw-bold fs-8 d-none">
                                    No Result Found.
                                </p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <ul className="navbar-nav navbar-nav-icons ms-auto flex-row align-items-center">
                <li className="nav-item ps-2 pe-0">
                    <div className="dropdown theme-control-dropdown">
                        <a
                            className="nav-link d-flex align-items-center dropdown-toggle fa-icon-wait fs-9 pe-1 py-0"
                            href="#"
                            role="button"
                            id="themeSwitchDropdown"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            <svg
                                className="svg-inline--fa fa-sun fa-w-16 fs-7"
                                data-fa-transform="shrink-2"
                                data-theme-dropdown-toggle-icon="light"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="sun"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                data-fa-i2svg=""
                                style={{ transformOrigin: "0.5em 0.5em" }}
                            >
                                <g transform="translate(256 256)">
                                    <g transform="translate(0, 0)  scale(0.875, 0.875)  rotate(0 0 0)">
                                        <path
                                            fill="currentColor"
                                            d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"
                                            transform="translate(-256 -256)"
                                        />
                                    </g>
                                </g>
                            </svg>
                            {/* <span class="fas fa-sun fs-7" data-fa-transform="shrink-2" data-theme-dropdown-toggle-icon="light"></span> Font Awesome fontawesome.com */}
                            <svg
                                className="svg-inline--fa fa-moon fa-w-16 fs-7 d-none"
                                data-fa-transform="shrink-3"
                                data-theme-dropdown-toggle-icon="dark"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="moon"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                data-fa-i2svg=""
                                style={{ transformOrigin: "0.5em 0.5em" }}
                            >
                                <g transform="translate(256 256)">
                                    <g transform="translate(0, 0)  scale(0.8125, 0.8125)  rotate(0 0 0)">
                                        <path
                                            fill="currentColor"
                                            d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"
                                            transform="translate(-256 -256)"
                                        />
                                    </g>
                                </g>
                            </svg>
                            {/* <span class="fas fa-moon fs-7 d-none" data-fa-transform="shrink-3" data-theme-dropdown-toggle-icon="dark"></span> Font Awesome fontawesome.com */}
                            <svg
                                className="svg-inline--fa fa-adjust fa-w-16 fs-7 d-none"
                                data-fa-transform="shrink-2"
                                data-theme-dropdown-toggle-icon="auto"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="adjust"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                data-fa-i2svg=""
                                style={{ transformOrigin: "0.5em 0.5em" }}
                            >
                                <g transform="translate(256 256)">
                                    <g transform="translate(0, 0)  scale(0.875, 0.875)  rotate(0 0 0)">
                                        <path
                                            fill="currentColor"
                                            d="M8 256c0 136.966 111.033 248 248 248s248-111.034 248-248S392.966 8 256 8 8 119.033 8 256zm248 184V72c101.705 0 184 82.311 184 184 0 101.705-82.311 184-184 184z"
                                            transform="translate(-256 -256)"
                                        />
                                    </g>
                                </g>
                            </svg>
                            {/* <span class="fas fa-adjust fs-7 d-none" data-fa-transform="shrink-2" data-theme-dropdown-toggle-icon="auto"></span> Font Awesome fontawesome.com */}
                        </a>
                        <div
                            className="dropdown-menu dropdown-menu-end dropdown-caret border py-0 mt-3"
                            aria-labelledby="themeSwitchDropdown"
                        >
                            <div className="bg-white dark__bg-1000 rounded-2 py-2">
                                <button
                                    className="dropdown-item d-flex align-items-center gap-2 active"
                                    type="button"
                                    value="light"
                                    data-theme-control="theme"
                                >
                                    <svg
                                        className="svg-inline--fa fa-sun fa-w-16"
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="sun"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        data-fa-i2svg=""
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"
                                        />
                                    </svg>
                                    {/* <span class="fas fa-sun"></span> Font Awesome fontawesome.com */}
                                    Light
                                    <svg
                                        className="svg-inline--fa fa-check fa-w-16 dropdown-check-icon ms-auto text-600"
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="check"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        data-fa-i2svg=""
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                                        />
                                    </svg>
                                    {/* <span class="fas fa-check dropdown-check-icon ms-auto text-600"></span> Font Awesome fontawesome.com */}
                                </button>
                                <button
                                    className="dropdown-item d-flex align-items-center gap-2"
                                    type="button"
                                    value="dark"
                                    data-theme-control="theme"
                                >
                                    <svg
                                        className="svg-inline--fa fa-moon fa-w-16"
                                        data-fa-transform=""
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="moon"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        data-fa-i2svg=""
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"
                                        />
                                    </svg>
                                    {/* <span class="fas fa-moon" data-fa-transform=""></span> Font Awesome fontawesome.com */}
                                    Dark
                                    <svg
                                        className="svg-inline--fa fa-check fa-w-16 dropdown-check-icon ms-auto text-600"
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="check"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        data-fa-i2svg=""
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                                        />
                                    </svg>
                                    {/* <span class="fas fa-check dropdown-check-icon ms-auto text-600"></span> Font Awesome fontawesome.com */}
                                </button>
                                <button
                                    className="dropdown-item d-flex align-items-center gap-2"
                                    type="button"
                                    value="auto"
                                    data-theme-control="theme"
                                >
                                    <svg
                                        className="svg-inline--fa fa-adjust fa-w-16"
                                        data-fa-transform=""
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="adjust"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        data-fa-i2svg=""
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M8 256c0 136.966 111.033 248 248 248s248-111.034 248-248S392.966 8 256 8 8 119.033 8 256zm248 184V72c101.705 0 184 82.311 184 184 0 101.705-82.311 184-184 184z"
                                        />
                                    </svg>
                                    {/* <span class="fas fa-adjust" data-fa-transform=""></span> Font Awesome fontawesome.com */}
                                    Auto
                                    <svg
                                        className="svg-inline--fa fa-check fa-w-16 dropdown-check-icon ms-auto text-600"
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="check"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        data-fa-i2svg=""
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                                        />
                                    </svg>
                                    {/* <span class="fas fa-check dropdown-check-icon ms-auto text-600"></span> Font Awesome fontawesome.com */}
                                </button>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="nav-item d-none d-sm-block">
                    <a
                        className="nav-link px-0 notification-indicator notification-indicator-warning notification-indicator-fill fa-icon-wait"
                        href="app/e-commerce/shopping-cart.html"
                    >
                        <svg
                            className="svg-inline--fa fa-shopping-cart fa-w-18"
                            data-fa-transform="shrink-7"
                            style={{ fontSize: 33, transformOrigin: "0.5625em 0.5em" }}
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="shopping-cart"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                            data-fa-i2svg=""
                        >
                            <g transform="translate(288 256)">
                                <g transform="translate(0, 0)  scale(0.5625, 0.5625)  rotate(0 0 0)">
                                    <path
                                        fill="currentColor"
                                        d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
                                        transform="translate(-288 -256)"
                                    />
                                </g>
                            </g>
                        </svg>
                        {/* <span class="fas fa-shopping-cart" data-fa-transform="shrink-7" style="font-size: 33px;"></span> Font Awesome fontawesome.com */}
                        <span className="notification-indicator-number">1</span>
                    </a>
                </li>
                <li className="nav-item dropdown">
                    <a
                        className="nav-link notification-indicator notification-indicator-primary px-0 fa-icon-wait"
                        id="navbarDropdownNotification"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        data-hide-on-body-scroll="data-hide-on-body-scroll"
                    >
                        <svg
                            className="svg-inline--fa fa-bell fa-w-14"
                            data-fa-transform="shrink-6"
                            style={{ fontSize: 33, transformOrigin: "0.4375em 0.5em" }}
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="bell"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            data-fa-i2svg=""
                        >
                            <g transform="translate(224 256)">
                                <g transform="translate(0, 0)  scale(0.625, 0.625)  rotate(0 0 0)">
                                    <path
                                        fill="currentColor"
                                        d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"
                                        transform="translate(-224 -256)"
                                    />
                                </g>
                            </g>
                        </svg>
                        {/* <span class="fas fa-bell" data-fa-transform="shrink-6" style="font-size: 33px;"></span> Font Awesome fontawesome.com */}
                    </a>
                    <div
                        className="dropdown-menu dropdown-caret dropdown-caret dropdown-menu-end dropdown-menu-card dropdown-menu-notification dropdown-caret-bg"
                        aria-labelledby="navbarDropdownNotification"
                    >
                        <div className="card card-notification shadow-none">
                            <div className="card-header">
                                <div className="row justify-content-between align-items-center">
                                    <div className="col-auto">
                                        <h6 className="card-header-title mb-0">Notifications</h6>
                                    </div>
                                    <div className="col-auto ps-0 ps-sm-3">
                                        <a className="card-link fw-normal" href="#">
                                            Mark all as read
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="scrollbar-overlay"
                                style={{ maxHeight: "19rem" }}
                                data-simplebar="init"
                            >
                                <div className="simplebar-wrapper" style={{ margin: 0 }}>
                                    <div className="simplebar-height-auto-observer-wrapper">
                                        <div className="simplebar-height-auto-observer" />
                                    </div>
                                    <div className="simplebar-mask">
                                        <div className="simplebar-offset" style={{ right: 0, bottom: 0 }}>
                                            <div
                                                className="simplebar-content-wrapper"
                                                tabIndex={0}
                                                role="region"
                                                aria-label="scrollable content"
                                                style={{ height: "auto", overflow: "hidden" }}
                                            >
                                                <div className="simplebar-content" style={{ padding: 0 }}>
                                                    <div className="list-group list-group-flush fw-normal fs-10">
                                                        <div className="list-group-title border-bottom">NEW</div>
                                                        <div className="list-group-item">
                                                            <a
                                                                className="notification notification-flush notification-unread"
                                                                href="#!"
                                                            >
                                                                <div className="notification-avatar">
                                                                    <div className="avatar avatar-2xl me-3">
                                                                        <Image
                                                                            className="rounded-circle"
                                                                            src="/img/team/1-thumb.png"
                                                                            alt=""
                                                                            height={40}
                                                                            width={40}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="notification-body">
                                                                    <p className="mb-1">
                                                                        <strong>Emma Watson</strong> replied to your
                                                                        comment : "Hello world 😍"
                                                                    </p>
                                                                    <span className="notification-time">
                                                                        <span
                                                                            className="me-2"
                                                                            role="img"
                                                                            aria-label="Emoji"
                                                                        >
                                                                            💬
                                                                        </span>
                                                                        Just now
                                                                    </span>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="list-group-item">
                                                            <a
                                                                className="notification notification-flush notification-unread"
                                                                href="#!"
                                                            >
                                                                <div className="notification-avatar">
                                                                    <div className="avatar avatar-2xl me-3">
                                                                        <div className="avatar-name rounded-circle">
                                                                            <span>AB</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="notification-body">
                                                                    <p className="mb-1">
                                                                        <strong>Albert Brooks</strong> reacted to{" "}
                                                                        <strong>Mia Khalifa's</strong> status
                                                                    </p>
                                                                    <span className="notification-time">
                                                                        <svg
                                                                            className="svg-inline--fa fa-gratipay fa-w-16 me-2 text-danger"
                                                                            aria-hidden="true"
                                                                            focusable="false"
                                                                            data-prefix="fab"
                                                                            data-icon="gratipay"
                                                                            role="img"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            viewBox="0 0 496 512"
                                                                            data-fa-i2svg=""
                                                                        >
                                                                            <path
                                                                                fill="currentColor"
                                                                                d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm114.6 226.4l-113 152.7-112.7-152.7c-8.7-11.9-19.1-50.4 13.6-72 28.1-18.1 54.6-4.2 68.5 11.9 15.9 17.9 46.6 16.9 61.7 0 13.9-16.1 40.4-30 68.1-11.9 32.9 21.6 22.6 60 13.8 72z"
                                                                            />
                                                                        </svg>
                                                                        {/* <span class="me-2 fab fa-gratipay text-danger"></span> Font Awesome fontawesome.com */}
                                                                        9hr
                                                                    </span>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="list-group-title border-bottom">
                                                            EARLIER
                                                        </div>
                                                        <div className="list-group-item">
                                                            <a
                                                                className="notification notification-flush"
                                                                href="#!"
                                                            >
                                                                <div className="notification-avatar">
                                                                    <div className="avatar avatar-2xl me-3">
                                                                        <Image
                                                                            className="rounded-circle"
                                                                            src="/img/icons/weather-sm.jpg"
                                                                            alt=""
                                                                            height={40}
                                                                            width={40}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="notification-body">
                                                                    <p className="mb-1">
                                                                        The forecast today shows a low of 20℃ in
                                                                        California. See today's weather.
                                                                    </p>
                                                                    <span className="notification-time">
                                                                        <span
                                                                            className="me-2"
                                                                            role="img"
                                                                            aria-label="Emoji"
                                                                        >
                                                                            🌤️
                                                                        </span>
                                                                        1d
                                                                    </span>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="list-group-item">
                                                            <a
                                                                className="border-bottom-0 notification-unread  notification notification-flush"
                                                                href="#!"
                                                            >
                                                                <div className="notification-avatar">
                                                                    <div className="avatar avatar-xl me-3">
                                                                        <Image
                                                                            className="rounded-circle"
                                                                            src="/img/logos/oxford.png"
                                                                            alt=""
                                                                            height={40}
                                                                            width={40}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="notification-body">
                                                                    <p className="mb-1">
                                                                        <strong>University of Oxford</strong> created an
                                                                        event : "Causal Inference Hilary 2019"
                                                                    </p>
                                                                    <span className="notification-time">
                                                                        <span
                                                                            className="me-2"
                                                                            role="img"
                                                                            aria-label="Emoji"
                                                                        >
                                                                            ✌️
                                                                        </span>
                                                                        1w
                                                                    </span>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="list-group-item">
                                                            <a
                                                                className="border-bottom-0 notification notification-flush"
                                                                href="#!"
                                                            >
                                                                <div className="notification-avatar">
                                                                    <div className="avatar avatar-xl me-3">
                                                                        <Image
                                                                            className="rounded-circle"
                                                                            src="/img/team/10.jpg"
                                                                            alt=""
                                                                            height={40}
                                                                            width={40}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="notification-body">
                                                                    <p className="mb-1">
                                                                        <strong>James Cameron</strong> invited to join the
                                                                        group: United Nations International Children's
                                                                        Fund
                                                                    </p>
                                                                    <span className="notification-time">
                                                                        <span
                                                                            className="me-2"
                                                                            role="img"
                                                                            aria-label="Emoji"
                                                                        >
                                                                            🙋‍
                                                                        </span>
                                                                        2d
                                                                    </span>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="simplebar-placeholder"
                                        style={{ width: 0, height: 0 }}
                                    />
                                </div>
                                <div
                                    className="simplebar-track simplebar-horizontal"
                                    style={{ visibility: "hidden" }}
                                >
                                    <div
                                        className="simplebar-scrollbar"
                                        style={{ width: 0, display: "none" }}
                                    />
                                </div>
                                <div
                                    className="simplebar-track simplebar-vertical"
                                    style={{ visibility: "hidden" }}
                                >
                                    <div
                                        className="simplebar-scrollbar"
                                        style={{ height: 0, display: "none" }}
                                    />
                                </div>
                            </div>
                            <div className="card-footer text-center border-top">
                                <a className="card-link d-block" href="app/social/notifications.html">
                                    View all
                                </a>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="nav-item dropdown px-1">
                    <a
                        className="nav-link fa-icon-wait nine-dots p-1"
                        id="navbarDropdownMenu"
                        role="button"
                        data-hide-on-body-scroll="data-hide-on-body-scroll"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={43}
                            viewBox="0 0 16 16"
                            fill="none"
                        >
                            <circle cx={2} cy={2} r={2} fill="#6C6E71" />
                            <circle cx={2} cy={8} r={2} fill="#6C6E71" />
                            <circle cx={2} cy={14} r={2} fill="#6C6E71" />
                            <circle cx={8} cy={8} r={2} fill="#6C6E71" />
                            <circle cx={8} cy={14} r={2} fill="#6C6E71" />
                            <circle cx={14} cy={8} r={2} fill="#6C6E71" />
                            <circle cx={14} cy={14} r={2} fill="#6C6E71" />
                            <circle cx={8} cy={2} r={2} fill="#6C6E71" />
                            <circle cx={14} cy={2} r={2} fill="#6C6E71" />
                        </svg>
                    </a>
                    <div
                        className="dropdown-menu dropdown-caret dropdown-caret dropdown-menu-end dropdown-menu-card dropdown-caret-bg"
                        aria-labelledby="navbarDropdownMenu"
                    >
                        <div className="card shadow-none">
                            <div
                                className="scrollbar-overlay nine-dots-dropdown"
                                data-simplebar="init"
                            >
                                <div className="simplebar-wrapper" style={{ margin: 0 }}>
                                    <div className="simplebar-height-auto-observer-wrapper">
                                        <div className="simplebar-height-auto-observer" />
                                    </div>
                                    <div className="simplebar-mask">
                                        <div className="simplebar-offset" style={{ right: 0, bottom: 0 }}>
                                            <div
                                                className="simplebar-content-wrapper"
                                                tabIndex={0}
                                                role="region"
                                                aria-label="scrollable content"
                                                style={{ height: "auto", overflow: "hidden" }}
                                            >
                                                <div className="simplebar-content" style={{ padding: 0 }}>
                                                    <div className="card-body px-3">
                                                        <div className="row text-center gx-0 gy-0">
                                                            <div className="col-4">
                                                                <a
                                                                    className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                                                                    href="pages/user/profile.html"
                                                                    target="_blank"
                                                                >
                                                                    <div className="avatar avatar-2xl">
                                                                        {" "}
                                                                        <Image
                                                                            className="rounded-circle"
                                                                            src="/img/team/3.jpg"
                                                                            alt=""
                                                                            height={40}
                                                                            width={40}
                                                                        />
                                                                    </div>
                                                                    <p className="mb-0 fw-medium text-800 text-truncate fs-11">
                                                                        Account
                                                                    </p>
                                                                </a>
                                                            </div>
                                                            <div className="col-4">
                                                                <a
                                                                    className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                                                                    href="https://themewagon.com/"
                                                                    target="_blank"
                                                                >
                                                                    <Image
                                                                        className="rounded"
                                                                        src="/img/nav-icons/themewagon.png"
                                                                        alt=''
                                                                        height={40}
                                                                        width={40}
                                                                    />
                                                                    <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                                                                        Themewagon
                                                                    </p>
                                                                </a>
                                                            </div>
                                                            <div className="col-4">
                                                                <a
                                                                    className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                                                                    href="https://mailbluster.com/"
                                                                    target="_blank"
                                                                >
                                                                    <Image
                                                                        className="rounded"
                                                                        src="/img/nav-icons/mailbluster.png"
                                                                        alt=''
                                                                        height={40}
                                                                        width={40}
                                                                    />
                                                                    <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                                                                        Mailbluster
                                                                    </p>
                                                                </a>
                                                            </div>
                                                            <div className="col-4">
                                                                <a
                                                                    className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                                                                    href="#!"
                                                                    target="_blank"
                                                                >
                                                                    <Image
                                                                        className="rounded"
                                                                        src="/img/nav-icons/google.png"
                                                                        alt=''
                                                                        height={40}
                                                                        width={40}
                                                                    />
                                                                    <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                                                                        Google
                                                                    </p>
                                                                </a>
                                                            </div>
                                                            <div className="col-4">
                                                                <a
                                                                    className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                                                                    href="#!"
                                                                    target="_blank"
                                                                >
                                                                    <Image
                                                                        className="rounded"
                                                                        src="/img/nav-icons/spotify.png"
                                                                        alt=''
                                                                        height={40}
                                                                        width={40}
                                                                    />
                                                                    <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                                                                        Spotify
                                                                    </p>
                                                                </a>
                                                            </div>
                                                            <div className="col-4">
                                                                <a
                                                                    className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                                                                    href="#!"
                                                                    target="_blank"
                                                                >
                                                                    <Image
                                                                        className="rounded"
                                                                        src="/img/nav-icons/steam.png"
                                                                        alt=''
                                                                        height={40}
                                                                        width={40}
                                                                    />
                                                                    <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                                                                        Steam
                                                                    </p>
                                                                </a>
                                                            </div>
                                                            <div className="col-4">
                                                                <a
                                                                    className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                                                                    href="#!"
                                                                    target="_blank"
                                                                >
                                                                    <Image
                                                                        className="rounded"
                                                                        src="/img/nav-icons/github-light.png"
                                                                        alt=''
                                                                        height={40}
                                                                        width={40}
                                                                    />
                                                                    <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                                                                        Github
                                                                    </p>
                                                                </a>
                                                            </div>
                                                            <div className="col-4">
                                                                <a
                                                                    className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                                                                    href="#!"
                                                                    target="_blank"
                                                                >
                                                                    <Image
                                                                        className="rounded"
                                                                        src="/img/nav-icons/discord.png"
                                                                        alt=''
                                                                        height={40}
                                                                        width={40}
                                                                    />
                                                                    <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                                                                        Discord
                                                                    </p>
                                                                </a>
                                                            </div>
                                                            <div className="col-4">
                                                                <a
                                                                    className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                                                                    href="#!"
                                                                    target="_blank"
                                                                >
                                                                    <Image
                                                                        className="rounded"
                                                                        src="/img/nav-icons/xbox.png"
                                                                        alt=''
                                                                        height={40}
                                                                        width={40}
                                                                    />
                                                                    <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                                                                        xbox
                                                                    </p>
                                                                </a>
                                                            </div>
                                                            <div className="col-4">
                                                                <a
                                                                    className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                                                                    href="#!"
                                                                    target="_blank"
                                                                >
                                                                    <Image
                                                                        className="rounded"
                                                                        src="/img/nav-icons/trello.png"
                                                                        alt=''
                                                                        height={40}
                                                                        width={40}
                                                                    />
                                                                    <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                                                                        Kanban
                                                                    </p>
                                                                </a>
                                                            </div>
                                                            <div className="col-4">
                                                                <a
                                                                    className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                                                                    href="#!"
                                                                    target="_blank"
                                                                >
                                                                    <Image
                                                                        className="rounded"
                                                                        src="/img/nav-icons/hp.png"
                                                                        alt=''
                                                                        height={40}
                                                                        width={40}
                                                                    />
                                                                    <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                                                                        Hp
                                                                    </p>
                                                                </a>
                                                            </div>
                                                            <div className="col-12">
                                                                <hr className="my-3 mx-n3 bg-200" />
                                                            </div>
                                                            {/* <div className="col-4">
                                                                <a
                                                                    className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                                                                    href="#!"
                                                                    target="_blank"
                                                                >
                                                                    <Image
                                                                        className="rounded"
                                                                        src="/img/nav-icons/linkedin.png"
                                                                        alt=''
                                                                        height={40}
                                                                        width={40}
                                                                    />
                                                                    <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                                                                        Linkedin
                                                                    </p>
                                                                </a>
                                                            </div>
                                                            <div className="col-4">
                                                                <a
                                                                    className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                                                                    href="#!"
                                                                    target="_blank"
                                                                >
                                                                    <Image
                                                                        className="rounded"
                                                                        src="/img/nav-icons/twitter.png"
                                                                        alt=''
                                                                        height={40}
                                                                        width={40}
                                                                    />
                                                                    <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                                                                        Twitter
                                                                    </p>
                                                                </a>
                                                            </div>
                                                            <div className="col-4">
                                                                <a
                                                                    className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                                                                    href="#!"
                                                                    target="_blank"
                                                                >
                                                                    <Image
                                                                        className="rounded"
                                                                        src="/img/nav-icons/facebook.png"
                                                                        alt=''
                                                                        height={40}
                                                                        width={40}
                                                                    />
                                                                    <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                                                                        Facebook
                                                                    </p>
                                                                </a>
                                                            </div>
                                                            <div className="col-4">
                                                                <a
                                                                    className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                                                                    href="#!"
                                                                    target="_blank"
                                                                >
                                                                    <Image
                                                                        className="rounded"
                                                                        src="/img/nav-icons/instagram.png"
                                                                        alt=''
                                                                        height={40}
                                                                        width={40}
                                                                    />
                                                                    <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                                                                        Instagram
                                                                    </p>
                                                                </a>
                                                            </div>
                                                            <div className="col-4">
                                                                <a
                                                                    className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                                                                    href="#!"
                                                                    target="_blank"
                                                                >
                                                                    <Image
                                                                        className="rounded"
                                                                        src="/img/nav-icons/pinterest.png"
                                                                        alt=''
                                                                        height={40}
                                                                        width={40}
                                                                    />
                                                                    <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                                                                        Pinterest
                                                                    </p>
                                                                </a>
                                                            </div>
                                                            <div className="col-4">
                                                                <a
                                                                    className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                                                                    href="#!"
                                                                    target="_blank"
                                                                >
                                                                    <Image
                                                                        className="rounded"
                                                                        src="/img/nav-icons/slack.png"
                                                                        alt=''
                                                                        height={40}
                                                                        width={40}
                                                                    />
                                                                    <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                                                                        Slack
                                                                    </p>
                                                                </a>
                                                            </div>
                                                            <div className="col-4">
                                                                <a
                                                                    className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                                                                    href="#!"
                                                                    target="_blank"
                                                                >
                                                                    <Image
                                                                        className="rounded"
                                                                        src="/img/nav-icons/deviantart.png"
                                                                        alt=""
                                                                        height={40}
                                                                        width={40}
                                                                    />
                                                                    <p className="mb-0 fw-medium text-800 text-truncate fs-11 pt-1">
                                                                        Deviantart
                                                                    </p>
                                                                </a>
                                                            </div>
                                                            <div className="col-4">
                                                                <a
                                                                    className="d-block hover-bg-200 px-2 py-3 rounded-3 text-center text-decoration-none"
                                                                    href="app/events/event-detail.html"
                                                                    target="_blank"
                                                                >
                                                                    <div className="avatar avatar-2xl">
                                                                        <div className="avatar-name rounded-circle bg-primary-subtle text-primary">
                                                                            <span className="fs-7">E</span>
                                                                        </div>
                                                                    </div>
                                                                    <p className="mb-0 fw-medium text-800 text-truncate fs-11">
                                                                        Events
                                                                    </p>
                                                                </a>
                                                            </div>
                                                            <div className="col-12">
                                                                <a
                                                                    className="btn btn-outline-primary btn-sm mt-4"
                                                                    href="#!"
                                                                >
                                                                    Show more
                                                                </a>
                                                            </div> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="simplebar-placeholder"
                                        style={{ width: 0, height: 0 }}
                                    />
                                </div>
                                <div
                                    className="simplebar-track simplebar-horizontal"
                                    style={{ visibility: "hidden" }}
                                >
                                    <div
                                        className="simplebar-scrollbar"
                                        style={{ width: 0, display: "none" }}
                                    />
                                </div>
                                <div
                                    className="simplebar-track simplebar-vertical"
                                    style={{ visibility: "hidden" }}
                                >
                                    <div
                                        className="simplebar-scrollbar"
                                        style={{ height: 0, display: "none" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a
                        className="nav-link pe-0 ps-2"
                        id="navbarDropdownUser"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        <div className="avatar avatar-xl">
                            <Image
                                className="rounded-circle"
                                src="/img/team/3-thumb.png"
                                alt=""
                                height={40}
                                width={40}
                            />
                        </div>
                    </a>
                    <div
                        className="dropdown-menu dropdown-caret dropdown-caret dropdown-menu-end py-0"
                        aria-labelledby="navbarDropdownUser"
                    >
                        <div className="bg-white dark__bg-1000 rounded-2 py-2">
                            <a className="dropdown-item fw-bold text-warning" href="#!">
                                <svg
                                    className="svg-inline--fa fa-crown fa-w-20 me-1"
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="crown"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 640 512"
                                    data-fa-i2svg=""
                                >
                                    <path
                                        fill="currentColor"
                                        d="M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm64-320c-26.5 0-48 21.5-48 48 0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8 0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8 26.5 0 48-21.5 48-48s-21.5-48-48-48z"
                                    />
                                </svg>
                                {/* <span class="fas fa-crown me-1"></span> Font Awesome fontawesome.com */}
                                <span>Go Pro</span>
                            </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="#!">
                                Set status
                            </a>
                            <a className="dropdown-item" href="pages/user/profile.html">
                                Profile &amp; account
                            </a>
                            <a className="dropdown-item" href="#!">
                                Feedback
                            </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="pages/user/settings.html">
                                Settings
                            </a>
                            <a
                                className="dropdown-item"
                                href="pages/authentication/card/logout.html"
                            >
                                Logout
                            </a>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default Header