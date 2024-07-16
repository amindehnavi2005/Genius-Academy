import { useState, useEffect } from "react";

export default function useDarkSide() {
    const [theme, setTheme] = useState(localStorage.theme);
    const colorTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", theme);
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.add(theme);
        root.classList.remove(colorTheme);
        if (localStorage.theme == "dark") {
            localStorage.setItem("theme", theme);
        } else {
            localStorage.setItem("theme", theme);
        }
    }, [theme, colorTheme]);

    return [colorTheme, setTheme];
}
