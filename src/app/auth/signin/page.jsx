import Image from "next/image";
import Link from "next/link";
import SigninForm from "./SigninForm";
import { auth } from "@/auth";
import { redirect } from 'next/navigation'
const page = async () => {

  const session = await auth();

  console.log(session?.user,"hfghfgf");

  if (session?.user) {
    return redirect('/')
  }

  return (
    <main className="main" id="top">
      <div className="container-fluid">
        <div className="row min-vh-100 flex-center g-0">
          <div className="col-lg-8 col-xxl-5 py-3 position-relative">
            <Image
              className="bg-auth-circle-shape"
              src="/img/icons/spot-illustrations/bg-shape.png"
              alt=""
              width={250}
              height={250}
            />
            <Image
              className="bg-auth-circle-shape-2"
              src="/img/icons/spot-illustrations/shape-1.png"
              alt=""
              width={150}
              height={150}
            />
            <div className="card overflow-hidden z-1">
              <div className="card-body p-0">
                <div className="row g-0 h-100">
                  <div className="col-md-5 text-center bg-card-gradient">
                    <div
                      className="position-relative p-4 pt-md-5 pb-md-7"
                      data-bs-theme="light"
                    >
                      <div
                        className="bg-holder bg-auth-card-shape"
                        style={{
                          backgroundImage:
                            "url(/img/icons/spot-illustrations/half-circle.png)",
                        }}
                      />
                      {/*/.bg-holder*/}
                      <div className="z-1 position-relative">
                        <Link
                          className="link-light mb-4 font-sans-serif fs-5 d-inline-block fw-bolder"
                          href="/"
                        >
                          falcon
                        </Link>
                        <p className="opacity-75 text-white">
                          With the power of Falcon, you can now focus only on
                          functionaries for your digital products, while leaving
                          the UI design on us!
                        </p>
                      </div>
                    </div>
                    <div
                      className="mt-3 mb-4 mt-md-4 mb-md-5"
                      data-bs-theme="light"
                    >
                      <p className="text-white">
                        Don't have an account?
                        <br />
                        <Link
                          className="text-decoration-underline link-light"
                          href="/auth/signup"
                        >
                          Get started!
                        </Link>
                      </p>
                      <p className="mb-0 mt-4 mt-md-5 fs-10 fw-semi-bold text-white opacity-75">
                        Read our{" "}
                        <Link
                          className="text-decoration-underline text-white"
                          href="#!"
                        >
                          terms
                        </Link>{" "}
                        and{" "}
                        <Link
                          className="text-decoration-underline text-white"
                          href="#!"
                        >
                          conditions{" "}
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-7 d-flex flex-center">
                    <div className="p-4 p-md-5 flex-grow-1">
                      <div className="row flex-between-center">
                        <div className="col-auto">
                          <h3>Account Login</h3>
                        </div>
                      </div>
                      <SigninForm />
                      <div className="position-relative mt-4">
                        <hr />
                        <div className="divider-content-center">
                          or log in with
                        </div>
                      </div>
                      <div className="row g-2 mt-2">
                        <div className="col-sm-6">
                          <Link
                            className="btn btn-outline-google-plus btn-sm d-block w-100"
                            href="#"
                          >
                            <span
                              className="fab fa-google-plus-g me-2"
                              data-fa-transform="grow-8"
                            />{" "}
                            google
                          </Link>
                        </div>
                        <div className="col-sm-6">
                          <Link
                            className="btn btn-outline-facebook btn-sm d-block w-100"
                            href="#"
                          >
                            <span
                              className="fab fa-facebook-square me-2"
                              data-fa-transform="grow-8"
                            />{" "}
                            facebook
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page
