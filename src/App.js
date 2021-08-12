import { Fragment, useState } from 'react';
import {
  MemoryRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Home } from './components/Home';
import { Note } from './components/Note';

import GlobalStyle from './styles/global';
import dark from './styles/themes/dark';
import light from './styles/themes/light';

export default function App() {
  const [isEditing, setIsEditing] = useState(true);
  const [notes, setNotes] = useState([]);
  const [theme, setTheme] = useState(dark);
  const [isDarkOn, setIsDarkOn] = useState(true);
  
  function toggleTheme() {
    setTheme(theme.title === 'dark' ? light : dark);
    setIsDarkOn(!isDarkOn);
  }
  
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        
        <Router>
          <Switch>
            <Route exact path="/">
              <Home setIsEditing={setIsEditing} notes={notes} toggleTheme={toggleTheme} isDarkOn={isDarkOn} />
            </Route>
            <Route path="/create">
              <Note setIsEditing={setIsEditing} isEditing={isEditing} setNotes={setNotes} notes={notes} />
            </Route>
            <Route path="/:id">
              <Note setIsEditing={setIsEditing} isEditing={isEditing} setNotes={setNotes} notes={notes} />
            </Route>
          </Switch>
        </Router>
      </Fragment>
    </ThemeProvider>
  );
}
