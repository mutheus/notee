import { Fragment, useState } from 'react';
import {
  MemoryRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import GlobalStyle from './globalStyles';
import styled from 'styled-components';
import { FiMoon } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { FiCheckSquare } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";

export default function App() {
  const [isEditing, setIsEditing] = useState(true);
  
  const Header = styled.header`
    display: flex;
    justify-content: space-between;
    place-items: center;
    padding: 2em 1em;
  `;
  
  const Title = styled.h1`
    font-size: 2rem;
    margin: 0;
    font-weight: 600;
  `;
  
  const IconsWrapper = styled.div`
    display: flex;
    place-items: center;
    gap: 20px;
  `;
  
  const IconContainer = styled.div`
    width: 50px;
    aspect-ratio: 1/1;
    background-color: #3B3B3B;
    color: var(--text);
    border-radius: 12px;
    display: flex;
    place-content: center;
    place-items: center;
  `;
  
  const NoteWrapper = styled.div`
    display: flex;
    gap: 2em;
    flex-direction: column;
    padding: 2em 1em;
  `;
  
  const Paragraph = styled.p`
    margin: 0;
  `;
  
  const Input = styled.input`
    display: flex;
    font-size: 2rem;
    width: 100%;
    outline: none;
    background-color: transparent;
    font-weight: 600;
    font-family: 'Source Sans Pro', sans-serif;
    padding: 0;
    margin: 0;
    color: var(--text);
    border: none;
  `;
  
  const Textarea = styled.textarea`
    display: flex;
    font-size: 1rem;
    width: 100%;
    outline: none;
    background-color: transparent;
    font-family: 'Source Sans Pro', sans-serif;
    padding: 0;
    margin: 0;
    color: var(--text);
    border: none;
  `;
  
  return (
    <Fragment>
      <GlobalStyle />
      
      <Router>
        <Switch>
          <Route exact path="/">
            <div>
              <Header>
                <Title>Notee</Title>
                
                <IconsWrapper>
                  <FiMoon size={24} />
                  
                  <IconContainer>
                    <FiSearch size={24} />
                  </IconContainer>
                </IconsWrapper>
              </Header>
              
              <Link to="/create" onClick={() => setIsEditing(true)}>
                <IconContainer style={{ borderRadius: '50%', position: 'fixed', bottom: '2em', right: '1em' }}>
                  <FiPlus size={24} />
                </IconContainer>
              </Link>
            </div>
          </Route>
          <Route path="/create">
            <div>
              <Header>
                <Link to="/">
                  <IconContainer>
                    <FiChevronLeft size={24} />
                  </IconContainer>
                </Link>
                
                { isEditing ? (
                  <Link onClick={() => setIsEditing(!isEditing)}>
                    <IconContainer>
                      <FiCheckSquare size={20} />
                    </IconContainer>
                  </Link>
                ) : (
                  <Link onClick={() => setIsEditing(!isEditing)}>
                    <IconContainer>
                      <FiEdit size={20} />
                    </IconContainer>
                  </Link>
                )}
              </Header>
              
              <NoteWrapper>
                { isEditing ? (
                  <Input placeholder="Type a title..." />
                ) : (
                  <Title>Type a title...</Title>
                )}
                
                { isEditing ? (
                  <Textarea rows="5" placeholder="Type something..."></Textarea>
                ) : (
                  <Paragraph>Type something...</Paragraph>
                )}
              </NoteWrapper>
            </div>
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}
