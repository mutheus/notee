import { Link } from 'react-router-dom';
import { FiMoon } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";

import styled from 'styled-components';

export function Home({ setIsEditing, notes }) {
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
  
  const NoteContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em;
    padding: 2em 1em;
  `;
  
  const NoteItem = styled.div`
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 4px;
    padding: 1em;
    background-color: #FFAA91;
    color: var(--theme);
  `;
  
  const Subtitle = styled.h4`
    margin: 0;
  `;
  
  function handleNoteItemClick(id) {
    setIsEditing(false);
  }
  
  return (
    <>
      <Header>
        <Title>Notes</Title>
        
        <IconsWrapper>
          <FiMoon size={24} />
          
          <IconContainer>
            <FiSearch size={24} />
          </IconContainer>
        </IconsWrapper>
      </Header>
      
      <NoteContainer>
        { notes ? (
          notes.map((item, index) => <Link to={`/${index}`}><NoteItem key={index} onClick={() => handleNoteItemClick(index)}><Subtitle>{item.title}</Subtitle></NoteItem></Link>)
        ) : (
          <span>Nothing to see here yet.</span>
        )}
      </NoteContainer>
      
      <Link to="/create" onClick={() => setIsEditing(true)}>
        <IconContainer style={{ borderRadius: '50%', position: 'fixed', bottom: '2em', right: '1em' }}>
          <FiPlus size={24} />
        </IconContainer>
      </Link>
    </>
  );
}