import React from 'react'
import { prisma } from '../../../prisma/prisma'

const Sidebar = () => {


  const menu = async () => {
    const res = await prisma.menu.findMany({
      where:{
        userPermissions:{
          every:{
            userId:3
          }
        }
      },
      include: {
        children: {
          include: {
            children: {
              include: {
                children: true
              }
            }
          }
        }
      }
    });
    console.log(res,"res");
  };

  menu()


  return (
    <nav className="navbar navbar-light navbar-vertical navbar-expand-xl navbar-card">
      <div className="d-flex align-items-center">
        <div className="toggle-icon-wrapper">
          <button
            className="btn navbar-toggler-humburger-icon navbar-vertical-toggle"
            data-bs-toggle="tooltip"
            data-bs-placement="left"
            aria-label="Toggle Navigation"
            data-bs-original-title="Toggle Navigation"
            fdprocessedid="7npcmf"
          >
            <span className="navbar-toggle-icon">
              <span className="toggle-line" />
            </span>
          </button>
        </div>
        <a className="navbar-brand" href="index.html">
          <div className="d-flex align-items-center py-3">
            <img
              className="me-2"
              src="/img/icons/spot-illustrations/falcon.png"
              alt=""
              width={40}
            />
            <span className="font-sans-serif text-primary">falcon</span>
          </div>
        </a>
      </div>
      <div className="collapse navbar-collapse" id="navbarVerticalCollapse">
        <div className="navbar-vertical-content scrollbar">
          <ul className="navbar-nav flex-column mb-3" id="navbarVerticalNav">
            <li className="nav-item">
              {/* parent pages*/}
              <a
                className="nav-link dropdown-indicator collapsed"
                href="#dashboard"
                role="button"
                data-bs-toggle="collapse"
                aria-expanded="false"
                aria-controls="dashboard"
              >
                <div className="d-flex align-items-center">
                  <span className="nav-link-icon">
                    <svg
                      className="svg-inline--fa fa-chart-pie fa-w-17"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="chart-pie"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 544 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68 38.7-36.46 65.32-85.61 73.13-140.86 1.34-9.46-6.51-17.85-16.06-17.85zm-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8zM224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37 4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03 7.9-5.6 8.42-17.23 1.57-24.08L224 288z"
                      />
                    </svg>
                    {/* <span class="fas fa-chart-pie"></span> Font Awesome fontawesome.com */}
                  </span>
                  <span className="nav-link-text ps-1">Dashboard</span>
                </div>
              </a>
              <ul className="nav collapse" id="dashboard" style={{}}>
                <li className="nav-item">
                  <a className="nav-link active" href="index.html">
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Default</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="dashboard/analytics.html">
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Analytics</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="dashboard/crm.html">
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">CRM</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="dashboard/e-commerce.html">
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">E commerce</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="dashboard/lms.html">
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">LMS</span>
                      <span className="badge rounded-pill ms-2 badge-subtle-success">
                        New
                      </span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="dashboard/project-management.html"
                  >
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Management</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="dashboard/saas.html">
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">SaaS</span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="dashboard/support-desk.html">
                    <div className="d-flex align-items-center">
                      <span className="nav-link-text ps-1">Support desk</span>
                      <span className="badge rounded-pill ms-2 badge-subtle-success">
                        New
                      </span>
                    </div>
                  </a>
                  {/* more inner pages*/}
                </li>
              </ul>
            </li>
            <a
              className="nav-link dropdown-indicator"
              href="#e-commerce"
              role="button"
              data-bs-toggle="collapse"
              aria-expanded="false"
              aria-controls="e-commerce"
            >
              <div className="d-flex align-items-center">
                <span className="nav-link-icon">
                  <svg
                    className="svg-inline--fa fa-shopping-cart fa-w-18"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="shopping-cart"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
                    />
                  </svg>
                  {/* <span class="fas fa-shopping-cart"></span> Font Awesome fontawesome.com */}
                </span>
                <span className="nav-link-text ps-1">E commerce</span>
              </div>
            </a>
            <ul className="nav collapse" id="e-commerce">
              <li className="nav-item">
                <a
                  className="nav-link dropdown-indicator"
                  href="#product"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="e-commerce"
                >
                  <div className="d-flex align-items-center">
                    <span className="nav-link-text ps-1">Product</span>
                  </div>
                </a>
                {/* more inner pages*/}
                <ul className="nav collapse" id="product">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="app/e-commerce/product/product-list.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Product list
                        </span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="app/e-commerce/product/product-grid.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Product grid
                        </span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="app/e-commerce/product/product-details.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Product details
                        </span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="app/e-commerce/product/add-product.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Add product
                        </span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link dropdown-indicator"
                  href="#orders"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  aria-controls="e-commerce"
                >
                  <div className="d-flex align-items-center">
                    <span className="nav-link-text ps-1">Orders</span>
                  </div>
                </a>
                {/* more inner pages*/}
                <ul className="nav collapse" id="orders">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="app/e-commerce/orders/order-list.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">Order list</span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="app/e-commerce/orders/order-details.html"
                    >
                      <div className="d-flex align-items-center">
                        <span className="nav-link-text ps-1">
                          Order details
                        </span>
                      </div>
                    </a>
                    {/* more inner pages*/}
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="app/e-commerce/customers.html">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-text ps-1">Customers</span>
                  </div>
                </a>
                {/* more inner pages*/}
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="app/e-commerce/customer-details.html"
                >
                  <div className="d-flex align-items-center">
                    <span className="nav-link-text ps-1">
                      Customer details
                    </span>
                  </div>
                </a>
                {/* more inner pages*/}
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="app/e-commerce/shopping-cart.html"
                >
                  <div className="d-flex align-items-center">
                    <span className="nav-link-text ps-1">Shopping cart</span>
                  </div>
                </a>
                {/* more inner pages*/}
              </li>
              <li className="nav-item">
                <a className="nav-link" href="app/e-commerce/checkout.html">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-text ps-1">Checkout</span>
                  </div>
                </a>
                {/* more inner pages*/}
              </li>
              <li className="nav-item">
                <a className="nav-link" href="app/e-commerce/billing.html">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-text ps-1">Billing</span>
                  </div>
                </a>
                {/* more inner pages*/}
              </li>
              <li className="nav-item">
                <a className="nav-link" href="app/e-commerce/invoice.html">
                  <div className="d-flex align-items-center">
                    <span className="nav-link-text ps-1">Invoice</span>
                  </div>
                </a>
                {/* more inner pages*/}
              </li>
            </ul>

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
    </nav>
  )
}

export default Sidebar