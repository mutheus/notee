import { Fragment, useState } from 'react';
import {
  MemoryRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Home } from './components/Home';
import { Note } from './components/Note';
import usePersistedState from './utils/usePersistedState';
import GlobalStyle from './styles/global';
import dark from './styles/themes/dark';
import light from './styles/themes/light';

export default function App() {
  const [isEditing, setIsEditing] = useState(true);
  const [notes, setNotes] = usePersistedState('notes', []);
  const [theme, setTheme] = usePersistedState('theme', dark);
  
  function toggleTheme() {
    setTheme(theme.title === 'dark' ? light : dark);
  }
  
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        
        <Router>
          <Switch>
            <Route exact path="/">
              <Home 
                setIsEditing={setIsEditing} 
                setNotes={setNotes}
                notes={notes} 
                toggleTheme={toggleTheme} 
              />
            </Route>
            <Route path="/:id">
              <Note 
                setIsEditing={setIsEditing} 
                isEditing={isEditing} 
                setNotes={setNotes} 
                notes={notes} 
              />
            </Route>
          </Switch>
        </Router>
      </Fragment>
    </ThemeProvider>
  );
}
