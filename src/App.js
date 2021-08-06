import { Fragment } from 'react';
import GlobalStyle from './globalStyles';
import styled from 'styled-components';
import { IoMoonOutline } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";

export default function App() {
  const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    place-items: center;
    padding: 2em 1em;
    border-bottom: 1px solid #343434;
  `;
  
  const Logo = styled.h1`
    margin: 0;
    font-weight: 500;
  `;
  
  const IconsWrapper = styled.div`
    display: flex;
    place-items: center;
    gap: 20px;
  `;
  
  const Search = styled.div`
    padding: 5px;
    background-color: var(--text);
    color: var(--theme);
    border-radius: 7px;
    display: flex;
    place-items: center;
  `;
  
  return (
    <Fragment>
      <GlobalStyle />
      
      <Wrapper>
        <Logo>Notee</Logo>
        
        <IconsWrapper>
          <IoMoonOutline size={24} />
          
          <Search>
            <AiOutlineSearch size={24} />
          </Search>
        </IconsWrapper>
      </Wrapper>
    </Fragment>
  );
}
