import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import { NoteItem } from '../NoteItem';
import { FiMoon } from "react-icons/fi";
import { FiSun } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { RiBookletLine } from "react-icons/ri";

import * as S from './styles';

export function Home({ 
  setIsEditing, 
  notes, 
  setNotes,
  toggleTheme 
}) {
  const { title, colors } = useContext(ThemeContext);
  
  function handleDelete(itemId) {
    const newNotes = notes.filter((item) => item.id !== itemId);
    setNotes(newNotes);
  }
  
  return (
    <S.HomeWrapper>
      <S.Header>
        <S.Title>Notes</S.Title>
        
        <S.IconsWrapper>
          {title === 'dark' ? (
            <FiSun onClick={toggleTheme} size={24} />
          ) : (
            <FiMoon onClick={toggleTheme} size={24} />
          )}
          
          <S.IconContainer>
            <FiSearch size={24} />
          </S.IconContainer>
        </S.IconsWrapper>
      </S.Header>
      
      <S.NoteContainer isEmpty={!!notes.length}>
        {!!notes.length ? (
          notes.map((item) => (
            <NoteItem 
              key={item.id}
              setIsEditing={setIsEditing}
              onDelete={handleDelete}
              item={item}
            />
          ))
        ) : (
          <>
            <RiBookletLine color={'#939393'} size={50} style={{gridColumn: '1/4', margin: '0 auto', strokeWidth: 1, stroke: `${colors.primary}`}} />
            <span style={{gridColumn: '1/4', margin: '0 auto', color: '#939393', marginBottom: '3em'}}>No notes</span>
            <S.Title style={{fontSize: '1rem', gridColumn: '1/4', color: '#939393', textAlign: 'center'}}>The notes you add will appear here.</S.Title>
          </>
        )}
      </S.NoteContainer>
      
      <Link to="/new" onClick={() => setIsEditing(true)}>
        <S.IconContainer style={{borderRadius: '50%', position: 'fixed', bottom: '1em', right: '1em', height: '55px' }}>
          <FiPlus size={26} />
        </S.IconContainer>
      </Link>
    </S.HomeWrapper>
  );
}