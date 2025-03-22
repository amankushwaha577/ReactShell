const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}> {/* ⚠️ New object created on every render */}
            {children}
        </ThemeContext.Provider>
    );
};
/*
❌ Common Problem: Providing New Object/Array Values Directly in createContext Provider
------------------
    a. When you pass an object or array directly as a value in a Context.Provider, React creates a new reference on every render. 
    b. This causes all consumer components (components using useContext) to re-render, even if the actual data inside the object hasn't changed.
    
    ❌ Why is this a problem?
    -------------------------
    a. { theme, setTheme } is an object.
    b. Each render creates a new object reference, even if the values haven't changed.
    c. React sees the new reference and triggers unnecessary re-renders for all context consumers
*/


/*
✅ The Solution: Use useMemo :
--------------------------------
    a. useMemo memoizes the value, ensuring it only changes when theme or setTheme changes.
    b. This prevents React from thinking the object is "new" on every render.

    Why Does useMemo Fix It?
    a. useMemo(() => ({ theme, setTheme }), [theme, setTheme]) ensures the object is only re-created when theme or setTheme changes.
    b. React does not create a new reference every render, reducing unnecessary re-renders.
*/

const ThemeProvider2 = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const value = useMemo(() => ({ theme, setTheme }), [theme, setTheme]); // ✅ Memoize context value

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};
