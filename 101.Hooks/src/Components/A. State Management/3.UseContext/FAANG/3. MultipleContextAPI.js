import { createContext, useContext, useState } from "react";

const UserContext = createContext();
const ThemeContext = createContext();

function MultipleContextAPI() {
  const [theme, setTheme] = useState('light');
  const user = { name: 'Aman' };

  return (
    <UserContext.Provider value={user}>
      <ThemeContext.Provider value={theme}>
        <Child />
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default MultipleContextAPI;

function Child() {
  const theme = useContext(ThemeContext); // here theme = "light"
  const user = useContext(UserContext);   // here Alice = { name : "Aman"}

  return (
    <div>
      <p>User: {user.name}</p> {/* User:  Aman */}
      <p>Theme: {theme}</p>    {/* Theme: light */}
    </div>
  );
}

/*
Que. Can you have multiple Context.Providers in the same app?
Ans. Yes! Using multiple Providers helps isolate state updates, improving performance.
*/