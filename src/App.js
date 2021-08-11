import { Fragment, useState } from 'react';
import {
  MemoryRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Home } from './components/Home';
import { Note } from './components/Note';

import GlobalStyle from './globalStyles';

export default function App() {
  const [isEditing, setIsEditing] = useState(true);
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState([]);
  
  return (
    <Fragment>
      <GlobalStyle />
      
      <Router>
        <Switch>
          <Route exact path="/">
            <Home setIsEditing={setIsEditing} notes={notes} />
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
  );
}
