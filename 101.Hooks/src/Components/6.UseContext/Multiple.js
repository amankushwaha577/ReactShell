import { useContext, useState } from "react";

const UserContext = createContext();
const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');
  const user = { name: 'Alice' };

  return (
    <UserContext.Provider value={user}>
      <ThemeContext.Provider value={theme}>
        <Content />
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

function Content() {
  const theme = useContext(ThemeContext);
  const user = useContext(UserContext);

  return (
    <div>
      <p>User: {user.name}</p>
      <p>Theme: {theme}</p>
    </div>
  );
}
