import { useEffect, useState } from "react"

export default function useSignIn() {
    const [isSignIn, changeIsSignInStatus] = useState(localStorage.isSignIn);
    const signInStatus = isSignIn === false ? true : false;
    localStorage.setItem("isSignIn", isSignIn);
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.add(isSignIn)
        if (localStorage.isSignIn == true) {
            localStorage.setItem("isSignIn", isSignIn);
        } else {
            localStorage.setItem("isSignIn", isSignIn);
        }
    }, [isSignIn, signInStatus]);

    return [signInStatus, changeIsSignInStatus];
}