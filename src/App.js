import { Fragment } from 'react';
import {
  MemoryRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import GlobalStyle from './globalStyles';
import styled from 'styled-components';
import { IoMoonOutline } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { BiEdit } from "react-icons/bi";
import { IoAddOutline } from "react-icons/io5";

export default function App() {
  const Header = styled.header`
    display: flex;
    justify-content: space-between;
    place-items: center;
    padding: 2em 1em;
    border-bottom: 1px solid #343434;
  `;
  
  const Logo = styled.h1`
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
  
  return (
    <Fragment>
      <GlobalStyle />
      
      <Router>
        <Switch>
          <Route exact path="/">
            <div>
              <Header>
                <Logo>Notee</Logo>
                
                <IconsWrapper>
                  <IoMoonOutline size={24} />
                  
                  <IconContainer>
                    <AiOutlineSearch size={24} />
                  </IconContainer>
                </IconsWrapper>
              </Header>
              
              <Link to="/create">
                <IconContainer style={{ borderRadius: '50%', position: 'fixed', bottom: '2em', right: '1em' }}>
                  <IoAddOutline size={24} />
                </IconContainer>
              </Link>
            </div>
          </Route>
          <Route path="/create">
            <Header>
              <Link to="/">
                <IconContainer>
                  <IoIosArrowBack size={24} />
                </IconContainer>
              </Link>
              
              <Link>
                <IconContainer>
                  <BiEdit size={24} />
                </IconContainer>
              </Link>
            </Header>
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}
