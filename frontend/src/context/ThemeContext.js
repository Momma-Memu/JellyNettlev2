import { useContext, createContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
    const [theme, setTheme] = useState('light');

    return (
        <ThemeContext.Provider value={{setTheme, theme}}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;

export const useConsumeContext = () => useContext(ThemeContext);