"use client";

import { loginHandler } from '@/server-actions/authActions';
import Link from 'next/link'
import { useRouter } from 'next/navigation';

import React from 'react'
import { toast } from 'sonner';
import ErrorMessage from './ErrorMessage';


const SigninForm = () => {

    const router = useRouter();
    const error = router.query;
    // console.log(error);


    return (
        <form action={
            async (formData) => {
                const emailOrUsername = formData.get('username');
                const password = formData.get('password');
                if (!emailOrUsername) {
                    return toast.error('Email/Username is required')
                }
                if (!password) {
                    return toast.error('Password is required')
                }
                const toastId = toast.loading("Logging In")
                const error = await loginHandler({ username: emailOrUsername, password });
                console.log(error, "error");

                if (!error) {
                    toast.success('Login successful', {
                        id: toastId
                    });
                    router.refresh()
                } else {
                    toast.error(error, {
                        id: toastId
                    })
                }
            }
        }
        >
            <div className="mb-3">
                <label className="form-label" htmlFor="card-email">
                    Email/Username
                </label>
                <input
                    className="form-control"
                    id="card-email"
                    type="text"
                    name="username"
                    placeholder="Email or Username"
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
                <ErrorMessage />
            </div>
        </form>
    )
}

export default SigninForm