import React from 'react';
import './App.css';
import KanbanBoard from './pages';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { ThemeContext } from './components/ThemeContext/ThemeContext';
import { GlobalStyles } from './components/GlobalStyle/GlobalStyle';

function App() {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyles />
        <KanbanBoard />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
export default App;
