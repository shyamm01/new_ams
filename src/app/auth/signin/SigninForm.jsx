import { signinHandler } from "@/server-actions/authActions"
import Link from "next/link"

export const SigninForm = () => {
    return (
        <form action={async (formData) => {
            const email = formData.get('email');
            const password = formData.get('password');
            if (!email) {
                alert('Please enter your email');
            }
            if (!password) {
                alert('Please enter your password');
            }
            await signinHandler({ email, password })
        }}>
            <div className="mb-3">
                <label className="form-label" htmlFor="card-email">
                    Email address
                </label>
                <input
                    className="form-control"
                    id="card-email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                />
            </div>
            <div className="mb-3">
                <div className="d-flex justify-content-between">
                    <label
                        className="form-label"
                        htmlFor="card-password"
                    >
                        Password
                    </label>
                </div>
                <input
                    className="form-control"
                    id="card-password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                />
            </div>
            <div className="row flex-between-center">
                <div className="col-auto">
                    <div className="form-check mb-0">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="card-checkbox"
                            defaultChecked={true}
                        />
                        <label
                            className="form-check-label mb-0"
                            htmlFor="card-checkbox"
                        >
                            Remember me
                        </label>
                    </div>
                </div>
                <div className="col-auto">
                    <Link className="fs-10" href="forgot-password.html">
                        Forgot Password?
                    </Link>
                </div>
            </div>
            <div className="mb-3">
                <button
                    className="btn btn-primary d-block w-100 mt-3"
                    type="submit"
                    name="submit"
                >
                    Log in
                </button>
            </div>
        </form>
    )
}