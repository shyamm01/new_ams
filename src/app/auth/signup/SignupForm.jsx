"use client";
import { signupHandler } from "@/server-actions/authActions";
import { Erica_One } from "next/font/google";
import { use } from "react";
import { toast } from "sonner";
const SignupForm = () => {

  return (
    <form
      action={async (formData) => {
        const name = formData.get("name");
        const email = formData.get("email");
        const username = formData.get("username");
        const password = formData.get("password");
        const confirmPassword = formData.get("confirmPassword");
        const toastId = toast.loading("Loading...")
        const error = await signupHandler({ name, email, username, password, confirmPassword });
        if (error) {
          toast.error(error, {
            id: toastId,
          })
        } else {
          toast.success("Signup successful", {
            id: toastId,
          })
        }
      }
      }
    >
      <div className="mb-3">
        <label className="form-label" htmlFor="card-name">
          Name
        </label>
        <input
          className="form-control"
          type="text"
          name="name"
          autoComplete="on"
          id="name"
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="card-name">
          Username
        </label>
        <input
          className="form-control"
          type="text"
          name="username"
          autoComplete="on"
          id="username"
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="card-email">
          Email address
        </label>
        <input
          className="form-control"
          type="email"
          name="email"
          autoComplete="on"
          id="emailaddress"
        />
      </div>
      <div className="row gx-2">
        <div className="mb-3 col-sm-6">
          <label className="form-label" htmlFor="card-password">
            Password
          </label>
          <input
            name="password"
            className="form-control"
            type="password"
            autoComplete="on"
            id="password"
          />
        </div>
        <div className="mb-3 col-sm-6">
          <label className="form-label" htmlFor="card-confirm-password">
            Confirm Password
          </label>
          <input
            className="form-control"
            type="password"
            name="confirmPassword"
            autoComplete="on"
            id="confirm-password"
          />
        </div>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="card-register-checkbox"
        />
        <label className="form-label" htmlFor="card-register-checkbox">
          I accept the <a href="#!">terms </a>and{" "}
          <a className="white-space-nowrap" href="#!">
            privacy policy
          </a>
        </label>
      </div>
      <div className="mb-3">
        <button
          className="btn btn-primary d-block w-100 mt-3"
          type="submit"
          name="submit"
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default SignupForm;
