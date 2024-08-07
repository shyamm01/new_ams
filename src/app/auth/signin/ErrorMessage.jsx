import { useRouter } from 'next/navigation';
import React from 'react'

const ErrorMessage = () => {
    const router = useRouter();
    const query = router.query;

    const getErrorMessage = (error) => {
        switch (error) {
            case "Invalid email or password.":
                return "Invalid email or password. Please try again.";
            case "Please provide both username and password.":
                return "Please provide both username and password.";
            default:
                return "An unexpected error occurred. Please try again.";
        }
    };

    return (
        <div>
            {query?.error && <p style={{ color: "red" }}>{getErrorMessage(query?.error)}</p>}
            {/* Sign-In Form Here */}
        </div>
    );
}

export default ErrorMessage