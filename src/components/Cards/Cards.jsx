import React from 'react'

const Cards = () => {
    return (
        <>
            <div className="row g-3 mb-3">
                <div className="col-md-6 col-xxl-3">
                    <div className="card h-md-100 ecommerce-card-min-width">
                        <div className="card-header pb-0">
                            <h6 className="mb-0 mt-2 d-flex align-items-center">
                                Weekly Sales
                                <span
                                    className="ms-1 text-400"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    aria-label="Calculated according to last week's sales"
                                    data-bs-original-title="Calculated according to last week's sales"
                                >
                                    <svg
                                        className="svg-inline--fa fa-question-circle fa-w-16"
                                        data-fa-transform="shrink-1"
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="far"
                                        data-icon="question-circle"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        data-fa-i2svg=""
                                        style={{ transformOrigin: "0.5em 0.5em" }}
                                    >
                                        <g transform="translate(256 256)">
                                            <g transform="translate(0, 0)  scale(0.9375, 0.9375)  rotate(0 0 0)">
                                                <path
                                                    fill="currentColor"
                                                    d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"
                                                    transform="translate(-256 -256)"
                                                />
                                            </g>
                                        </g>
                                    </svg>
                                    {/* <span class="far fa-question-circle" data-fa-transform="shrink-1"></span> Font Awesome fontawesome.com */}
                                </span>
                            </h6>
                        </div>
                        <div className="card-body d-flex flex-column justify-content-end">
                            <div className="row">
                                <div className="col">
                                    <p className="font-sans-serif lh-1 mb-1 fs-5">$47K</p>
                                    <span className="badge badge-subtle-success rounded-pill fs-11">
                                        +3.5%
                                    </span>
                                </div>
                                <div className="col-auto ps-0">
                                    <div
                                        className="echart-bar-weekly-sales h-100"
                                        style={{
                                            userSelect: "none",
                                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                                            position: "relative"
                                        }}
                                        _echarts_instance_="ec_1723181238196"
                                    >
                                        <div
                                            style={{
                                                position: "relative",
                                                width: 136,
                                                height: 61,
                                                padding: 0,
                                                margin: 0,
                                                borderWidth: 0,
                                                cursor: "pointer"
                                            }}
                                        >
                                            <canvas
                                                data-zr-dom-id="zr_0"
                                                width={136}
                                                height={61}
                                                style={{
                                                    position: "absolute",
                                                    left: 0,
                                                    top: 0,
                                                    width: 136,
                                                    height: 61,
                                                    userSelect: "none",
                                                    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                                                    padding: 0,
                                                    margin: 0,
                                                    borderWidth: 0
                                                }}
                                            />
                                        </div>
                                        <div
                                            className=""
                                            style={{
                                                position: "absolute",
                                                display: "block",
                                                borderStyle: "solid",
                                                whiteSpace: "nowrap",
                                                zIndex: 9999999,
                                                boxShadow: "rgba(0, 0, 0, 0.2) 1px 2px 10px",
                                                backgroundColor: "rgb(249, 250, 253)",
                                                borderWidth: 1,
                                                borderRadius: 4,
                                                color: "rgb(11, 23, 39)",
                                                font: '14px / 21px "Microsoft YaHei"',
                                                padding: "7px 10px",
                                                top: 0,
                                                left: 0,
                                                transform: "translate3d(-16px, -4px, 0px)",
                                                borderColor: "rgb(216, 226, 239)",
                                                pointerEvents: "none",
                                                visibility: "hidden",
                                                opacity: 0
                                            }}
                                        >
                                            Mon : 200
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xxl-3">
                    <div className="card h-md-100">
                        <div className="card-header pb-0">
                            <h6 className="mb-0 mt-2">Total Order</h6>
                        </div>
                        <div className="card-body d-flex flex-column justify-content-end">
                            <div className="row justify-content-between">
                                <div className="col-auto align-self-end">
                                    <div className="fs-5 fw-normal font-sans-serif text-700 lh-1 mb-1">
                                        58.4K
                                    </div>
                                    <span className="badge rounded-pill fs-11 bg-200 text-primary">
                                        <svg
                                            className="svg-inline--fa fa-caret-up fa-w-10 me-1"
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fas"
                                            data-icon="caret-up"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 320 512"
                                            data-fa-i2svg=""
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"
                                            />
                                        </svg>
                                        {/* <span class="fas fa-caret-up me-1"></span> Font Awesome fontawesome.com */}
                                        13.6%
                                    </span>
                                </div>
                                <div className="col-auto ps-0 mt-n4">
                                    <div
                                        className="echart-default-total-order"
                                        data-echarts='{"tooltip":{"trigger":"axis","formatter":"{b0} : {c0}"},"xAxis":{"data":["Week 4","Week 5","Week 6","Week 7"]},"series":[{"type":"line","data":[20,40,100,120],"smooth":true,"lineStyle":{"width":3}}],"grid":{"bottom":"2%","top":"2%","right":"10px","left":"10px"}}'
                                        data-echart-responsive="true"
                                        _echarts_instance_="ec_1723181238201"
                                        style={{
                                            userSelect: "none",
                                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                                            position: "relative"
                                        }}
                                    >
                                        <div
                                            style={{
                                                position: "relative",
                                                width: 138,
                                                height: 90,
                                                padding: 0,
                                                margin: 0,
                                                borderWidth: 0
                                            }}
                                        >
                                            <canvas
                                                data-zr-dom-id="zr_0"
                                                width={138}
                                                height={90}
                                                style={{
                                                    position: "absolute",
                                                    left: 0,
                                                    top: 0,
                                                    width: 138,
                                                    height: 90,
                                                    userSelect: "none",
                                                    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                                                    padding: 0,
                                                    margin: 0,
                                                    borderWidth: 0
                                                }}
                                            />
                                        </div>
                                        <div className="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xxl-3">
                    <div className="card h-md-100">
                        <div className="card-body">
                            <div className="row h-100 justify-content-between g-0">
                                <div className="col-5 col-sm-6 col-xxl pe-2">
                                    <h6 className="mt-1">Market Share</h6>
                                    <div className="fs-11 mt-3">
                                        <div className="d-flex flex-between-center mb-1">
                                            <div className="d-flex align-items-center">
                                                <span className="dot bg-primary" />
                                                <span className="fw-semi-bold">Samsung</span>
                                            </div>
                                            <div className="d-xxl-none">33%</div>
                                        </div>
                                        <div className="d-flex flex-between-center mb-1">
                                            <div className="d-flex align-items-center">
                                                <span className="dot bg-info" />
                                                <span className="fw-semi-bold">Huawei</span>
                                            </div>
                                            <div className="d-xxl-none">29%</div>
                                        </div>
                                        <div className="d-flex flex-between-center mb-1">
                                            <div className="d-flex align-items-center">
                                                <span className="dot bg-300" />
                                                <span className="fw-semi-bold">Apple</span>
                                            </div>
                                            <div className="d-xxl-none">20%</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-auto position-relative">
                                    <div
                                        className="echart-market-share"
                                        _echarts_instance_="ec_1723181238197"
                                        style={{
                                            userSelect: "none",
                                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                                            position: "relative"
                                        }}
                                    >
                                        <div
                                            style={{
                                                position: "relative",
                                                width: 106,
                                                height: 106,
                                                padding: 0,
                                                margin: 0,
                                                borderWidth: 0,
                                                cursor: "default"
                                            }}
                                        >
                                            <canvas
                                                data-zr-dom-id="zr_0"
                                                width={106}
                                                height={106}
                                                style={{
                                                    position: "absolute",
                                                    left: 0,
                                                    top: 0,
                                                    width: 106,
                                                    height: 106,
                                                    userSelect: "none",
                                                    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                                                    padding: 0,
                                                    margin: 0,
                                                    borderWidth: 0
                                                }}
                                            />
                                        </div>
                                        <div className="" />
                                    </div>
                                    <div className="position-absolute top-50 start-50 translate-middle text-1100 fs-7">
                                        26M
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xxl-3">
                    <div className="card h-md-100">
                        <div className="card-header d-flex flex-between-center pb-0">
                            <h6 className="mb-0">Weather</h6>
                            <div className="dropdown font-sans-serif btn-reveal-trigger">
                                <button
                                    className="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal"
                                    type="button"
                                    id="dropdown-weather-update"
                                    data-bs-toggle="dropdown"
                                    data-boundary="viewport"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    fdprocessedid="vpy8lj"
                                >
                                    <svg
                                        className="svg-inline--fa fa-ellipsis-h fa-w-16 fs-11"
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="ellipsis-h"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        data-fa-i2svg=""
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"
                                        />
                                    </svg>
                                    {/* <span class="fas fa-ellipsis-h fs-11"></span> Font Awesome fontawesome.com */}
                                </button>
                                <div
                                    className="dropdown-menu dropdown-menu-end border py-2"
                                    aria-labelledby="dropdown-weather-update"
                                >
                                    <a className="dropdown-item" href="#!">
                                        View
                                    </a>
                                    <a className="dropdown-item" href="#!">
                                        Export
                                    </a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item text-danger" href="#!">
                                        Remove
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card-body pt-2">
                            <div className="row g-0 h-100 align-items-center">
                                <div className="col">
                                    <div className="d-flex align-items-center">
                                        <img
                                            className="me-3"
                                            src="/img/icons/weather-icon.png"
                                            alt=""
                                            height={60}
                                        />
                                        <div>
                                            <h6 className="mb-2">New York City</h6>
                                            <div className="fs-11 fw-semi-bold">
                                                <div className="text-warning">Sunny</div>Precipitation:
                                                50%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-auto text-center ps-2">
                                    <div className="fs-5 fw-normal font-sans-serif text-primary mb-1 lh-1">
                                        31°
                                    </div>
                                    <div className="fs-10 text-800">32° / 25°</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row g-0">
                <div className="col-lg-6 pe-lg-2 mb-3">
                    <div className="card h-lg-100 overflow-hidden">
                        <div className="card-header bg-body-tertiary">
                            <div className="row align-items-center">
                                <div className="col">
                                    <h6 className="mb-0">Running Projects</h6>
                                </div>
                                <div className="col-auto text-center pe-x1">
                                    <select
                                        className="form-select form-select-sm"
                                        fdprocessedid="52jdpo"
                                    >
                                        <option>Working Time</option>
                                        <option>Estimated Time</option>
                                        <option>Billable Time</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="card-body p-0">
                            <div className="row g-0 align-items-center py-2 position-relative border-bottom border-200">
                                <div className="col ps-x1 py-1 position-static">
                                    <div className="d-flex align-items-center">
                                        <div className="avatar avatar-xl me-3">
                                            <div className="avatar-name rounded-circle bg-primary-subtle text-dark">
                                                <span className="fs-9 text-primary">F</span>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h6 className="mb-0 d-flex align-items-center">
                                                <a className="text-800 stretched-link" href="#!">
                                                    Falcon
                                                </a>
                                                <span className="badge rounded-pill ms-2 bg-200 text-primary">
                                                    38%
                                                </span>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col py-1">
                                    <div className="row flex-end-center g-0">
                                        <div className="col-auto pe-2">
                                            <div className="fs-10 fw-semi-bold">12:50:00</div>
                                        </div>
                                        <div className="col-5 pe-x1 ps-2">
                                            <div
                                                className="progress bg-200 me-2"
                                                style={{ height: 5 }}
                                                role="progressbar"
                                                aria-valuenow={38}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            >
                                                <div
                                                    className="progress-bar rounded-pill"
                                                    style={{ width: "38%" }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-0 align-items-center py-2 position-relative border-bottom border-200">
                                <div className="col ps-x1 py-1 position-static">
                                    <div className="d-flex align-items-center">
                                        <div className="avatar avatar-xl me-3">
                                            <div className="avatar-name rounded-circle bg-success-subtle text-dark">
                                                <span className="fs-9 text-success">R</span>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h6 className="mb-0 d-flex align-items-center">
                                                <a className="text-800 stretched-link" href="#!">
                                                    Reign
                                                </a>
                                                <span className="badge rounded-pill ms-2 bg-200 text-primary">
                                                    79%
                                                </span>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col py-1">
                                    <div className="row flex-end-center g-0">
                                        <div className="col-auto pe-2">
                                            <div className="fs-10 fw-semi-bold">25:20:00</div>
                                        </div>
                                        <div className="col-5 pe-x1 ps-2">
                                            <div
                                                className="progress bg-200 me-2"
                                                style={{ height: 5 }}
                                                role="progressbar"
                                                aria-valuenow={79}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            >
                                                <div
                                                    className="progress-bar rounded-pill"
                                                    style={{ width: "79%" }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-0 align-items-center py-2 position-relative border-bottom border-200">
                                <div className="col ps-x1 py-1 position-static">
                                    <div className="d-flex align-items-center">
                                        <div className="avatar avatar-xl me-3">
                                            <div className="avatar-name rounded-circle bg-info-subtle text-dark">
                                                <span className="fs-9 text-info">B</span>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h6 className="mb-0 d-flex align-items-center">
                                                <a className="text-800 stretched-link" href="#!">
                                                    Boots4
                                                </a>
                                                <span className="badge rounded-pill ms-2 bg-200 text-primary">
                                                    90%
                                                </span>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col py-1">
                                    <div className="row flex-end-center g-0">
                                        <div className="col-auto pe-2">
                                            <div className="fs-10 fw-semi-bold">58:20:00</div>
                                        </div>
                                        <div className="col-5 pe-x1 ps-2">
                                            <div
                                                className="progress bg-200 me-2"
                                                style={{ height: 5 }}
                                                role="progressbar"
                                                aria-valuenow={90}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            >
                                                <div
                                                    className="progress-bar rounded-pill"
                                                    style={{ width: "90%" }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-0 align-items-center py-2 position-relative border-bottom border-200">
                                <div className="col ps-x1 py-1 position-static">
                                    <div className="d-flex align-items-center">
                                        <div className="avatar avatar-xl me-3">
                                            <div className="avatar-name rounded-circle bg-warning-subtle text-dark">
                                                <span className="fs-9 text-warning">R</span>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h6 className="mb-0 d-flex align-items-center">
                                                <a className="text-800 stretched-link" href="#!">
                                                    Raven
                                                </a>
                                                <span className="badge rounded-pill ms-2 bg-200 text-primary">
                                                    40%
                                                </span>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col py-1">
                                    <div className="row flex-end-center g-0">
                                        <div className="col-auto pe-2">
                                            <div className="fs-10 fw-semi-bold">21:20:00</div>
                                        </div>
                                        <div className="col-5 pe-x1 ps-2">
                                            <div
                                                className="progress bg-200 me-2"
                                                style={{ height: 5 }}
                                                role="progressbar"
                                                aria-valuenow={40}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            >
                                                <div
                                                    className="progress-bar rounded-pill"
                                                    style={{ width: "40%" }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-0 align-items-center py-2 position-relative">
                                <div className="col ps-x1 py-1 position-static">
                                    <div className="d-flex align-items-center">
                                        <div className="avatar avatar-xl me-3">
                                            <div className="avatar-name rounded-circle bg-danger-subtle text-dark">
                                                <span className="fs-9 text-danger">S</span>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h6 className="mb-0 d-flex align-items-center">
                                                <a className="text-800 stretched-link" href="#!">
                                                    Slick
                                                </a>
                                                <span className="badge rounded-pill ms-2 bg-200 text-primary">
                                                    70%
                                                </span>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col py-1">
                                    <div className="row flex-end-center g-0">
                                        <div className="col-auto pe-2">
                                            <div className="fs-10 fw-semi-bold">31:20:00</div>
                                        </div>
                                        <div className="col-5 pe-x1 ps-2">
                                            <div
                                                className="progress bg-200 me-2"
                                                style={{ height: 5 }}
                                                role="progressbar"
                                                aria-valuenow={70}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            >
                                                <div
                                                    className="progress-bar rounded-pill"
                                                    style={{ width: "70%" }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer bg-body-tertiary p-0">
                            <a className="btn btn-sm btn-link d-block w-100 py-2" href="#!">
                                Show all projects
                                <svg
                                    className="svg-inline--fa fa-chevron-right fa-w-10 ms-1 fs-11"
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="chevron-right"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512"
                                    data-fa-i2svg=""
                                >
                                    <path
                                        fill="currentColor"
                                        d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                                    />
                                </svg>
                                {/* <span class="fas fa-chevron-right ms-1 fs-11"></span> Font Awesome fontawesome.com */}
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 ps-lg-2 mb-3">
                    <div className="card h-lg-100">
                        <div className="card-header">
                            <div className="row flex-between-center">
                                <div className="col-auto">
                                    <h6 className="mb-0">Total Sales</h6>
                                </div>
                                <div className="col-auto d-flex">
                                    <select
                                        className="form-select form-select-sm select-month me-2"
                                        fdprocessedid="tajauyp"
                                    >
                                        <option value={0}>January</option>
                                        <option value={1}>February</option>
                                        <option value={2}>March</option>
                                        <option value={3}>April</option>
                                        <option value={4}>May</option>
                                        <option value={5}>Jun</option>
                                        <option value={6}>July</option>
                                        <option value={7}>August</option>
                                        <option value={8}>September</option>
                                        <option value={9}>October</option>
                                        <option value={10}>November</option>
                                        <option value={11}>December</option>
                                    </select>
                                    <div className="dropdown font-sans-serif btn-reveal-trigger">
                                        <button
                                            className="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal"
                                            type="button"
                                            id="dropdown-total-sales"
                                            data-bs-toggle="dropdown"
                                            data-boundary="viewport"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                            fdprocessedid="7hko5y"
                                        >
                                            <svg
                                                className="svg-inline--fa fa-ellipsis-h fa-w-16 fs-11"
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fas"
                                                data-icon="ellipsis-h"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"
                                                data-fa-i2svg=""
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"
                                                />
                                            </svg>
                                            {/* <span class="fas fa-ellipsis-h fs-11"></span> Font Awesome fontawesome.com */}
                                        </button>
                                        <div
                                            className="dropdown-menu dropdown-menu-end border py-2"
                                            aria-labelledby="dropdown-total-sales"
                                        >
                                            <a className="dropdown-item" href="#!">
                                                View
                                            </a>
                                            <a className="dropdown-item" href="#!">
                                                Export
                                            </a>
                                            <div className="dropdown-divider" />
                                            <a className="dropdown-item text-danger" href="#!">
                                                Remove
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body h-100 pe-0">
                            {/* Find the JS file for the following chart at: src\js\charts\echarts\total-sales.js*/}
                            {/* If you are not using gulp based workflow, you can find the transpiled code at: public\assets\js\theme.js*/}
                            <div
                                className="echart-line-total-sales h-100"
                                data-echart-responsive="true"
                                _echarts_instance_="ec_1723181238198"
                                style={{
                                    userSelect: "none",
                                    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                                    position: "relative"
                                }}
                            >
                                <div
                                    style={{
                                        position: "relative",
                                        width: 783,
                                        height: 283,
                                        padding: 0,
                                        margin: 0,
                                        borderWidth: 0,
                                        cursor: "default"
                                    }}
                                >
                                    <canvas
                                        data-zr-dom-id="zr_0"
                                        width={783}
                                        height={283}
                                        style={{
                                            position: "absolute",
                                            left: 0,
                                            top: 0,
                                            width: 783,
                                            height: 283,
                                            userSelect: "none",
                                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                                            padding: 0,
                                            margin: 0,
                                            borderWidth: 0
                                        }}
                                    />
                                </div>
                                <div
                                    className=""
                                    style={{
                                        position: "absolute",
                                        display: "block",
                                        borderStyle: "solid",
                                        whiteSpace: "nowrap",
                                        zIndex: 9999999,
                                        boxShadow: "rgba(0, 0, 0, 0.2) 1px 2px 10px",
                                        backgroundColor: "rgb(249, 250, 253)",
                                        borderWidth: 1,
                                        borderRadius: 4,
                                        color: "rgb(11, 23, 39)",
                                        font: '14px / 21px "Microsoft YaHei"',
                                        padding: "7px 10px",
                                        top: 0,
                                        left: 0,
                                        transform: "translate3d(604px, -26px, 0px)",
                                        borderColor: "rgb(216, 226, 239)",
                                        pointerEvents: "none",
                                        visibility: "hidden",
                                        opacity: 0
                                    }}
                                >
                                    Jan 14, 40
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row g-0">
                <div className="col-lg-6 col-xl-7 col-xxl-8 mb-3 pe-lg-2 mb-3">
                    <div className="card h-lg-100">
                        <div className="card-body d-flex align-items-center">
                            <div className="w-100">
                                <h6 className="mb-3 text-800">
                                    Using Storage{" "}
                                    <strong className="text-1100">1775.06 MB </strong>of 2 GB
                                </h6>
                                <div
                                    className="progress-stacked mb-3 rounded-3"
                                    style={{ height: 10 }}
                                >
                                    <div
                                        className="progress"
                                        style={{ width: "43.72%" }}
                                        role="progressbar"
                                        aria-valuenow="43.72"
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        <div className="progress-bar bg-progress-gradient border-end border-100 border-2" />
                                    </div>
                                    <div
                                        className="progress"
                                        style={{ width: "18.76%" }}
                                        role="progressbar"
                                        aria-valuenow="18.76"
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        <div className="progress-bar bg-info border-end border-100 border-2" />
                                    </div>
                                    <div
                                        className="progress"
                                        style={{ width: "9.38%" }}
                                        role="progressbar"
                                        aria-valuenow="9.38"
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        <div className="progress-bar bg-success border-end border-100 border-2" />
                                    </div>
                                    <div
                                        className="progress"
                                        style={{ width: "28.14%" }}
                                        role="progressbar"
                                        aria-valuenow="28.14"
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        <div className="progress-bar bg-200" />
                                    </div>
                                </div>
                                <div className="row fs-10 fw-semi-bold text-500 g-0">
                                    <div className="col-auto d-flex align-items-center pe-3">
                                        <span className="dot bg-primary" />
                                        <span>Regular</span>
                                        <span className="d-none d-md-inline-block d-lg-none d-xxl-inline-block">
                                            (895MB)
                                        </span>
                                    </div>
                                    <div className="col-auto d-flex align-items-center pe-3">
                                        <span className="dot bg-info" />
                                        <span>System</span>
                                        <span className="d-none d-md-inline-block d-lg-none d-xxl-inline-block">
                                            (379MB)
                                        </span>
                                    </div>
                                    <div className="col-auto d-flex align-items-center pe-3">
                                        <span className="dot bg-success" />
                                        <span>Shared</span>
                                        <span className="d-none d-md-inline-block d-lg-none d-xxl-inline-block">
                                            (192MB)
                                        </span>
                                    </div>
                                    <div className="col-auto d-flex align-items-center">
                                        <span className="dot bg-200" />
                                        <span>Free</span>
                                        <span className="d-none d-md-inline-block d-lg-none d-xxl-inline-block">
                                            (576MB)
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-xl-5 col-xxl-4 mb-3 ps-lg-2">
                    <div className="card h-lg-100">
                        <div
                            className="bg-holder bg-card"
                            style={{
                                backgroundImage:
                                    "url(/img/icons/spot-illustrations/corner-1.png)"
                            }}
                        />
                        {/*/.bg-holder*/}
                        <div className="card-body position-relative">
                            <h5 className="text-warning">Running out of your space?</h5>
                            <p className="fs-10 mb-0">
                                Your storage will be running out soon. Get more space and
                                powerful productivity features.
                            </p>
                            <a
                                className="btn btn-link fs-10 text-warning mt-lg-3 ps-0"
                                href="#!"
                            >
                                Upgrade storage
                                <svg
                                    className="svg-inline--fa fa-chevron-right fa-w-10 ms-1"
                                    data-fa-transform="shrink-4 down-1"
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="chevron-right"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512"
                                    data-fa-i2svg=""
                                    style={{ transformOrigin: "0.3125em 0.5625em" }}
                                >
                                    <g transform="translate(160 256)">
                                        <g transform="translate(0, 32)  scale(0.75, 0.75)  rotate(0 0 0)">
                                            <path
                                                fill="currentColor"
                                                d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                                                transform="translate(-160 -256)"
                                            />
                                        </g>
                                    </g>
                                </svg>
                                {/* <span class="fas fa-chevron-right ms-1" data-fa-transform="shrink-4 down-1"></span> Font Awesome fontawesome.com */}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row g-0">
                <div className="col-lg-7 col-xl-8 pe-lg-2 mb-3">
                    <div className="card h-lg-100 overflow-hidden">
                        <div className="card-body p-0">
                            <div className="table-responsive scrollbar">
                                <table className="table table-dashboard mb-0 table-borderless fs-10 border-200">
                                    <thead className="bg-body-tertiary">
                                        <tr>
                                            <th className="text-900">Best Selling Products</th>
                                            <th className="text-900 text-end">Revenue ($3333)</th>
                                            <th
                                                className="text-900 pe-x1 text-end"
                                                style={{ width: "8rem" }}
                                            >
                                                Revenue (%)
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-bottom border-200">
                                            <td>
                                                <div className="d-flex align-items-center position-relative">
                                                    <img
                                                        className="rounded-1 border border-200"
                                                        src="/img/products/12.png"
                                                        width={60}
                                                        alt=""
                                                    />
                                                    <div className="flex-1 ms-3">
                                                        <h6 className="mb-1 fw-semi-bold">
                                                            <a className="text-1100 stretched-link" href="#!">
                                                                Raven Pro
                                                            </a>
                                                        </h6>
                                                        <p className="fw-semi-bold mb-0 text-500">
                                                            Landing
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="align-middle text-end fw-semi-bold">
                                                $1311
                                            </td>
                                            <td className="align-middle pe-x1">
                                                <div className="d-flex align-items-center">
                                                    <div
                                                        className="progress me-3 rounded-3 bg-200"
                                                        style={{ height: 5, width: 80 }}
                                                        role="progressbar"
                                                        aria-valuenow={39}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    >
                                                        <div
                                                            className="progress-bar rounded-pill"
                                                            style={{ width: "39%" }}
                                                        />
                                                    </div>
                                                    <div className="fw-semi-bold ms-2">39%</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="border-bottom border-200">
                                            <td>
                                                <div className="d-flex align-items-center position-relative">
                                                    <img
                                                        className="rounded-1 border border-200"
                                                        src="/img/products/10.png"
                                                        width={60}
                                                        alt=""
                                                    />
                                                    <div className="flex-1 ms-3">
                                                        <h6 className="mb-1 fw-semi-bold">
                                                            <a className="text-1100 stretched-link" href="#!">
                                                                Boots4
                                                            </a>
                                                        </h6>
                                                        <p className="fw-semi-bold mb-0 text-500">
                                                            Portfolio
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="align-middle text-end fw-semi-bold">
                                                $860
                                            </td>
                                            <td className="align-middle pe-x1">
                                                <div className="d-flex align-items-center">
                                                    <div
                                                        className="progress me-3 rounded-3 bg-200"
                                                        style={{ height: 5, width: 80 }}
                                                        role="progressbar"
                                                        aria-valuenow={26}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    >
                                                        <div
                                                            className="progress-bar rounded-pill"
                                                            style={{ width: "26%" }}
                                                        />
                                                    </div>
                                                    <div className="fw-semi-bold ms-2">26%</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="border-bottom border-200">
                                            <td>
                                                <div className="d-flex align-items-center position-relative">
                                                    <img
                                                        className="rounded-1 border border-200"
                                                        src="/img/products/11.png"
                                                        width={60}
                                                        alt=""
                                                    />
                                                    <div className="flex-1 ms-3">
                                                        <h6 className="mb-1 fw-semi-bold">
                                                            <a className="text-1100 stretched-link" href="#!">
                                                                Falcon
                                                            </a>
                                                        </h6>
                                                        <p className="fw-semi-bold mb-0 text-500">Admin</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="align-middle text-end fw-semi-bold">
                                                $539
                                            </td>
                                            <td className="align-middle pe-x1">
                                                <div className="d-flex align-items-center">
                                                    <div
                                                        className="progress me-3 rounded-3 bg-200"
                                                        style={{ height: 5, width: 80 }}
                                                        role="progressbar"
                                                        aria-valuenow={16}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    >
                                                        <div
                                                            className="progress-bar rounded-pill"
                                                            style={{ width: "16%" }}
                                                        />
                                                    </div>
                                                    <div className="fw-semi-bold ms-2">16%</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="border-bottom border-200">
                                            <td>
                                                <div className="d-flex align-items-center position-relative">
                                                    <img
                                                        className="rounded-1 border border-200"
                                                        src="/img/products/14.png"
                                                        width={60}
                                                        alt=""
                                                    />
                                                    <div className="flex-1 ms-3">
                                                        <h6 className="mb-1 fw-semi-bold">
                                                            <a className="text-1100 stretched-link" href="#!">
                                                                Slick
                                                            </a>
                                                        </h6>
                                                        <p className="fw-semi-bold mb-0 text-500">
                                                            Builder
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="align-middle text-end fw-semi-bold">
                                                $343
                                            </td>
                                            <td className="align-middle pe-x1">
                                                <div className="d-flex align-items-center">
                                                    <div
                                                        className="progress me-3 rounded-3 bg-200"
                                                        style={{ height: 5, width: 80 }}
                                                        role="progressbar"
                                                        aria-valuenow={10}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    >
                                                        <div
                                                            className="progress-bar rounded-pill"
                                                            style={{ width: "10%" }}
                                                        />
                                                    </div>
                                                    <div className="fw-semi-bold ms-2">10%</div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center position-relative">
                                                    <img
                                                        className="rounded-1 border border-200"
                                                        src="/img/products/13.png"
                                                        width={60}
                                                        alt=""
                                                    />
                                                    <div className="flex-1 ms-3">
                                                        <h6 className="mb-1 fw-semi-bold">
                                                            <a className="text-1100 stretched-link" href="#!">
                                                                Reign Pro
                                                            </a>
                                                        </h6>
                                                        <p className="fw-semi-bold mb-0 text-500">Agency</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="align-middle text-end fw-semi-bold">
                                                $280
                                            </td>
                                            <td className="align-middle pe-x1">
                                                <div className="d-flex align-items-center">
                                                    <div
                                                        className="progress me-3 rounded-3 bg-200"
                                                        style={{ height: 5, width: 80 }}
                                                        role="progressbar"
                                                        aria-valuenow={8}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    >
                                                        <div
                                                            className="progress-bar rounded-pill"
                                                            style={{ width: "8%" }}
                                                        />
                                                    </div>
                                                    <div className="fw-semi-bold ms-2">8%</div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="card-footer bg-body-tertiary py-2">
                            <div className="row flex-between-center">
                                <div className="col-auto">
                                    <select
                                        className="form-select form-select-sm"
                                        fdprocessedid="9h31bv"
                                    >
                                        <option>Last 7 days</option>
                                        <option>Last Month</option>
                                        <option>Last Year</option>
                                    </select>
                                </div>
                                <div className="col-auto">
                                    <a className="btn btn-sm btn-falcon-default" href="#!">
                                        View All
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-xl-4 ps-lg-2 mb-3">
                    <div className="card h-100">
                        <div className="card-header d-flex flex-between-center bg-body-tertiary py-2">
                            <h6 className="mb-0">Shared Files</h6>
                            <a className="py-1 fs-10 font-sans-serif" href="#!">
                                View All
                            </a>
                        </div>
                        <div className="card-body pb-0">
                            <div className="d-flex mb-3 hover-actions-trigger align-items-center">
                                <div className="file-thumbnail">
                                    <img
                                        className="border h-100 w-100 object-fit-cover rounded-2"
                                        src="/img/products/5-thumb.png"
                                        alt=""
                                    />
                                </div>
                                <div className="ms-3 flex-shrink-1 flex-grow-1">
                                    <h6 className="mb-1">
                                        <a
                                            className="stretched-link text-900 fw-semi-bold"
                                            href="#!"
                                        >
                                            apple-smart-watch.png
                                        </a>
                                    </h6>
                                    <div className="fs-10">
                                        <span className="fw-semi-bold">Antony</span>
                                        <span className="fw-medium text-600 ms-2">Just Now</span>
                                    </div>
                                    <div className="hover-actions end-0 top-50 translate-middle-y">
                                        <a
                                            className="btn btn-tertiary border-300 btn-sm me-1 text-600"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            href="/img/icons/cloud-download.svg"
                                            download="download"
                                            aria-label="Download"
                                            data-bs-original-title="Download"
                                        >
                                            <img
                                                src="/img/icons/cloud-download.svg"
                                                alt=""
                                                width={15}
                                            />
                                        </a>
                                        <button
                                            className="btn btn-tertiary border-300 btn-sm me-1 text-600 shadow-none"
                                            type="button"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            aria-label="Edit"
                                            data-bs-original-title="Edit"
                                        >
                                            <img
                                                src="/img/icons/edit-alt.svg"
                                                alt=""
                                                width={15}
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <hr className="text-200" />
                            <div className="d-flex mb-3 hover-actions-trigger align-items-center">
                                <div className="file-thumbnail">
                                    <img
                                        className="border h-100 w-100 object-fit-cover rounded-2"
                                        src="/img/products/3-thumb.png"
                                        alt=""
                                    />
                                </div>
                                <div className="ms-3 flex-shrink-1 flex-grow-1">
                                    <h6 className="mb-1">
                                        <a
                                            className="stretched-link text-900 fw-semi-bold"
                                            href="#!"
                                        >
                                            iphone.jpg
                                        </a>
                                    </h6>
                                    <div className="fs-10">
                                        <span className="fw-semi-bold">Antony</span>
                                        <span className="fw-medium text-600 ms-2">
                                            Yesterday at 1:30 PM
                                        </span>
                                    </div>
                                    <div className="hover-actions end-0 top-50 translate-middle-y">
                                        <a
                                            className="btn btn-tertiary border-300 btn-sm me-1 text-600"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            href="/img/icons/cloud-download.svg"
                                            download="download"
                                            aria-label="Download"
                                            data-bs-original-title="Download"
                                        >
                                            <img
                                                src="/img/icons/cloud-download.svg"
                                                alt=""
                                                width={15}
                                            />
                                        </a>
                                        <button
                                            className="btn btn-tertiary border-300 btn-sm me-1 text-600 shadow-none"
                                            type="button"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            aria-label="Edit"
                                            data-bs-original-title="Edit"
                                        >
                                            <img
                                                src="/img/icons/edit-alt.svg"
                                                alt=""
                                                width={15}
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <hr className="text-200" />
                            <div className="d-flex mb-3 hover-actions-trigger align-items-center">
                                <div className="file-thumbnail">
                                    <img
                                        className="img-fluid"
                                        src="/img/icons/zip.png"
                                        alt=""
                                    />
                                </div>
                                <div className="ms-3 flex-shrink-1 flex-grow-1">
                                    <h6 className="mb-1">
                                        <a
                                            className="stretched-link text-900 fw-semi-bold"
                                            href="#!"
                                        >
                                            Falcon v1.8.2
                                        </a>
                                    </h6>
                                    <div className="fs-10">
                                        <span className="fw-semi-bold">Jane</span>
                                        <span className="fw-medium text-600 ms-2">
                                            27 Sep at 10:30 AM
                                        </span>
                                    </div>
                                    <div className="hover-actions end-0 top-50 translate-middle-y">
                                        <a
                                            className="btn btn-tertiary border-300 btn-sm me-1 text-600"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            href="/img/icons/cloud-download.svg"
                                            download="download"
                                            aria-label="Download"
                                            data-bs-original-title="Download"
                                        >
                                            <img
                                                src="/img/icons/cloud-download.svg"
                                                alt=""
                                                width={15}
                                            />
                                        </a>
                                        <button
                                            className="btn btn-tertiary border-300 btn-sm me-1 text-600 shadow-none"
                                            type="button"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            aria-label="Edit"
                                            data-bs-original-title="Edit"
                                        >
                                            <img
                                                src="/img/icons/edit-alt.svg"
                                                alt=""
                                                width={15}
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <hr className="text-200" />
                            <div className="d-flex mb-3 hover-actions-trigger align-items-center">
                                <div className="file-thumbnail">
                                    <img
                                        className="border h-100 w-100 object-fit-cover rounded-2"
                                        src="/img/products/2-thumb.png"
                                        alt=""
                                    />
                                </div>
                                <div className="ms-3 flex-shrink-1 flex-grow-1">
                                    <h6 className="mb-1">
                                        <a
                                            className="stretched-link text-900 fw-semi-bold"
                                            href="#!"
                                        >
                                            iMac.jpg
                                        </a>
                                    </h6>
                                    <div className="fs-10">
                                        <span className="fw-semi-bold">Rowen</span>
                                        <span className="fw-medium text-600 ms-2">
                                            23 Sep at 6:10 PM
                                        </span>
                                    </div>
                                    <div className="hover-actions end-0 top-50 translate-middle-y">
                                        <a
                                            className="btn btn-tertiary border-300 btn-sm me-1 text-600"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            href="/img/icons/cloud-download.svg"
                                            download="download"
                                            aria-label="Download"
                                            data-bs-original-title="Download"
                                        >
                                            <img
                                                src="/img/icons/cloud-download.svg"
                                                alt=""
                                                width={15}
                                            />
                                        </a>
                                        <button
                                            className="btn btn-tertiary border-300 btn-sm me-1 text-600 shadow-none"
                                            type="button"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            aria-label="Edit"
                                            data-bs-original-title="Edit"
                                        >
                                            <img
                                                src="/img/icons/edit-alt.svg"
                                                alt=""
                                                width={15}
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <hr className="text-200" />
                            <div className="d-flex mb-3 hover-actions-trigger align-items-center">
                                <div className="file-thumbnail">
                                    <img
                                        className="img-fluid"
                                        src="/img/icons/docs.png"
                                        alt=""
                                    />
                                </div>
                                <div className="ms-3 flex-shrink-1 flex-grow-1">
                                    <h6 className="mb-1">
                                        <a
                                            className="stretched-link text-900 fw-semi-bold"
                                            href="#!"
                                        >
                                            functions.php
                                        </a>
                                    </h6>
                                    <div className="fs-10">
                                        <span className="fw-semi-bold">John</span>
                                        <span className="fw-medium text-600 ms-2">
                                            1 Oct at 4:30 PM
                                        </span>
                                    </div>
                                    <div className="hover-actions end-0 top-50 translate-middle-y">
                                        <a
                                            className="btn btn-tertiary border-300 btn-sm me-1 text-600"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            href="/img/icons/cloud-download.svg"
                                            download="download"
                                            aria-label="Download"
                                            data-bs-original-title="Download"
                                        >
                                            <img
                                                src="/img/icons/cloud-download.svg"
                                                alt=""
                                                width={15}
                                            />
                                        </a>
                                        <button
                                            className="btn btn-tertiary border-300 btn-sm me-1 text-600 shadow-none"
                                            type="button"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            aria-label="Edit"
                                            data-bs-original-title="Edit"
                                        >
                                            <img
                                                src="/img/icons/edit-alt.svg"
                                                alt=""
                                                width={15}
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row g-0">
                <div className="col-md-6 col-xxl-3 pe-md-2 mb-3 mb-xxl-0">
                    <div className="card">
                        <div className="card-header d-flex flex-between-center bg-body-tertiary py-2">
                            <h6 className="mb-0">Active Users</h6>
                            <div className="dropdown font-sans-serif btn-reveal-trigger">
                                <button
                                    className="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal"
                                    type="button"
                                    id="dropdown-active-user"
                                    data-bs-toggle="dropdown"
                                    data-boundary="viewport"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    fdprocessedid="rwpyii"
                                >
                                    <svg
                                        className="svg-inline--fa fa-ellipsis-h fa-w-16 fs-11"
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="ellipsis-h"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        data-fa-i2svg=""
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"
                                        />
                                    </svg>
                                    {/* <span class="fas fa-ellipsis-h fs-11"></span> Font Awesome fontawesome.com */}
                                </button>
                                <div
                                    className="dropdown-menu dropdown-menu-end border py-2"
                                    aria-labelledby="dropdown-active-user"
                                >
                                    <a className="dropdown-item" href="#!">
                                        View
                                    </a>
                                    <a className="dropdown-item" href="#!">
                                        Export
                                    </a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item text-danger" href="#!">
                                        Remove
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card-body py-2">
                            <div className="d-flex align-items-center position-relative mb-3">
                                <div className="avatar avatar-2xl status-online">
                                    <img
                                        className="rounded-circle"
                                        src="/img/team/1.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="flex-1 ms-3">
                                    <h6 className="mb-0 fw-semi-bold">
                                        <a
                                            className="stretched-link text-900"
                                            href="pages/user/profile.html"
                                        >
                                            Emma Watson
                                        </a>
                                    </h6>
                                    <p className="text-500 fs-11 mb-0">Admin</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center position-relative mb-3">
                                <div className="avatar avatar-2xl status-online">
                                    <img
                                        className="rounded-circle"
                                        src="/img/team/2.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="flex-1 ms-3">
                                    <h6 className="mb-0 fw-semi-bold">
                                        <a
                                            className="stretched-link text-900"
                                            href="pages/user/profile.html"
                                        >
                                            Antony Hopkins
                                        </a>
                                    </h6>
                                    <p className="text-500 fs-11 mb-0">Moderator</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center position-relative mb-3">
                                <div className="avatar avatar-2xl status-away">
                                    <img
                                        className="rounded-circle"
                                        src="/img/team/3.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="flex-1 ms-3">
                                    <h6 className="mb-0 fw-semi-bold">
                                        <a
                                            className="stretched-link text-900"
                                            href="pages/user/profile.html"
                                        >
                                            Anna Karinina
                                        </a>
                                    </h6>
                                    <p className="text-500 fs-11 mb-0">Editor</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center position-relative mb-3">
                                <div className="avatar avatar-2xl status-offline">
                                    <img
                                        className="rounded-circle"
                                        src="/img/team/4.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="flex-1 ms-3">
                                    <h6 className="mb-0 fw-semi-bold">
                                        <a
                                            className="stretched-link text-900"
                                            href="pages/user/profile.html"
                                        >
                                            John Lee
                                        </a>
                                    </h6>
                                    <p className="text-500 fs-11 mb-0">Admin</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center position-relative false">
                                <div className="avatar avatar-2xl status-offline">
                                    <img
                                        className="rounded-circle"
                                        src="/img/team/5.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="flex-1 ms-3">
                                    <h6 className="mb-0 fw-semi-bold">
                                        <a
                                            className="stretched-link text-900"
                                            href="pages/user/profile.html"
                                        >
                                            Rowen Atkinson
                                        </a>
                                    </h6>
                                    <p className="text-500 fs-11 mb-0">Editor</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer bg-body-tertiary p-0">
                            <a
                                className="btn btn-sm btn-link d-block w-100 py-2"
                                href="app/social/followers.html"
                            >
                                All active users
                                <svg
                                    className="svg-inline--fa fa-chevron-right fa-w-10 ms-1 fs-11"
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="chevron-right"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512"
                                    data-fa-i2svg=""
                                >
                                    <path
                                        fill="currentColor"
                                        d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                                    />
                                </svg>
                                {/* <span class="fas fa-chevron-right ms-1 fs-11"></span> Font Awesome fontawesome.com */}
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xxl-3 ps-md-2 order-xxl-1 mb-3 mb-xxl-0">
                    <div className="card h-100">
                        <div className="card-header bg-body-tertiary d-flex flex-between-center py-2">
                            <h6 className="mb-0">Bandwidth Saved</h6>
                            <div className="dropdown font-sans-serif btn-reveal-trigger">
                                <button
                                    className="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal"
                                    type="button"
                                    id="dropdown-bandwidth-saved"
                                    data-bs-toggle="dropdown"
                                    data-boundary="viewport"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    fdprocessedid="egzza"
                                >
                                    <svg
                                        className="svg-inline--fa fa-ellipsis-h fa-w-16 fs-11"
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="ellipsis-h"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        data-fa-i2svg=""
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"
                                        />
                                    </svg>
                                    {/* <span class="fas fa-ellipsis-h fs-11"></span> Font Awesome fontawesome.com */}
                                </button>
                                <div
                                    className="dropdown-menu dropdown-menu-end border py-2"
                                    aria-labelledby="dropdown-bandwidth-saved"
                                >
                                    <a className="dropdown-item" href="#!">
                                        View
                                    </a>
                                    <a className="dropdown-item" href="#!">
                                        Export
                                    </a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item text-danger" href="#!">
                                        Remove
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card-body d-flex flex-center flex-column">
                            {/* Find the JS file for the following chart at: src/js/charts/echarts/bandwidth-saved.js*/}
                            {/* If you are not using gulp based workflow, you can find the transpiled code at: public//js/theme.js*/}
                            <div
                                className="echart-bandwidth-saved"
                                data-echart-responsive="true"
                                _echarts_instance_="ec_1723181238200"
                                style={{
                                    userSelect: "none",
                                    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                                }}
                            >
                                <div
                                    style={{
                                        position: "relative",
                                        width: 165,
                                        height: 165,
                                        padding: 0,
                                        margin: 0,
                                        borderWidth: 0
                                    }}
                                />
                            </div>
                            <div className="text-center mt-3">
                                <h6 className="fs-9 mb-1">
                                    <svg
                                        className="svg-inline--fa fa-check fa-w-16 text-success me-1"
                                        data-fa-transform="shrink-2"
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fas"
                                        data-icon="check"
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
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                                                    transform="translate(-256 -256)"
                                                />
                                            </g>
                                        </g>
                                    </svg>
                                    {/* <span class="fas fa-check text-success me-1" data-fa-transform="shrink-2"></span> Font Awesome fontawesome.com */}
                                    35.75 GB saved
                                </h6>
                                <p className="fs-10 mb-0">38.44 GB total bandwidth</p>
                            </div>
                        </div>
                        <div className="card-footer bg-body-tertiary py-2">
                            <div className="row flex-between-center">
                                <div className="col-auto">
                                    <select
                                        className="form-select form-select-sm"
                                        fdprocessedid="1e52gr"
                                    >
                                        <option>Last 6 Months</option>
                                        <option>Last Year</option>
                                        <option>Last 2 Year</option>
                                    </select>
                                </div>
                                <div className="col-auto">
                                    <a className="fs-10 font-sans-serif" href="#!">
                                        Help
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-6 px-xxl-2">
                    <div className="card h-100">
                        <div className="card-header bg-body-tertiary py-2">
                            <div className="row flex-between-center">
                                <div className="col-auto">
                                    <h6 className="mb-0">Top Products</h6>
                                </div>
                                <div className="col-auto d-flex">
                                    <a className="btn btn-link btn-sm me-2" href="#!">
                                        View Details
                                    </a>
                                    <div className="dropdown font-sans-serif btn-reveal-trigger">
                                        <button
                                            className="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal"
                                            type="button"
                                            id="dropdown-top-products"
                                            data-bs-toggle="dropdown"
                                            data-boundary="viewport"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                            fdprocessedid="i4ptn"
                                        >
                                            <svg
                                                className="svg-inline--fa fa-ellipsis-h fa-w-16 fs-11"
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fas"
                                                data-icon="ellipsis-h"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"
                                                data-fa-i2svg=""
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"
                                                />
                                            </svg>
                                            {/* <span class="fas fa-ellipsis-h fs-11"></span> Font Awesome fontawesome.com */}
                                        </button>
                                        <div
                                            className="dropdown-menu dropdown-menu-end border py-2"
                                            aria-labelledby="dropdown-top-products"
                                        >
                                            <a className="dropdown-item" href="#!">
                                                View
                                            </a>
                                            <a className="dropdown-item" href="#!">
                                                Export
                                            </a>
                                            <div className="dropdown-divider" />
                                            <a className="dropdown-item text-danger" href="#!">
                                                Remove
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body h-100">
                            {/* Find the JS file for the following chart at: src/js/charts/echarts/top-products.js*/}
                            {/* If you are not using gulp based workflow, you can find the transpiled code at: public//js/theme.js*/}
                            <div
                                className="echart-bar-top-products h-100"
                                data-echart-responsive="true"
                                _echarts_instance_="ec_1723181238199"
                                style={{
                                    userSelect: "none",
                                    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                                    position: "relative"
                                }}
                            >
                                <div
                                    style={{
                                        position: "relative",
                                        width: 755,
                                        height: 274,
                                        padding: 0,
                                        margin: 0,
                                        borderWidth: 0
                                    }}
                                >
                                    <canvas
                                        data-zr-dom-id="zr_0"
                                        width={755}
                                        height={274}
                                        style={{
                                            position: "absolute",
                                            left: 0,
                                            top: 0,
                                            width: 755,
                                            height: 274,
                                            userSelect: "none",
                                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                                            padding: 0,
                                            margin: 0,
                                            borderWidth: 0
                                        }}
                                    />
                                </div>
                                <div className="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards