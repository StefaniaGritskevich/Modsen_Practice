import './App.css';

import {useState} from 'react';
import { ThemeProvider } from 'styled-components';

import { ThemeContext } from './components/ThemeContext/ThemeContext';
import KanbanBoard from './pages';
import { GlobalStyles } from './styles/GlobalStyle';
import { darkTheme, lightTheme } from './styles/theme';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
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
