const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (username) => {   // ⚠️ New function created every render
                 setUser(username); 
     };
    return (
        <AuthContext.Provider value={login}>
            {children}
        </AuthContext.Provider>
    );
};

/*
❌ Common Problem: Providing Function Values Directly in createContext Provider
------------------
    a. When you pass an Function directly as a value (like setTheme or dispatch actions), in a Context.Provider, 
       React creates a new reference on every render. 
    b. This causes all consumer components (components using useContext) to re-render.
    
    ❌ Why is this a problem?
    -------------------------
    a. login is a function.
    b. Each render creates a new object reference for Login function.
    c. React sees the new reference and triggers unnecessary re-renders for all context consumers
*/


/*
✅ The Solution: Use useCallback :
--------------------------------
    a. useCallback((username) => setUser(username), []) ensures the login function is not re-created on every render.
    b. This prevents unnecessary re-renders for components consuming this context.

*/

const AuthProvider2 = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = useCallback((username) => { setUser(username); }, []); // ✅ Memoized function
    return (
        <AuthContext.Provider value={{ user, login }}>
            {children}
        </AuthContext.Provider>
    );
};


/*
🔥 Summary :
    a. Always wrap context values (objects/arrays) inside useMemo to prevent unnecessary re-renders.
    b. Wrap functions inside useCallback to avoid function re-creation.

    This makes your React app faster, more efficient, and scalable! 🚀
*/