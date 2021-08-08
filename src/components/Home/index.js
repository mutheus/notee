import { Link } from 'react-router-dom';
import { FiMoon } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";

import styled from 'styled-components';

export function Home({ setIsEditing }) {
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
  
  return (
    <>
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
    </>
  );
}