import { useContext, createContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeContextProvider = (props) => {
    const [theme, setTheme] = useState('light');

    return (
        <ThemeContext.Provider value={{setTheme, theme}}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export const useConsumeContext = () => useContext(ThemeContext);