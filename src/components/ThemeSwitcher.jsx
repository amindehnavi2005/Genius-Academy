import React, { useState } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import useDarkSide from '../hooks/useDarkSide';

function ThemeSwitcher() {
    const [colorTheme, setTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState(
        colorTheme === "light" ? true : false
    );

    const toggleDarkMode = (checked) => {
        setTheme(colorTheme);
        setDarkSide(checked);
    };

    return (
        <DarkModeSwitch
            style={{ padding: 3 }}
            checked={darkSide}
            onChange={toggleDarkMode}
            size={30}
        />
    )
}

export default ThemeSwitcher